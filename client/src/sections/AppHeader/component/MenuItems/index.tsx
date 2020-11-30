import React from 'react';
import { Button, Menu } from 'antd';
import { useMutation } from '@apollo/client';
import { User } from '../../../../lib/types';
import { UserOutlined, LogoutOutlined, CarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { UserAvatar } from '../../../../lib/components';
import { LOG_OUT } from '../../../../lib/graphql';
import { Logout as LogoutData } from '../../../../lib/graphql/mutations/Logout/__generated__/Logout';
import { displaySccessNotification, displayErrorMessage } from '../../../../lib/utils';

interface Props {
  user: User;
  setUser: (user: User) => void;
}

const { SubMenu } = Menu;

// TODO: some box shadows to the happ header

export const MenuItems = ({ user, setUser }: Props) => {
  const [logout] = useMutation<LogoutData>(LOG_OUT, {
    onCompleted: data => {
      if(data && data.logout) {
        setUser(data.logout)
        displaySccessNotification('You have successfully logout')
      }
    },
    onError: () => {
      displayErrorMessage(
        "Sorry! We weren't able to log you out. Please try again later!"
      );
    }
  })

  const handleLogout = () => {
    logout()
  }

  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      className="app_header_menu"
    >
       <Menu.Item key="6">
            <Link to="/host"><CarOutlined />Be a Host</Link>
          </Menu.Item>
      {!user.id ? (
        <>
          <Menu.Item key="1">
            <Link to="/login"><Button type="primary">Sign In</Button></Link>
          </Menu.Item>

        </>
      ) : null}

      {user.id ? (
        <SubMenu
          key="sub1"
          title={
            <UserAvatar
              src={user.avatar}
              name={user.name ? user.name : ''}
              size="small"
            />
          }
        >
          <Menu.Item key="3">
            <Link to={`/user/${user.id}`}>
              <UserOutlined />
              Profile
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <div onClick={handleLogout}>
              <LogoutOutlined />
              Logout
            </div>
          </Menu.Item>
        </SubMenu>
      ) : null}
    </Menu>
  );
};
