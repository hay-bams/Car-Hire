/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DisconnectStripe
// ====================================================

export interface DisconnectStripe_disconnectStripe {
  __typename: "User";
  id: string | null;
  avatar: string | null;
  name: string | null;
  hasWallet: boolean | null;
  madeRequest: boolean | null;
}

export interface DisconnectStripe {
  disconnectStripe: DisconnectStripe_disconnectStripe;
}
