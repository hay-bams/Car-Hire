/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ListingType } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_listings_result {
  __typename: "Listing";
  id: string;
  name: string | null;
  seats: number;
  description: string | null;
  type: ListingType;
  price: number;
  bookingsIndex: string;
  city: string;
  image: string;
}

export interface User_user_listings {
  __typename: "Listings";
  total: number;
  result: (User_user_listings_result | null)[] | null;
}

export interface User_user_bookings_result_listing {
  __typename: "Listing";
  id: string;
  name: string | null;
  seats: number;
  description: string | null;
  type: ListingType;
  bookingsIndex: string;
  price: number;
  city: string;
  image: string;
}

export interface User_user_bookings_result {
  __typename: "Booking";
  id: string;
  listing: User_user_bookings_result_listing;
}

export interface User_user_bookings {
  __typename: "Bookings";
  total: number;
  result: User_user_bookings_result[];
}

export interface User_user {
  __typename: "User";
  id: string | null;
  name: string | null;
  avatar: string | null;
  hasWallet: boolean | null;
  madeRequest: boolean | null;
  listings: User_user_listings;
  bookings: User_user_bookings;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: string;
  listingPage: number;
  bookingPage: number;
  limit: number;
}
