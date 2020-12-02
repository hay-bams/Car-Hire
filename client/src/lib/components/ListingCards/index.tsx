import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { CarOutlined, UserOutlined } from '@ant-design/icons';
import { User_user_listings_result as ListingResultType } from '../../graphql/queries/User/__generated__/User';

const { Title, Text } = Typography;

interface Props {
  style?: {
    [key: string]: string | number;
  };
  listing: ListingResultType | null;
  className?: string
}

export const ListingCards = ({ style, listing, className }: Props) => {
  const listingImage = `/images/${listing?.image}`;
  return (
    <Card
      hoverable
      className={className}
      style={style ? style : {}}
      cover={<img alt="listing" src={listingImage} height={180} />}
    >
      <div>
        <Title level={5} style={{ color: '#035d4d' }}>
          ${listing && listing.price}
          <span style={{ color: 'gray' }}>/day</span>
        </Title>
        <Text ellipsis style={{ width: '100%', color: '#676a6c' }}>
          {listing && listing.description}
        </Text>
        <Row justify="space-between">
          <Col style={{ marginTop: 5, color: '#035d4d' }}>
            <CarOutlined />
          </Col>
          <Col style={{ marginTop: 5, color: '#035d4d' }}>
            <UserOutlined /> {listing && listing.seats} seats
          </Col>
        </Row>
      </div>
    </Card>
  );
};
