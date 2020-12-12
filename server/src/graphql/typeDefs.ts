import { gql } from "apollo-server-express";

export const typeDefs = gql`
  enum ListingType {
    SUV
    SEDAN
    VAN
    CONVERTIBLE
  }

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

  input CreateBookingInput {
    id: ID!
    renter: ID!
    startDay: String
    endDay: String
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
    address: String!
    price: Int!
    image: String!
    bookings(page: Int!, limit: Int!): Bookings!
    bookingsIndex: String!
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

  input ConnectStripeInput {
    code: String!
  }

  type Query {
    user(id: ID!): User!
    listing(id: ID!): Listing!
  }

  type Mutation {
    login(input: LoginInput): User!
    register(input: RegisterInput!): User!
    logout: User!
    createBooking(input: CreateBookingInput): Booking
    connectStripe(input: ConnectStripeInput): User!
    disconnectStripe: User! 
  }
`