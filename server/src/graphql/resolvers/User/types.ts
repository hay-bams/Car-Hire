import { ObjectId } from 'mongodb';
import { Listing, Booking } from '../../../lib/types';

export interface UserArgs {
  id: string;
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

export interface UserListingData {
  total: number;
  result: Listing[];
}

export interface UserBookingData {
  total: number;
  result: Booking[];
}

export interface UserBookingArgs {
  page: number;
  limit: number;
}

export interface UserListingArgs {
  page: number;
  limit: number;
}
