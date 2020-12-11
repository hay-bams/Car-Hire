import { IResolvers } from 'apollo-server-express';
import { Request } from 'express';
import { Db, ObjectId } from 'mongodb';
import { Database, Listing, User } from '../../../lib/types';
import { ListingArgs } from './types';

export const listingsResolver: IResolvers = {
  Query: {
    listing: async (_root: undefined, { id }: ListingArgs, { db }: { req: Request, db: Database }): Promise<Listing> => {
      const listing = await db.listings.findOne({
        _id: new ObjectId(id)
      })

      if(!listing) {
        throw new Error('Listing not found')
      }

      return listing
    }
  },
  Listing: {
    id: (listing: Listing, _, __) => {
      return  listing._id.toString()
    },
    host: async (listing: Listing, _, { db }: { db: Database }): Promise<User | null> => {
      return await db.users.findOne<User>({
        _id: listing.host
      })
    }
  },
};
