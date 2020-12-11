import { gql } from "@apollo/client";

export const LISTING = gql`
  query Listing($id: ID!) {
    listing(id: $id) {
      id
      name
      seats
      description
      type
      city
      address
      price
      image
      host {
        id
        name
        avatar
      }
    }
  }
`