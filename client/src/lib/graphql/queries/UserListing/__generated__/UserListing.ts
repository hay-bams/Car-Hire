/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ListingType } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: UserListing
// ====================================================

export interface UserListing_user_listings_result {
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

export interface UserListing_user_listings {
  __typename: "Listings";
  total: number;
  result: (UserListing_user_listings_result | null)[] | null;
}

export interface UserListing_user {
  __typename: "User";
  id: string | null;
  name: string | null;
  avatar: string | null;
  listings: UserListing_user_listings;
}

export interface UserListing {
  user: UserListing_user;
}

export interface UserListingVariables {
  id: string;
  listingPage: number;
  limit: number;
}
