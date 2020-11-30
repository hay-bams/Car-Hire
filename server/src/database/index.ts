import { MongoClient } from 'mongodb'
import { User } from '../graphql/resolvers/User/types';
import { Database, Listing } from '../lib/types';

const MONGO_LOCAL_URI='mongodb://localhost:27017'
export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(MONGO_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('car');

  return {
    user: db.collection<User>('user'),
    listings: db.collection<Listing>('listings')
  };
};