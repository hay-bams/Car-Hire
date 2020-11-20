import { IResolvers } from 'apollo-server-express';
import { Request, Response } from 'express';
import { Database, User, Loginbody } from '../../lib/types';
import { setCookie } from '../../utils/setCookie';

export const loginResolver: IResolvers = {
  Mutation: {
    login: async (
      _root: undefined,
      { input }: { input: Loginbody },
      { db, res }: { db: Database, res: Response }
    ): Promise<User | undefined> => {
      try {
        const result = await db.user.findOne<User>({
          email: input.email,
        });
  
        if (!result) {
          throw new Error('user does not exist')
        }

        setCookie(result, res)
        return {
          _id: result._id,
          email: result.email,
          avatar: result.avatar,
          firstName: result.firstName,
          lastName: result.lastName,
        };
      } catch(err) {
        throw new Error(`Something went wrong: ${err}`)
      }
    },
  },
  User: {
    id: (user: User) => user._id,
    name: (user: User) => `${user.firstName} ${user.lastName}`
  },
};
