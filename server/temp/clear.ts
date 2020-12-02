// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import { connectDatabase } from "../src/database";

const clear = async () => {
  try {
    console.log("[clear] : running...");

    const db = await connectDatabase();

    const listings = await db.listings.find({}).toArray();
    const users = await db.user.find({}).toArray();
    const bookings = await db.bookings.find({}).toArray();

    if (listings.length > 0) {
      await db.listings.drop();
    }

    if (users.length > 0) {
      await db.user.drop();
    }

    if (bookings.length > 0) {
      await db.bookings.drop();
    }

    console.log("[clear] : success");
  } catch {
    throw new Error("failed to clear database");
  }
};

clear();
