import { IResolvers } from 'apollo-server-express';
import { Request, Response } from 'express';
import { Database, User, Loginbody } from '../../lib/types';

export const loginResolver: IResolvers = {
  Mutation: {
    login: async (
      _root: undefined,
      { input }: { input: Loginbody },
      { db, req, res }: { db: Database, req: Request, res: Response }
    ): Promise<User | undefined> => {
      const result = await db.user.findOne<User>({
        email: input.email,
      });

      if (result) {
        delete result.password;
        return result;
      }
    },
  },
  User: {
    id: (user: User) => user._id,
    name: (user: User) => `${user.firstName} ${user.lastName}`
  },
};
