import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String
    avatar: String
    name: String!
  }

  type Viewer {
    id: ID!
  }

  input LoginInput {
    email: String!
    password: String
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