/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConnectStripeInput } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: ConnectStripe
// ====================================================

export interface ConnectStripe_connectStripe {
  __typename: "User";
  id: string | null;
  avatar: string | null;
  name: string | null;
  hasWallet: boolean | null;
  madeRequest: boolean | null;
}

export interface ConnectStripe {
  connectStripe: ConnectStripe_connectStripe;
}

export interface ConnectStripeVariables {
  input?: ConnectStripeInput | null;
}
