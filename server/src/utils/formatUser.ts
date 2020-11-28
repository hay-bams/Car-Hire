import { User } from "../lib/types";

export const formatUser = (user: User) => {
  return {
    _id: user._id,
    email: user.email,
    avatar: user.avatar || 'https://via.placeholder.com/128',
    firstName: user.firstName,
    lastName: user.lastName,
    // authenticated: true
  }; 
}