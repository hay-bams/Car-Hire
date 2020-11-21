import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="email"
        className="form-item-input"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        className="form-item"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
       <Form.Item>
       <Link className="login-form-forgot" to="/">
          Forgot password
        </Link>
        <span className="have-an-account">
          don't have an account ?
        </span>
       </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" className="create-account-button">
         Create an account
        </Button>
      </Form.Item>

    </Form>
  )
}