import { gql } from "@apollo/client";

export const USER =  gql`
  query User($id: ID!, $listingPage: Int!, $bookingPage: Int!,  $limit: Int!) {
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
          bookingsIndex
          city
          image
        }
      }
      bookings(page: $bookingPage, limit: $limit) {
        total
        result {
          id
          listing {
            id
            name
            seats
            description
            type
            bookingsIndex
            price
            city
            image
          }
        }
      }
    }
  }
`

