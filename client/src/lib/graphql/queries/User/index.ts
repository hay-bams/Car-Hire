import { gql } from "@apollo/client";

export const USER =  gql`
  query User($id: ID!, $page: Int!, $limit: Int!) {
    user(id: $id) {
      id
      name
      avatar
      listings(page: $page, limit: $limit) {
        total
        result {
          id
          name
          seats
          description
          type
          price
          city
          image
        }
      }
    }
  }
`

