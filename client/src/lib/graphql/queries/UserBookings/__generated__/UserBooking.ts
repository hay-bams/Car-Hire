/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ListingType } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: UserBooking
// ====================================================

export interface UserBooking_user_bookings_result_listing {
  __typename: "Listing";
  id: string;
  name: string | null;
  seats: number;
  description: string | null;
  type: ListingType;
  price: number;
  city: string;
  image: string;
}

export interface UserBooking_user_bookings_result {
  __typename: "Booking";
  id: string;
  listing: UserBooking_user_bookings_result_listing;
}

export interface UserBooking_user_bookings {
  __typename: "Bookings";
  total: number;
  result: UserBooking_user_bookings_result[];
}

export interface UserBooking_user {
  __typename: "User";
  id: string | null;
  name: string | null;
  avatar: string | null;
  bookings: UserBooking_user_bookings;
}

export interface UserBooking {
  user: UserBooking_user;
}

export interface UserBookingVariables {
  id: string;
  bookingPage: number;
  limit: number;
}
