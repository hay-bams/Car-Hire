import { Response } from "express"
import { User } from "../lib/types"

const cookieOptions = {
  httpOnly: true,
  sameSite: true,
  signed: true,
  secure: process.env.NODE_ENV === 'development' ? false : true
}

export const setCookie = (result: User, res: Response) => {
  res.cookie('user', result._id, {
    ...cookieOptions,
    maxAge: 1000 * 60 * 60 * 24 * 365
  })
}