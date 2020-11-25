import { Collection, ObjectID } from "mongodb";

// export interface Viewer {
//   _id?: ObjectID,
//   walletId?: string,
//   avatar?: string,
//   authenticated: boolean,
//   firstName?: string
//   lastName?: string 
// }
export interface User {
  _id?: ObjectID;
  email?: string;
  password?: string;
  firstName?:  string;
  avatar?: string;
  lastName?: string;
  walletId?: string
  authenticated?: boolean,
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
  withCookie: boolean;
}

export interface RegisterBody {
  email: string;
  password: string;
  firstName:  string;
  lastName: string
}