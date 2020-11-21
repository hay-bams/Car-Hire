import React from 'react';
import { Layout } from 'antd';
import {MenuItems} from './component/MenuItems'

const { Header } = Layout;

export const AppHeader = () => {
  return (
      <Header className="app_header">
        <div className="app_logo_search">
          <h1 className="app_header_logo">CAR+</h1>
        </div>
        <div className="menu_items">
          <MenuItems />
        </div>
      </Header>

  );
};
