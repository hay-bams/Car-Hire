import React, { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { User as UserType } from '../../lib/types';
import {
  ConnectStripe as ConnectStripeData,
  ConnectStripeVariables,
} from '../../lib/graphql/mutations/ConnectStripe/__generated__/ConnectStripe';
import { CONNECT_STRIPE } from '../../lib/graphql/mutations/ConnectStripe';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { displaySccessNotification } from '../../lib/utils';
import { Layout, Spin } from 'antd';

interface Props {
  user: UserType;
  setUser: (user: UserType) => void;
}

const { Content } = Layout;

export const Stripe = ({
  history,
  user,
  setUser,
}: Props & RouteComponentProps) => {
  const [connectStripe, { data, loading, error }] = useMutation<
    ConnectStripeData,
    ConnectStripeVariables
  >(CONNECT_STRIPE, {
    onCompleted: (data) => {
      setUser({ ...user, hasWallet: data.connectStripe.hasWallet });
      displaySccessNotification(
        "You've successfully connected your Stripe Account!",
        'You can now begin to create listings in the Host page.'
      );
    },
  });

  const connectStripeRef = useRef(connectStripe);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      connectStripeRef.current({
        variables: {
          input: { code },
        },
      });
    } else {
      history.replace('/login');
    }
  }, [history]);

  if (loading) {
    return (
      <Content className="stripe-in-spin">
        <Spin size="large" tip="Connecting your stripe account" />
      </Content>
    );
  }

  if (error) {
    <Redirect to={`/user/${user.id}?stripe_error=true`} />;
  }

  if (data && data.connectStripe) {
    return <Redirect to={`/user/${user.id}`} />;
  }

  return null;
};
