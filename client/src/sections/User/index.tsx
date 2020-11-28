import React from 'react';
import { UserDashboard } from './components/UserDashboard';
import { useQuery } from '@apollo/client';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { USER } from '../../lib/graphql';
import {  User as UserData, UserVariables } from '../../lib/graphql/queries/User/__generated__/User'
import { User as UserType } from '../../lib/types';

interface MatchParams {
  id: string
}

interface Props {
  authUser: UserType
}

export const User = ({ match, authUser }: Props & RouteComponentProps<MatchParams>) => {
  const { data, error, loading } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id: match.params.id
    }
  });

  if(!authUser.id) {
    return <Redirect to="/login" />
  }

   const user = data && data.user ? data.user: null
   const UserDashboardElement = user ? <UserDashboard  user={user} /> : null
  return (
    <>
      {UserDashboardElement}
    </>
  );
};
