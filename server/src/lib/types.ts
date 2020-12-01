import { Collection, ObjectId } from "mongodb";
import { User } from "../graphql/resolvers/User/types";

export interface Database {
  user: Collection<User>,
  listings: Collection<Listing>
}

export interface Loginbody {
  email: string;
  password: string;
  withCookie: boolean;
}

export interface RegisterBody {
  email: string;
  password: string;
  firstName:  string;
  lastName: string
}

export enum ListingType {
  SUV = "SUV",
  SEDAN = "SEDAN",
  VAN = "VAN",
  CONVERTIBLE = "CONVERTIBLE"
}

export interface Listing {
  _id: ObjectId,
  name: string,
  seats: number,
  description: string,
  type: ListingType,
  price: number,
  city: string,
  image: string,
  host: ObjectId
}