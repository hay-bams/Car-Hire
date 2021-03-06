import React from 'react';
import { LoginForm } from './components/LoginForm';
import {
  Login as LoginData,
  LoginVariables,
} from '../../lib/graphql/mutations/Login/__generated__/Login';
import { LOG_IN } from '../../lib/graphql';
import { LoginInput } from '../../lib/graphql/globalTypes';
import { useForm } from '../../lib/hooks/useForm';
import { useMutation } from '@apollo/client';
import { User } from '../../lib/types';
import { Redirect } from 'react-router-dom';
import { displaySccessNotification } from '../../lib/utils';
import { Spin, Layout } from 'antd';
import { ErrorBanner } from '../../lib/components';


interface Props {
  setUser: (user: User) => void;
  user: User;
}

const { Content } = Layout;

export const Login = ({ setUser, user }: Props) => {
  const [
    login,
    { data: loginData, loading: loginLoading, error: loginError },
  ] = useMutation<LoginData, LoginVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.login) {
        setUser(data.login);
        displaySccessNotification(
          'Login Success',
          'You are successfully Logged in'
        );
      }
    },
  });

  const { form, setValue: setForm } = useForm();

  const onLogin = (input: LoginInput) => {
    login({
      variables: {
        input: { ...input, withCookie: false },
      },
    });
  };

  if (loginLoading) {
    return (
      <Content className="register-in-spin">
        <Spin size="large" tip="Logging you in" />
      </Content>
    );
  }

  // If user is logged in, Redirect
  if (user.id) {
    return <Redirect to="/" />;
  }

  if (loginData && loginData.login.id) {
    const { id: userId } = loginData.login;
    return <Redirect to={`user/${userId}`} />;
  }

  const Error = loginError ? (
    <ErrorBanner
      message="Uh oh! Something went wrong :("
      description={loginError?.message}
    />
  ) : null;

  return (
    <Content>
      {Error}
      <div className="login_form">
        <h1 className="signin-title">Sign in</h1>
        <LoginForm onLogin={onLogin} setForm={setForm} form={form} />
      </div>
    </Content>
  );
};
