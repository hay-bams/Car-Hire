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
  city: string;
  image: string;
}

export interface User_user_listings {
  __typename: "Listings";
  total: number;
  result: (User_user_listings_result | null)[] | null;
}

export interface User_user {
  __typename: "User";
  id: string | null;
  name: string | null;
  avatar: string | null;
  listings: User_user_listings;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: string;
  page: number;
  limit: number;
}
