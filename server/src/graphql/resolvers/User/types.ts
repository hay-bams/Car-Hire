import { Listing, Booking } from '../../../lib/types';

export interface UserArgs {
  id: string;
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

export interface ConnectStripeArgs {
  code: string
}
