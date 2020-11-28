import { IResolvers } from 'apollo-server-express';
import {  Response } from 'express';
import { ObjectID } from 'mongodb';
import { Database, User, UserArgs } from '../../../lib/types';
import { formatUser } from '../../../utils/formatUser';
import { cookieOptions } from '../../../utils/setCookie';

export const userResolver: IResolvers = {
  Query: {
    user: async (
      _root,
      { id }: UserArgs,
      { db }: { db: Database }
    ): Promise<User> => {
      try {
        const user = await db.user.findOne({
          _id: new ObjectID(id),
        });
  
        if(!user) {
          throw new Error('User not founf')
        }

        return formatUser(user)

      } catch(err) {
        throw new Error(`Something went wrong: ${err}`)
      }
    },
  },
  Mutation: {
    logout: (_root: undefined,
      args: {},
      { res }: { res: Response }) => {
      try {
        res.clearCookie('user', cookieOptions);
        return { };
      } catch(err) {
        throw new Error(`Something went wrong, ${err}`)
      }
    }
  },
  User: {
    id: (user: User) => user._id,
    name: (user: User) =>
      user.firstName && user.lastName
        ? `${user.firstName} ${user.lastName}`
        : null,
    hasWallet: (user: User) => (user.walletId ? true : false),
    madeRequest: () => true
  },
};