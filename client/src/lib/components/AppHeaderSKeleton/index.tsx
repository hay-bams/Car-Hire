import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

export const AppHeaderSkeleton = () => {
  return (
    <Header className="app_header">
      <div className="app_logo_search">
        <h1 className="app_header_logo">
          <h1 className="app_header_logo">CAR+</h1>
        </h1>
      </div>
    </Header>
  );
};
