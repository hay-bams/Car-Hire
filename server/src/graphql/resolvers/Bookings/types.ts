import { ObjectId } from "mongodb";

export interface BookingArgs {
  id: ObjectId
  source: string
  startDay: string
  endDay: string
}