import React from 'react';
import { Layout } from 'antd';
import { MenuItems } from './component/MenuItems';
import { User } from '../../lib/types';
import { Link } from 'react-router-dom';

const { Header } = Layout;

interface Props {
  user: User;
  setUser: (user: User) => void;
}

export const AppHeader = ({ user, setUser }: Props) => {
  return (
    <Header className="app_header">
      <Link to="/">
        <div className="app_logo_search">
          <div className="app_header_logo">
            <h1 className="app_header_logo">CAR+</h1>
          </div>
        </div>
      </Link>
      <div className="menu_items">
        <MenuItems user={user} setUser={setUser} />
      </div>
    </Header>
  );
};
