/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Logout
// ====================================================

export interface Logout_logout {
  __typename: "User";
  id: string | null;
  avatar: string | null;
  name: string | null;
  hasWallet: boolean | null;
  madeRequest: boolean | null;
}

export interface Logout {
  logout: Logout_logout;
}
