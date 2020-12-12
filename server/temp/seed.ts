import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/database';
import { Booking, Listing, ListingType, User } from '../src/lib/types';

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
    bookings: [],
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
    bookings: [
      new ObjectId('5fc78ac4494ba3b7e049e586'),
      new ObjectId('5fc78acee4f8c8aaf65821b6'),
      new ObjectId('5fc78ad4d4c39b1f8abeba75'),
      new ObjectId('5fc78adbba61a3d2fb7c06e2'),
      new ObjectId('5fc78ae47fbd8cb082c36b77'),
    ],
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
    bookings: [],
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
    description:
      'Leather Seats, Sunroof/MoonRoof, Heated Seats, Fast, Backup Camera, Navigation System, Remote Start, Bluetooth, Blind Sport Monitoring, Third Row Seating, Apple CarPlay/Android Auto',
    type: ListingType.SUV,
    price: 993,
    city: 'London',
    address: '73 Walwyn Rd, CHARLWOOD',
    image: 'A.jpg',
    bookingsIndex: {},
    bookings: [],
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b43'),
    name: 'MintP',
    seats: 4,
    description:
      'Leather Seats, Fast, Navigation System, Bluetooth, Blind Sport Monitoring, Third Row Seating',
    type: ListingType.SUV,
    price: 261,
    city: 'Toronto',
    address: '500 Kingston Rd Toronto ON M4L 1V3',
    image: 'B.jpg',
    bookingsIndex: {},
    bookings: [],
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b50'),
    name: 'AwissRacer',
    seats: 4,
    description:
      'Leather Seats, Fast, Emergency Braking, Navigation System,  Blind Sport Monitoring, Third Row Seating',
    type: ListingType.SEDAN,
    price: 206,
    city: 'Lagos',
    address: 'Koko Street,Ogba',
    image: 'C.jpg',
    bookingsIndex: {},
    bookings: [],
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
    address: '7 Hertingfordbury Rd, NEWPORT',
    image: 'D.jpg',
    bookingsIndex: {},
    bookings: [],
    host: new ObjectId('5d378db94e84753160e08b55'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b41'),
    name: 'Convo8 2018',
    seats: 4,
    type: ListingType.CONVERTIBLE,
    price: 493,
    description:
      'Leather Seats, Sunroof/MoonRoof, Fast, Backup Camera, Navigation System, Bluetooth, Blind Sport Monitoring, Third Row Seating',
    city: 'London',
    address: '46 Uxbridge Road, SKIRBECK',
    image: 'E.jpg',
    bookingsIndex: {},
    bookings: [],
    host: new ObjectId('5d378db94e84753160e08b55'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b4c'),
    name: 'Mojave 2020',
    seats: 8,
    description:
      'Anti Lock braking, Parking Sensor, Fast, Navigation System, Blind Sport Monitoring, Third Row Seating',
    type: ListingType.SUV,
    price: 390,
    city: 'Toronto',
    address: '26 Goodwood Park Cres East York ON M4C 2G5',
    image: 'F.jpg',
    bookingsIndex: {},
    bookings: [],
    host: new ObjectId('5d378db94e84753160e08b55'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b37'),
    name: 'MacOne 2019',
    seats: 10,
    description:
      'Leather Seats, Sunroof/MoonRoof, Remote Start, Bluetooth, Blind Sport Monitoring, Apple CarPlay/Android Auto',
    type: ListingType.VAN,
    price: 421,
    city: 'Lagos',
    address: '12,Rasamond Street, Surulere',
    image: 'G.jpg',
    bookingsIndex: {},
    bookings: [],
    host: new ObjectId('5d378db94e84753160e08b56'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b38'),
    name: 'Catalina 2021',
    seats: 8,
    description:
      'Leather Seats, Sunroof/MoonRoof, Heated Seats, Fast, Backup Camera, Navigation System, Remote Start, Bluetooth, Blind Sport Monitoring, Third Row Seating, Apple CarPlay/Android Auto',
    type: ListingType.SUV,
    price: 901,
    city: 'Los Angeles',
    address: '32010 La 43 Hwy, Albany, LA, 70711',
    image: 'H.jpg',
    bookingsIndex: {
      '2019': {
        '11': {
          '04': true,
        },
        '09': {
          '19': true,
        },
        '05': {
          '22': true,
        },
      },
      '2020': {
        '06': {
          '15': true,
        },
        '10': {
          '05': true,
        },
        '02': {
          '17': true,
        },
        '11': {
          '24': true,
          '25': true,
          '26': true,
          '27': true,
          '28': true,
          '29': true,
          '12': true,
          '13': true,
        },
      },
    },
    bookings: [],
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
    address: '29977 W Bates Rd, Hammond, LA, 70403',
    image: 'I.jpg',
    bookingsIndex: {},
    bookings: [],
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
    address: '35 Neville Street, ILSINGTON',
    image: 'J.jpg',
    bookingsIndex: {},
    bookings: [],
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
    address: 'Box No. 55850',
    image: 'A.jpg',
    bookingsIndex: {},
    bookings: [],
    host: new ObjectId('5d378db94e84753160e08b57'),
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b54'),
    name: 'IntelAMD 2010',
    seats: 8,
    description:
      'Leather Seats, Sunroof/MoonRoof, Heated Seats, Fast, Backup Camera',
    type: ListingType.SUV,
    price: 256,
    city: 'London',
    address: '26 Malcolm Rd, LLANFAIR',
    image: 'B.jpg',
    bookingsIndex: {},
    bookings: [],
    host: new ObjectId('5d378db94e84753160e08b57'),
  },
];

const bookings: Booking[] = [
  {
    _id: new ObjectId('5fc78ac4494ba3b7e049e586'),
    renter: new ObjectId('5d378db94e84753160e08b56'),
    listing: new ObjectId('5d378db94e84753160e08b31'),
    startDay: 'some date',
    endDay: 'some date',
  },
  {
    _id: new ObjectId('5fc78acee4f8c8aaf65821b6'),
    renter: new ObjectId('5d378db94e84753160e08b56'),
    listing: new ObjectId('5d378db94e84753160e08b41'),
    startDay: 'some date',
    endDay: 'some date',
  },
  {
    _id: new ObjectId('5fc78ad4d4c39b1f8abeba75'),
    renter: new ObjectId('5d378db94e84753160e08b56'),
    listing: new ObjectId('5d378db94e84753160e08b4c'),
    startDay: 'some date',
    endDay: 'some date',
  },
  {
    _id: new ObjectId('5fc78adbba61a3d2fb7c06e2'),
    renter: new ObjectId('5d378db94e84753160e08b56'),
    listing: new ObjectId('5d378db94e84753160e08b53'),
    startDay: 'some date',
    endDay: 'some date',
  },
  {
    _id: new ObjectId('5fc78ae47fbd8cb082c36b77'),
    renter: new ObjectId('5d378db94e84753160e08b56'),
    listing: new ObjectId('5d378db94e84753160e08b54'),
    startDay: 'some date',
    endDay: 'some date',
  },
];

export const seed = async () => {
  console.log('Seed is running...');
  const db = await connectDatabase();

  for (const listing of listings) {
    await db.listings.insertOne(listing);
  }

  for (const user of users) {
    await db.users.insertOne(user);
  }

  for (const booking of bookings) {
    await db.bookings.insertOne(booking);
  }

  console.log('Done...');
};

seed();
