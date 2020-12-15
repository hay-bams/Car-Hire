import React, { useState } from 'react';
import { UserDashboard } from './components/UserDashboard';
import { useQuery } from '@apollo/client';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { USER } from '../../lib/graphql';
import {
  User as UserData,
  UserVariables,
} from '../../lib/graphql/queries/User/__generated__/User';
import { User as UserType } from '../../lib/types';
import { User as _User } from '../../lib/graphql/queries/User/__generated__/User';
import { UserSkeleton } from './components/UserPageSkeleton';

interface MatchParams {
  id: string;
}

interface Props {
  authUser: UserType;
  setUser: (user: UserType | _User['user']) => void
}

const LIMIT = 4;

export const User = ({
  match,
  authUser,
  setUser
}: Props & RouteComponentProps<MatchParams>) => {
  const [listingPage, setListingPage] = useState(1);
  const [bookingPage, setBookingPage] = useState(1);
  const { data, error, loading } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id: match.params.id,
      listingPage,
      bookingPage,
      limit: LIMIT,
    },
  });
  
  if(loading) {
   return  <UserSkeleton />
  }

  if (!authUser.id) {
    return <Redirect to="/login" />;
  }

  const user = data && data.user ? data.user : null;
  const UserDashboardElement = user ? (
    <UserDashboard
      user={user}
      setUser={setUser}
      pageParams={match.params.id}
      limit={LIMIT}
      bookingPage={bookingPage}
      setBookingPage={setBookingPage}
      listingPage={listingPage}
      setListingPage={setListingPage}
    />
  ) : null;
  return <>{UserDashboardElement}</>;
};
