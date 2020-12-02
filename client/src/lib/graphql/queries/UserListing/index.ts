import { gql } from "@apollo/client";

export const USER_LISTING =  gql`
  query UserListing($id: ID!, $listingPage: Int!,  $limit: Int!) {
    user(id: $id) {
      id
      name
      avatar
      listings(page: $listingPage, limit: $limit) {
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

