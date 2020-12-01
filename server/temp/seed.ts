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
      new ObjectId('5d378db94e84753160e08b3d'),
      new ObjectId('5d378db94e84753160e08b43'),
      new ObjectId('5d378db94e84753160e08b50'),
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
    _id: new ObjectId('5d378db94e84753160e08b3d'),
    name: 'Makari777',
    seats: 4,
    description: 'Leather Seats, Sunroof/MoonRoof, Heated Seats, Fast, Backup Camera, Navigation System, Remote Start, Bluetooth, Blind Sport Monitoring, Third Row Seating, Apple CarPlay/Android Auto',
    type: ListingType.SUV,
    price: 993,
    city: 'London',
    image: 'A.jpg',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b43'),
    name: 'MintP',
    seats: 4,
    description: 'Leather Seats, Fast, Navigation System, Bluetooth, Blind Sport Monitoring, Third Row Seating',
    type: ListingType.SUV,
    price: 261,
    city: 'Toronto',
    image: 'B.jpg',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b50'),
    name: 'AwissRacer',
    seats: 4,
    description: 'Leather Seats, Fast, Emergency Braking, Navigation System,  Blind Sport Monitoring, Third Row Seating',
    type: ListingType.SEDAN,
    price: 206,
    city: 'Lagos',
    image: 'C.jpg',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b31'),
    name: 'MacSedan 2019',
    seats: 4,
    description: 'Premium, VIP, Affordable, Fast',
    type: ListingType.SEDAN,
    price: 193,
    city: 'London',
    image: 'D.jpg',
    host: new ObjectId('5d378db94e84753160e08b55'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b41'),
    name: 'Convo8 2018',
    seats: 4,
    type: ListingType.CONVERTIBLE,
    price: 493,
    description: 'Leather Seats, Sunroof/MoonRoof, Fast, Backup Camera, Navigation System, Bluetooth, Blind Sport Monitoring, Third Row Seating',
    city: 'London',
    image: 'E.jpg',
    host: new ObjectId('5d378db94e84753160e08b55'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b4c'),
    name: 'Mojave 2020',
    seats: 8,
    description: 'Anti Lock braking, Parking Sensor, Fast, Navigation System, Blind Sport Monitoring, Third Row Seating',
    type: ListingType.SUV,
    price: 390,
    city: 'Toronto',
    image: 'F.jpg',
    host: new ObjectId('5d378db94e84753160e08b55'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b37'),
    name: 'MacOne 2019',
    seats: 10,
    description: 'Leather Seats, Sunroof/MoonRoof, Remote Start, Bluetooth, Blind Sport Monitoring, Apple CarPlay/Android Auto',
    type: ListingType.VAN,
    price: 421,
    city: 'Lagos',
    image: 'G.jpg',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b38'),
    name: 'Catalina 2021',
    seats: 8,
    description: 'Leather Seats, Sunroof/MoonRoof, Heated Seats, Fast, Backup Camera, Navigation System, Remote Start, Bluetooth, Blind Sport Monitoring, Third Row Seating, Apple CarPlay/Android Auto',
    type: ListingType.SUV,
    price: 901,
    city: 'Los Angeles',
    image: 'H.jpg',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3a'),
    name: 'Serria 2017',
    seats: 8,
    description: 'Premium, VIP, Affordable, Fast',
    type: ListingType.SUV,
    price: 143,
    city: 'Los Angeles',
    image: 'I.jpg',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b3b'),
    name: 'angleek 2014',
    seats: 10,
    description: 'Emergency Braking, Parking Sensor, Affordable, Clean',
    type: ListingType.VAN,
    price: 117,
    city: 'London',
    image: 'J.pgh',
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b53'),
    name: 'topper 2009',
    seats: 4,
    description: 'Leather Seat, Parking Sensor, Shiny Rim',
    type: ListingType.CONVERTIBLE,
    price: 138,
    city: 'Dubai',
    image: 'A.jpg',
    host: new ObjectId('5d378db94e84753160e08b57'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b54'),
    name: 'IntelAMD 2010',
    seats: 8,
    description: 'Leather Seats, Sunroof/MoonRoof, Heated Seats, Fast, Backup Camera',
    type: ListingType.SUV,
    price: 256,
    city: 'London',
    image: 'B.jpg',
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
