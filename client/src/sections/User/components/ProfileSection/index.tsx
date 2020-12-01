import React from 'react';
import { Layout } from 'antd';
import { UserBreadcrumb } from '../UserBreadcrumb';
import { User } from '../../../../lib/graphql/queries/User/__generated__/User';
import { UserDetails } from './components/UserDetails';

interface Props {
  user: User['user'];
}

const { Content } = Layout;

export const ProfileSection = ({ user }: Props) => {
  return (
    <div>
      <UserBreadcrumb />
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0
        }}
      >
        <UserDetails user={user} />
      </Content>
    </div>
  );
};
