import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID
    avatar: String
    name: String
    hasWallet: Boolean
    authenticated: Boolean!
  }

  # type Viewer {
  #   id: ID
  #   name: String
  #   hasWallet: Boolean
  #   avatar: String
  #   authenticated: Boolean!
  # }

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
    user: User!
  }

  type Mutation {
    login(input: LoginInput): User!
    register(input: RegisterInput): User!
  }
`