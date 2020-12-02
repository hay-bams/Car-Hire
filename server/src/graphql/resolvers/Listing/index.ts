import { IResolvers } from 'apollo-server-express';
import { Listing } from '../../../lib/types';
import { User } from '../User/types';

export const listingsResolver: IResolvers = {
  Listing: {
    id: (listing: Listing, _, __) => {
      return  listing._id.toString()
    }
  },
};
