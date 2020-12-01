import { gql } from "apollo-server-express";

export const typeDefs = gql`
  enum ListingType {
    SUV
    SEDAN
    VAN
    CONVERTIBLE
  }

  type User {
    id: ID
    avatar: String
    name: String
    hasWallet: Boolean
    madeRequest: Boolean
    listings(page: Int!, limit: Int!): Listings! 
    # authenticated: Boolean!
  }

  type Listings {
    total: Int!
    result: [Listing]
  }

  type Listing {
    id: ID!
    name: String
    seats: Int!
    description: String
    type: ListingType!
    price: Int!
    city: String!
    image: String!
    host: User!
  }

  # type Viewer {
  #   id: ID
  #   name: String
  #   hasWallet: Boolean
  #   avatar: String
  #   authenticated: Boolean!
  # }

  input LoginInput {
    email: String
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
    user(id: ID!): User!
  }

  type Mutation {
    login(input: LoginInput): User!
    register(input: RegisterInput!): User!
    logout: User!
  }
`