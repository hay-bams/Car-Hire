import  merge from 'lodash.merge'
import { registerResolver  } from './register'
import { loginResolver  } from './login'

export const resolvers = merge(registerResolver, loginResolver)

