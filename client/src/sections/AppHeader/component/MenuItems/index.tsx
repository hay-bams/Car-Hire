import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export const MenuItems = () => {
  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" className="app_header_signin">Sigin</Menu.Item>
      <SubMenu key="sub1" title="Avatar">
        <Menu.Item key="3">Profile</Menu.Item>
        <Menu.Item key="2">Logout</Menu.Item>
      </SubMenu>
    </Menu>
  );
};
