import { IResolvers } from 'apollo-server-express';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { Database, RegisterBody, User } from '../../lib/types';
import { setCookie } from '../../utils/setCookie';

const userExist = async (db: Database, email: string) => {
  const user = await db.user.findOne({
    email,
  });

  if (user) {
    return true;
  }

  return false;
};

export const registerResolver: IResolvers = {
  Mutation: {
    register: async (
      _root: undefined,
      { input }: { input: RegisterBody },
      { db, res }: { db: Database; res: Response }
    ): Promise<User> => {
      try {
        const user = await userExist(db, input.email);
        if (user) throw new Error('user already exists');
        const hashedPassword = await bcrypt.hash(input.password, 10);
        const result = await (
          await db.user.insertOne({ ...input, password: hashedPassword })
        ).ops[0];

        if (!result) {
          throw new Error(`Could not Singup  user, Try again`);
        }

        setCookie(result._id, res);

        return {
          _id: result._id,
          email: result.email,
          avatar: result.avatar || 'https://via.placeholder.com/128',
          walletId: result.walletId,
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
    madeRequest: () => true,
  },
};
