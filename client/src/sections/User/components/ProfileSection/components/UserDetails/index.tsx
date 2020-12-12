import React, { useState } from 'react';
import { Button, Card, Col, Rate, Row } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { UserAvatar } from '../../../../../../lib/components';
import { Typography } from 'antd';
import { User } from '../../../../../../lib/graphql/queries/User/__generated__/User';

const { Text } = Typography;

interface Props {
  user: User['user'];
}

const stripeAuthUrl = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_S_CLIENT_ID}&scope=read_write`;
export const UserDetails = ({ user }: Props) => {
  const [ratings, setRatings] = useState(3);
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  const redirectToStripe = () => {
    window.location.href = stripeAuthUrl;
  };

  const StripeButton =   <Button
  style={{
    marginTop: 10,
    backgroundColor: '#035d4d',
    color: '#fff',
  }}
  onClick={!user.hasWallet ? redirectToStripe : () => {}}
>
  {!user.hasWallet ? 'Connect with stripe': 'Disconnect stripe'}
</Button>

  return (
    <>
      <Card>
        <Row gutter={16}>
          <Col xs={24} lg={3}>
            <UserAvatar
              className="small-avatar"
              src={user.avatar}
              name={user.name}
              size={{ xs: 100, sm: 32, md: 100, lg: 64, xl: 80, xxl: 100 }}
            />
          </Col>
          <Col className="user_column-2">
            <span className="user_name">{user.name}</span>
            <Rate
              className="rating-column"
              tooltips={desc}
              onChange={setRatings}
              value={ratings}
            />
            <Row gutter={16}>
              <Col className="profile_details_2">
                <Text className="location_based">
                  {' '}
                  <EnvironmentOutlined style={{ color: '#1890ff' }} /> Lagos,
                  Nigeria
                </Text>
              </Col>
              <Col>
                {' '}
                <Text className="date_joined">
                  {' '}
                  Joined date: 23rd june, 2018
                </Text>
              </Col>
              <Col>
                {' '}
                <Text className="sex_profile"> Male</Text>
              </Col>
              <Col>
                {' '}
                <Text className="age_profile"> 29 years old</Text>
              </Col>
            </Row>
            {StripeButton}
          </Col>
        </Row>
      </Card>
    </>
  );
};
