import React from 'react';
import { RegisterForm } from './components/RegisterForm';
import { useMutation } from '@apollo/client';
import {
  Register as RegisterData,
  RegisterVariables,
} from '../../lib/graphql/mutations/Register/__generated__/Register';
import { REGISTER } from '../../lib/graphql';
import { RegisterInput } from '../../lib/graphql/globalTypes';
import { useForm } from '../../lib/hooks/useForm';
import { User } from '../../lib/types';
import { displaySccessNotification } from '../../lib/utils';
import { Redirect } from 'react-router-dom';
import { Spin, Layout } from 'antd';

interface Props {
  setUser: (user: User) => void;
  user: User;
}

const { Content } = Layout;

export const Register = ({ setUser, user }: Props) => {
  const [
    register,
    { data: registerData, loading: registerLoading, error: registerError },
  ] = useMutation<RegisterData, RegisterVariables>(REGISTER, {
    onCompleted: (data) => {
      if (data && data.register) {
        setUser(data.register);
        displaySccessNotification(
          'Registration Success',
          'You have successfully Registered'
        );
      }
    },
  });

  const { form, setValue: setForm } = useForm();

  const onRegister = (input: RegisterInput) => {
    register({
      variables: {
        input,
      },
    });
  };

  // show loader when registering user
  if (registerLoading) {
    return (
      <Content className="register-in-spin">
        <Spin size="large" tip="Creating your account" />
      </Content>
    );
  }

  // If user is logged in, Redirect
  if (user.id) {
    return <Redirect to="/" />;
  }

  if (registerData && registerData.register) {
    const { id: userId } = registerData.register;
    return <Redirect to={`user/${userId}`} />;
  }

  return (
    <div className="login_form">
      <h1 className="logo_name">CAR+</h1>
      <RegisterForm onRegister={onRegister} setForm={setForm} form={form} />
    </div>
  );
};
