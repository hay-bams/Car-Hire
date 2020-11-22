import { Response } from "express"
import { ObjectID } from "mongodb"
import { User } from "../lib/types"

const cookieOptions = {
  httpOnly: true,
  sameSite: true,
  signed: true,
  secure: process.env.NODE_ENV === 'development' ? false : true
}

export const setCookie = (id: ObjectID | undefined, res: Response) => {
  res.cookie('user', id, {
    ...cookieOptions,
    maxAge: 1000 * 60 * 60 * 24 * 365
  })
}