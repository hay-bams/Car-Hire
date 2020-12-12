import { Collection, ObjectId } from 'mongodb';

export interface Database {
  users: Collection<User>;
  listings: Collection<Listing>;
  bookings: Collection<Booking>;
}

export interface Loginbody {
  email: string;
  password: string;
  withCookie: boolean;
}

export interface RegisterBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface User {
  _id?: ObjectId;
  email?: string;
  password?: string;
  firstName?: string;
  avatar?: string;
  lastName?: string;
  walletId?: string;
  authenticated?: boolean;
  listings?: ObjectId[];
  bookings?: ObjectId[];
}

export enum ListingType {
  SUV = 'SUV',
  SEDAN = 'SEDAN',
  VAN = 'VAN',
  CONVERTIBLE = 'CONVERTIBLE',
}

export interface BookingsIndexDay {
  [key: string]: boolean;
}

export interface BookingsIndexMonth {
  [key: string]: BookingsIndexDay;
}

export interface BookingIndex {
  [key: string]: BookingsIndexMonth;
}

export interface Listing {
  _id: ObjectId;
  name: string;
  seats: number;
  description: string;
  type: ListingType;
  price: number;
  city: string;
  address: string;
  image: string;
  host: ObjectId;
  bookingsIndex: BookingIndex;
  bookings?: ObjectId[];
}

export interface Booking {
  _id: ObjectId;
  listing: ObjectId;
  renter?: ObjectId;
  startDay: string;
  endDay: string;
}
