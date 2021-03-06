import { IResolvers } from 'apollo-server-express';
import { ObjectId } from 'mongodb';
import { Booking, BookingIndex, Database } from '../../../lib/types';
import { Stripe } from '../../../lib/api/Stripe';
import { BookingArgs } from './types';
import { Request } from 'express';

const resolveIndex = (
  bookingIndex: BookingIndex,
  startDay: string,
  endDay: string
): BookingIndex => {
  let start = new Date(startDay);
  const end = new Date(endDay);
  const newBookingIndex = { ...bookingIndex };

  while (start <= end) {
    const y = start.getUTCFullYear();
    const m = start.getUTCMonth();
    const d = start.getUTCDate();
    if (!newBookingIndex[y]) {
      newBookingIndex[y] = {};
    }

    if (!newBookingIndex[y][m]) {
      newBookingIndex[y][m] = {};
    }

    if (!newBookingIndex[y][m][d]) {
      newBookingIndex[y][m][d] = true;
    } else {
      throw new Error(
        "selected dates can't overlap dates that have already been booked"
      );
    }

    start = new Date(start.getTime() + 86400000);
  }
  return newBookingIndex;
};

export const bookingsResolver: IResolvers = {
  Mutation: {
    createBooking: async (
      _,
      { input }: { input: BookingArgs },
      { db, req }: { req: Request; db: Database }
    ): Promise<Booking> => {
      try {
        // find the listing
        const listing = await db.listings.findOne({
          _id: new ObjectId(input.id),
        });

        //check if the lisint exsits
        if (!listing) {
          throw new Error('Listing Not Found');
        }

        // find renter
        const renter = await db.users.findOne({
          _id: new ObjectId(req.signedCookies.user),
        });

        // check if renter exist
        if (!renter) {
          throw new Error('User Not Found');
        }

        // Make sure renter is not host
        if (renter._id?.toString() === listing.host.toString()) {
          throw new Error('Host cannot rent their own listing');
        }

        // make sure checking date is less than checkoutDate
        const startDay = new Date(input.startDay);
        const endDay = new Date(input.endDay);

        if (startDay > endDay) {
          throw new Error('end day cannot be before start day');
        }

        // calculate totalPrice
        const totalPrice =
          listing.price *
          ((endDay.getTime() - startDay.getTime()) / 86400000 + 1);

        // get the host
        const host = await db.users.findOne({
          _id: new ObjectId(listing.host),
        });

        // check if the host as a wallet
        if (!host || !host?.walletId) {
          throw new Error(
            "the host either can't be found or is not connected with Stripe"
          );
        }

        const bookingIndex = resolveIndex(
          listing.bookingsIndex,
          input.startDay,
          input.endDay
        );

        // create stripe charge
        Stripe.charge(totalPrice, input.source, host.walletId);

        // Update the host income
        db.users.updateOne(
          {
            _id: host._id,
          },
          {
            $inc: { income: totalPrice },
          }
        );

        // create booking
        const insertedRes = await db.bookings.insertOne({
          listing: listing._id,
          renter: renter._id,
          startDay: input.startDay,
          endDay: input.endDay,
        });

        const insertedBooking = insertedRes.ops[0];

        // update listing booking fields
        db.listings.updateOne(
          { _id: listing._id },
          {
            $set: { bookingIndex },
            $push: { bookings: insertedBooking._id },
          }
        );

        // update the renter field
        db.users.updateOne(
          { _id: renter._id },
          { $push: { bookings: insertedBooking._id } }
        );

        return insertedBooking;
      } catch (err) {
        throw new Error(`Something went wrong: ${err}`);
      }
    },
  },
  Booking: {
    id: (booking: Booking, _, __): string | null => {
      return booking._id.toString();
    },
    listing: async (
      booking: Booking,
      _,
      { db }: { db: Database }
    ): Promise<Booking | null> => {
      return await db.listings.findOne({
        _id: booking.listing,
      });
    },
  },
};
