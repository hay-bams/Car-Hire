import  merge from 'lodash.merge'
import { registerResolver  } from './Register'
import { loginResolver  } from './Login'
import { userResolver } from './User'
import { listingsResolver } from './Listing'
import { bookingsResolver } from './Bookings'

export const resolvers = merge(registerResolver, loginResolver, userResolver, listingsResolver, bookingsResolver)

