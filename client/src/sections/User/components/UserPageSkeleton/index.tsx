import React from 'react';
import { User } from '../../../../lib/graphql/queries/User/__generated__/User';
import { UserDashboardSkeleton } from './UserDashboardSkeleton';


export const UserSkeleton = () => {
  const UserDashboardElement =  (
    <UserDashboardSkeleton />
) 
  return <>{UserDashboardElement}</>;
};
