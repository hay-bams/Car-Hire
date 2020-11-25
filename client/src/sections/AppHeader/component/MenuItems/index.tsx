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

// TODO: some box shadows to the happ header
 

export const MenuItems = ({ user, setUser }: Props) => {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      className="app_header_menu"
    >
      {!user.id ? (
        <>
          <Menu.Item key="1">
            <Link to="/login">Signin</Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/register">Register</Link>
          </Menu.Item>
        </>
      ) : null}

      {user.id ? (
        <SubMenu
          key="sub1"
          title={<Avatar src={user.avatar} icon={<UserOutlined />} />}
        >
          <Menu.Item key="3">
            <Link to={`/user/${user.id}`}>
              <UserOutlined />
              Profile
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/logout">
              <LogoutOutlined />
              Logout
            </Link>
          </Menu.Item>
        </SubMenu>
      ) : null}
    </Menu>
  );
};
