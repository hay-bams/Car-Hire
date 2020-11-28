import { Request } from "express";
import { Database } from "../lib/types";

export const authorize = (db: Database, req: Request) => {
  // get JWT token
  const token = req.get('X-CSRF-TOKEN')

  // decode token with JWT decode
  // get the user Id from the token.
  // if the user Id is equal to the id in the cookies
  // then authorize user

}