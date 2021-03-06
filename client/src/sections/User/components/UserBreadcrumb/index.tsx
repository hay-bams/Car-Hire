import React from 'react';
import { Breadcrumb } from 'antd';

export const UserBreadcrumb = () => {
  return (
    <>
      <Breadcrumb style={{ margin: '16px 26px' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};
