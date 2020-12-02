import { User } from "../graphql/resolvers/User/types";

export const formatUser = (user: User) => {
  return {
    _id: user._id,
    email: user.email,
    avatar: user.avatar || 'https://via.placeholder.com/128',
    firstName: user.firstName,
    lastName: user.lastName,
    listings: user.listings,
    bookings: user.bookings
    // authenticated: true
  }; 
}