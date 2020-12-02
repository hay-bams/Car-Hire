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
    bookings(page: Int!, limit: Int!): Bookings!
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
    city: String!
    price: Int!
    image: String!
    host: User!
  }

  type Booking {
    id: ID!
    listing: Listing!
    renter: User!
    startDay: String!
    endDay: String!
  }

  type Bookings {
    total: Int!
    result: [Booking!]!
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