import React from 'react';
import { Layout } from 'antd';
import {MenuItems} from './component/MenuItems'
import { User } from '../../lib/types';

const { Header } = Layout;

interface Props {
  user: User,
  setUser: (user: User) =>  void
}

export const AppHeader = ({ user, setUser }: Props) => {
  return (
      <Header className="app_header">
        <div className="app_logo_search">
          <h1 className="app_header_logo">CAR+</h1>
        </div>
        <div className="menu_items">
          <MenuItems user={user} setUser={setUser}/>
        </div>
      </Header>

  );
};
