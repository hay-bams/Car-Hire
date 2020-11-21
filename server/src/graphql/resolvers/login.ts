import { IResolvers } from 'apollo-server-express';
import { Request, Response } from 'express';
import { Database, User, Loginbody, Viewer } from '../../lib/types';
import { setCookie } from '../../utils/setCookie';

const loginViaCookie = async (db: Database, req: Request, res: Response) => {
  const result = await db.user.findOne({
    _id: req.signedCookies.user
  })

  if(!result) {
     res.clearCookie('user')
     return null
  }

  return {
    _id: result._id,
    email: result.email,
    avatar: result.avatar,
    firstName: result.firstName,
    lastName: result.lastName,
  };
}

export const loginResolver: IResolvers = {
  Mutation: {
    login: async (
      _root: undefined,
      { input }: { input: Loginbody },
      { db, req, res }: { db: Database; req: Request; res: Response }
    ): Promise<Viewer> => {
      try {
        const result = input.withCookie
          ? await loginViaCookie(db, req, res)
          : await db.user.findOne<User>({
              email: input.email,
            });

        if (!result ) {
          return {authenticated: false}
        }
        
        setCookie(result, res);
        return {
          _id: result._id,
          avatar: result.avatar,
          firstName: result.firstName,
          lastName: result.lastName,
          authenticated: true
        };
      } catch (err) {
        throw new Error(`Something went wrong: ${err}`);
      }
    },
  },
  Viewer: {
    id: (user: User) => user._id,
    name: (user: User) => user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : null,
    hasWallet: (user: User) => user.walletId ? true: false
  },
};
