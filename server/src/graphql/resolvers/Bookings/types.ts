import { ObjectId } from "mongodb";

export interface BookingArgs {
  id: ObjectId
  renter: ObjectId
  startDay: string
  endDay: string
}