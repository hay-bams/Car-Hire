import { ObjectId } from "mongodb";
import { Listing } from "../../../lib/types";

export interface UserArgs {
  id: string
}

export interface User {
  _id?: ObjectId;
  email?: string;
  password?: string;
  firstName?:  string;
  avatar?: string;
  lastName?: string;
  walletId?: string
  authenticated?: boolean,
  listings?: ObjectId[]
}

export interface UserListingData {
  total: number,
  result: Listing[]
}

export interface UserListingArgs {
  page: number;
  limit: number;
}