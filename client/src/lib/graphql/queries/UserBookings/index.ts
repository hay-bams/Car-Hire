import { gql } from "@apollo/client";

export const USER_BOOKING =  gql`
  query UserBooking($id: ID!, $bookingPage: Int!,  $limit: Int!) {
    user(id: $id) {
      id
      name
      avatar
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

