import  merge from 'lodash.merge'
import { registerResolver  } from './Register'
import { loginResolver  } from './Login'
import { userResolver } from './User'

export const resolvers = merge(registerResolver, loginResolver, userResolver)

