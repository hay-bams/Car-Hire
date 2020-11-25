import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { RegisterInput } from '../../../../lib/graphql/globalTypes';

interface Props {
  onRegister: (input: RegisterInput ) => void;
  setForm: <TValue>(key: string, value: TValue) => void;
  form: RegisterInput;
}

export const RegisterForm = ({ onRegister, setForm, form }: Props) => {
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
          onChange={(e) => setForm<string>('email', e.target.value)}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item
        name="password"
        className="form-item-input"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
      >
        <Input
          onChange={(e) => setForm<string>('firstName', e.target.value)}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="First Name"
        />
      </Form.Item>

      <Form.Item
        name="lastName"
        className="form-item-input"
        rules={[{ required: true, message: 'Please input your Last NAme!' }]}
      >
        <Input
          onChange={(e) => setForm<string>('lastName', e.target.value)}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Last Name"
        />
      </Form.Item>

      <Form.Item
        name="firstName"
        className="form-item"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          onChange={(e) => setForm<string>('password', e.target.value)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={() => onRegister(form)}
        >
          Register
        </Button>
      </Form.Item>
      <Form.Item>
        <span className="have-an-account">Have an account ?</span>
      </Form.Item>
      <Form.Item>
        <Link to="/login">
          <Button
            type="primary"
            htmlType="submit"
            className="create-account-button"
          >
            Sign in
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};
