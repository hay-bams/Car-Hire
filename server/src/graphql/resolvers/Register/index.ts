import { IResolvers } from 'apollo-server-express';
import bcrypt from 'bcrypt';
import { Response } from 'express';
import { Database, RegisterBody, User } from '../../../lib/types';
import { formatUser } from '../../../utils/formatUser';
import { setCookie } from '../../../utils/setCookie';

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
        return formatUser(result)
      } catch (err) {
        throw new Error(`Something went wrong: ${err}`);
      }
    },
  },
};
