/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RegisterInput } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
  __typename: "User";
  id: string | null;
  avatar: string | null;
  name: string | null;
  hasWallet: boolean | null;
  madeRequest: boolean | null;
}

export interface Register {
  register: Register_register;
}

export interface RegisterVariables {
  input: RegisterInput;
}
