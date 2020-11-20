import { IResolvers } from 'apollo-server-express';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { Database, RegisterBody, User } from '../../lib/types';

const userExist = async (db: Database, email: string) => {
  const user = await db.user.findOne({
    email
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
      { db, req, res }: { db: Database, req: Request, res: Response }
    ): Promise<User> => {
      try {
        const user = await userExist(db, input.email);
        if (user) throw new Error('user already exists');
        const hashedPassword = await bcrypt.hash(input.password, 10);
        const result = await (
          await db.user.insertOne({ ...input, password: hashedPassword })
        ).ops[0];
        
        return {
          _id: result._id, 
          email: result.email,
          avatar: result.avatar,
          firstName: result.firstName,
          lastName: result.lastName
        }
      } catch (err) {
        throw new Error(`Some error occured: ${err}`);
      }
    },
  },
  User: {
    id: (user: User) => user._id,
    name: (user: User) => `${user.firstName} ${user.lastName}`
  },
};
