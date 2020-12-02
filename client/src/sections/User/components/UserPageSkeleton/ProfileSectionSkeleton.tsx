import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import { UserBreadcrumb } from '../UserBreadcrumb';
import { UserDetailsSkeleton } from './UserDetailsSkeleton';

export const ProfileSectionSkeleton = () => {
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
        <UserDetailsSkeleton />
      </Content>
    </div>
  );
};
