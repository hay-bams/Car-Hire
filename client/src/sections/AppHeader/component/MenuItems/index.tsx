import React from 'react';
import { Menu } from 'antd';
import { User } from '../../../../lib/types';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { Link } from 'react-router-dom';

interface Props {
  user: User;
  setUser: (user: User) => void;
}

const { SubMenu } = Menu;

export const MenuItems = ({ user, setUser }: Props) => {
  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
      {!user.id ? (
        <Menu.Item key="1" className="app_header_signin">
          Sigin
        </Menu.Item>
      ) : null}
      {user.id ? (
        <SubMenu
          key="sub1"
          title={<Avatar src={user.avatar} icon={<UserOutlined />} />}
        >
          <Link to={`/user/${user.id}`}>
            <Menu.Item key="3">
              <UserOutlined />
              Profile
            </Menu.Item>
          </Link>
          <Link to="/logout">
            <Menu.Item key="2">
              <LogoutOutlined />
              Logout
            </Menu.Item>
          </Link>
        </SubMenu>
      ) : null}
    </Menu>
  );
};
