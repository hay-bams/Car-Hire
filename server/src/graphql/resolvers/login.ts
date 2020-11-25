import { IResolvers } from 'apollo-server-express';
import { Request, Response } from 'express';
import { ObjectID } from 'mongodb';
import bcrypt from 'bcrypt';
import { Database, User, Loginbody } from '../../lib/types';
import { setCookie } from '../../utils/setCookie';

const loginViaCookie = async (db: Database, req: Request, res: Response) => {
  const result = await db.user.findOne({
    _id: new ObjectID(req.signedCookies.user),
  });

  if (!result) {
    res.clearCookie('user');
    return null;
  }

  return result;
};

export const loginResolver: IResolvers = {
  Mutation: {
    login: async (
      _root: undefined,
      { input }: { input: Loginbody },
      { db, req, res }: { db: Database; req: Request; res: Response }
    ): Promise<User> => {
      try {
        const result = input.withCookie
          ? await loginViaCookie(db, req, res)
          : await db.user.findOne<User>({
              email: input.email,
            });

        if (!result && input.withCookie) {
          return {};
        }

        if (!result) {
          throw new Error('User does not exist, Please confirm your email is correct or signup');
        }

        if (!input.withCookie) {
          const match = await bcrypt.compare(
            input.password,
            result.password ? result.password : ''
          );
          if (!match)
            throw new Error(
              'Wrong Password, Please Try again with the correct password'
            );
        }

        setCookie(result._id, res);

        return {
          _id: result._id,
          email: result.email,
          avatar: result.avatar || 'https://via.placeholder.com/128',
          firstName: result.firstName,
          lastName: result.lastName,
          // authenticated: true
        };
      } catch (err) {
        throw new Error(`Something went wrong: ${err}`);
      }
    },
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
