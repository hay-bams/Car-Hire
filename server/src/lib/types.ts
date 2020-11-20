import { Collection, ObjectID } from "mongodb";

export interface User {
  _id: ObjectID;
  email: string;
  password?: string;
  firstName:  string;
  avatar?: string;
  lastName: string
}

export interface Database {
  user: Collection<User> 
}

export interface userArgs {
  id: string
}

export interface Loginbody {
  email: string;
  password: string;
}

export interface RegisterBody {
  email: string;
  password: string;
  firstName:  string;
  lastName: string
}