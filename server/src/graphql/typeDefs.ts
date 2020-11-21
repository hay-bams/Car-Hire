import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # type User {
  #   id: ID
  #   email: String
  #   password: String
  #   avatar: String
  #   name: String
  # }

  type Viewer {
    id: ID
    name: String
    hasWallet: Boolean
    avatar: String
    authenticated: Boolean!
  }

  input LoginInput {
    email: String!
    password: String,
    withCookie: Boolean!  
  }

  input RegisterInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
  }

  type Query {
    user: Viewer!
  }

  type Mutation {
    login(input: LoginInput): Viewer!
    register(input: RegisterInput): Viewer!
  }
`