import { gql } from "@apollo/client";

export const DISCONNECT_STRIPE = gql`
  mutation DisconnectStripe {
    disconnectStripe {
      id
      avatar
      name
      hasWallet
      madeRequest
    }
  }
`