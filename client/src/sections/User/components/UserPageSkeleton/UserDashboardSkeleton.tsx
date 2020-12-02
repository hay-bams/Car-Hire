import React from 'react';
import { Layout } from 'antd';
import { Sidebar } from '../Sidebar';
import { UserListingSkeleton } from './UserListingSkeleton';
import { User } from '../../../../lib/graphql/queries/User/__generated__/User';
import { ProfileSectionSkeleton } from './ProfileSectionSkeleton';

export const UserDashboardSkeleton = () => {

  return (
    <Layout>
      <Sidebar />
      <Layout className="dashboard_layout" style={{ padding: '0 20px 24px' }}>
        {/** TODO: Use Url parameters to determine which dashboard content to show **/}
        <ProfileSectionSkeleton />
        <div className="user_listing">
          <UserListingSkeleton />
          <UserListingSkeleton />
        </div>
      </Layout>
    </Layout>
  );
};
