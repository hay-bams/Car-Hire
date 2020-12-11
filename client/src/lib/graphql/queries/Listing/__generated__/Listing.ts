/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ListingType } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: Listing
// ====================================================

export interface Listing_listing_host {
  __typename: "User";
  id: string | null;
  name: string | null;
  avatar: string | null;
}

export interface Listing_listing {
  __typename: "Listing";
  id: string;
  name: string | null;
  seats: number;
  description: string | null;
  type: ListingType;
  city: string;
  address: string;
  price: number;
  image: string;
  host: Listing_listing_host;
}

export interface Listing {
  listing: Listing_listing;
}

export interface ListingVariables {
  id: string;
}
