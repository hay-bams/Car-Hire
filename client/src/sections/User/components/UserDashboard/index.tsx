import React from 'react';
import { Layout } from 'antd';
import { ProfileSection } from '../ProfileSection';
import { Sidebar } from '../Sidebar';
import { User } from '../../../../lib/graphql/queries/User/__generated__/User';


interface Props {
  user: User['user']
}

export const UserDashboard = ({ user }: Props) => {

  return (
    <Layout>
      <Sidebar />
      <Layout style={{ padding: '0 20px 24px' }}>
        {/** TODO: Use Url parameters to determine which dashboard content to show **/}
        <ProfileSection user={user} />
      </Layout>
    </Layout>
  );
};
