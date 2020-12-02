import { IResolvers } from "apollo-server-express";
import { Booking, Database } from "../../../lib/types";

export const bookingsResolver: IResolvers = {
  Booking: {
    id: (booking: Booking, _,  { db  }: { db: Database }): string | null => {
      return booking._id.toString()
    },
    listing: async(booking: Booking, _, { db }: { db: Database }): Promise<Booking | null> => {
      return await db.listings.findOne({
        _id: booking.listing
      })
    }
  }
}