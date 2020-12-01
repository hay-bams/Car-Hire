/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ListingType {
  CONVERTIBLE = "CONVERTIBLE",
  SEDAN = "SEDAN",
  SUV = "SUV",
  VAN = "VAN",
}

export interface LoginInput {
  email?: string | null;
  password?: string | null;
  withCookie: boolean;
}

export interface RegisterInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
