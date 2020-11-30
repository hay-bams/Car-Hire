import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/database';
import { User } from '../src/graphql/resolvers/User/types';
import { Listing, ListingType } from '../src/lib/types';

const users: User[] = [
  {
    _id: new ObjectId('5d378db94e84753160e08b55'),
    email: 'haybams@gmail.com',
    password: '$2b$10$Jk6pCvXuDDgBVdiTx4VNAONGFvSv.ZX6depisFDwnEaJMARyO5xMW',
    firstName: 'Ayobami',
    avatar: '',
    lastName: 'Adelakun',
    walletId: 'acct_************',
    authenticated: false,
    listings: [
      new ObjectId('5d378db94e84753160e08b31'),
      new ObjectId('5d378db94e84753160e08b41'),
      new ObjectId('5d378db94e84753160e08b4c'),
    ],
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b56'),
    email: 'peace@gmail.com',
    password: '$2b$10$Jk6pCvXuDDgBVdiTx4VNAONGFvSv.ZX6depisFDwnEaJMARyO5xMW',
    firstName: 'Peace',
    avatar: '',
    lastName: 'Dike',
    walletId: 'acct_************',
    authenticated: false,
    listings: [
      new ObjectId('5d378db94e84753160e08b37'),
      new ObjectId('5d378db94e84753160e08b38'),
      new ObjectId('5d378db94e84753160e08b3a'),
      new ObjectId('5d378db94e84753160e08b3b'),
    ],
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b57'),
    email: 'chinyere@gmail.com',
    password: '$2b$10$Jk6pCvXuDDgBVdiTx4VNAONGFvSv.ZX6depisFDwnEaJMARyO5xMW',
    firstName: 'Chinyere',
    avatar: '',
    lastName: 'Dike',
    walletId: 'acct_************',
    authenticated: false,
    listings: [
      new ObjectId('5d378db94e84753160e08b53'),
      new ObjectId('5d378db94e84753160e08b54'),
    ],
  },
];

const listings: Listing[] = [
  {
    _id: new ObjectId('5d378db94e84753160e08b31'),
    name: 'MacSedan 2019',
    seats: 4,
    type: ListingType.SEDAN,
    price: 1993,
    city: 'London',
    image: 'some image',
    host: new ObjectId('5d378db94e84753160e08b55'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b41'),
    name: 'Convo8 2018',
    seats: 4,
    type: ListingType.CONVERTIBLE,
    price: 993,
    city: 'London',
    image: 'some image',
    host: new ObjectId('5d378db94e84753160e08b55'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b4c'),
    name: 'Mojave 2020',
    seats: 8,
    type: ListingType.SUV,
    price: 2993,
    city: 'Toronto',
    image: 'some image',
    host: new ObjectId('5d378db94e84753160e08b55'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b37'),
    name: 'MacOne 2019',
    seats: 10,
    type: ListingType.VAN,
    price: 3993,
    city: 'Lagos',
    image: 'some image',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b38'),
    name: 'Catalina 2021',
    seats: 8,
    type: ListingType.SUV,
    price: 8093,
    city: 'Los Angeles',
    image: 'some image',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3a'),
    name: 'Serria 2017',
    seats: 8,
    type: ListingType.SUV,
    price: 2093,
    city: 'Los Angeles',
    image: 'some image',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3b'),
    name: 'angleek 2014',
    seats: 10,
    type: ListingType.VAN,
    price: 1097,
    city: 'London',
    image: 'some image',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b53'),
    name: 'topper 2009',
    seats: 4,
    type: ListingType.CONVERTIBLE,
    price: 1089,
    city: 'Dubai',
    image: 'some image',
    host: new ObjectId('5d378db94e84753160e08b57'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b54'),
    name: 'IntelAMD 2010',
    seats: 8,
    type: ListingType.SUV,
    price: 1256,
    city: 'London',
    image: 'some image',
    host: new ObjectId('5d378db94e84753160e08b57'),
  },
];

export const seed = async () => {
  console.log('Seed is running...');
  const db = await connectDatabase();

  for (const listing of listings) {
    await db.listings.insertOne(listing);
  }

  for (const user of users) {
    await db.user.insertOne(user);
  }

  console.log('Done...');
};

seed();
