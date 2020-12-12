import { IResolvers } from 'apollo-server-express';
import { Request, Response } from 'express';
import { ObjectID } from 'mongodb';
import { Stripe } from '../../../lib/api/Stripe';
import { Database, User } from '../../../lib/types';
import { formatUser } from '../../../utils/formatUser';
import { cookieOptions } from '../../../utils/setCookie';
import {
  ConnectStripeArgs,
  UserArgs,
  UserBookingArgs,
  UserBookingData,
  UserListingArgs,
  UserListingData,
} from './types';

export const userResolver: IResolvers = {
  Query: {
    user: async (
      _root,
      { id }: UserArgs,
      { db }: { db: Database }
    ): Promise<User> => {
      try {
        const user = await db.users.findOne({
          _id: new ObjectID(id),
        });

        if (!user) {
          throw new Error('User not founf');
        }

        return formatUser(user);
      } catch (err) {
        throw new Error(`Something went wrong: ${err}`);
      }
    },
  },
  Mutation: {
    logout: (_root: undefined, _, { res }: { res: Response }) => {
      try {
        res.clearCookie('user', cookieOptions);

        return {};
      } catch (err) {
        throw new Error(`Something went wrong, ${err}`);
      }
    },
    connectStripe: async (
      _root: undefined,
      { input }: { input: ConnectStripeArgs },
      { req, db }: { req: Request; db: Database }
    ): Promise<User> => {
      try {
        let user = await db.users.findOne({
          _id: new ObjectID(req.signedCookies.user),
        });

        if (!user) {
          throw new Error('User not found');
        }

        const wallet = await Stripe.connect(input.code);

        if (!wallet) {
          throw new Error('Stripe connection error');
        }

        const updatedRes = await db.users.findOneAndUpdate(
          { _id: user._id },
          { $set: { walletId: wallet.stripe_user_id } },
          { returnOriginal: false }
        );

        if (!updatedRes.value) {
          throw new Error('Could not update user');
        }

        user = updatedRes.value;

        return formatUser(user);
      } catch (err) {
        throw new Error(`Something went wrong: ${err}`);
      }
    },
    disconnectStripe: async (
      _root: undefined,
      _,
      { req, db }: { req: Request; db: Database }
    ): Promise<User>  => {
      let user = await db.users.findOne({
        _id: new ObjectID(req.signedCookies.user),
      });

      if (!user) {
        throw new Error('User not found');
      }

      const updatedRes = await db.users.findOneAndUpdate(
        { _id: user._id },
        { $set: { walletId: undefined } },
        { returnOriginal: false }
      );

      if (!updatedRes.value) {
        throw new Error('Could not update user');
      }

      user = updatedRes.value;

      return formatUser(user);
    },
  },
  User: {
    id: (user: User) => user._id,
    name: (user: User) =>
      user.firstName && user.lastName
        ? `${user.firstName} ${user.lastName}`
        : null,
    hasWallet: (user: User) => (user.walletId ? true : false),
    madeRequest: () => true,
    listings: async (
      user: User,
      { page, limit }: UserListingArgs,
      { db }: { db: Database }
    ) => {
      const data: UserListingData = {
        total: 0,
        result: [],
      };

      let cursor = await db.listings.find({
        _id: { $in: user.listings },
      });

      cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0);
      cursor = cursor.limit(limit);

      data.total = await cursor.count();
      data.result = await cursor.toArray();

      return data;
    },
    bookings: async (
      user: User,
      { page, limit }: UserBookingArgs,
      { db }: { db: Database }
    ) => {
      const data: UserBookingData = {
        total: 0,
        result: [],
      };

      // console.log(user)

      let cursor = await db.bookings.find({
        _id: { $in: user.bookings },
      });

      cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0);
      cursor = cursor.limit(limit);

      data.total = await cursor.count();
      data.result = await cursor.toArray();

      return data;
    },
  },
};
