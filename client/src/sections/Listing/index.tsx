import React from 'react';
import { Row, Col, Typography, Divider, DatePicker, Space, Button } from 'antd';
import { Layout } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LISTING } from '../../lib/graphql/queries/Listing';
import {
  ListingVariables,
  Listing as ListingData,
} from '../../lib/graphql/queries/Listing/__generated__/Listing';
import { ListingDetails } from './components';

interface MatchParams {
  id: string;
}

const { Content } = Layout;
const { Paragraph, Title, Text } = Typography;

const bookingFieldTitle = {
  color: '#477b71',
  margin: '20px auto 0 auto',
  width: '40%',
};

export const Listing = ({ match }: RouteComponentProps<MatchParams>) => {
  const { data, loading, error } = useQuery<ListingData, ListingVariables>(
    LISTING,
    {
      variables: {
        id: match.params.id,
      },
    }
  );

  if (loading) {
  }

  if (error) {
  }

  const ListingDetail =
    data && data.listing ? <ListingDetails listing={data.listing} /> : null;

  const BookingField = (
    <Paragraph className="booking_column" style={{ width: '90%', margin: '0 auto' }}>
      <Title level={2} style={bookingFieldTitle}>
        ${data?.listing.price}
        <Text style={{ color: '#676a6c' }}>/day</Text>
      </Title>
      <Divider style={{ backgroundColor: '#e8e8e8' }} />
      <Title
        level={5}
        style={{ margin: '0 auto', width: '20%', color: '#676a6c' }}
      >
        Check in
      </Title>
      <Paragraph style={{ width: '50%', margin: '20px auto' }}>
        <DatePicker style={{ width: '100%' }} />
      </Paragraph>

      <Title
        level={5}
        style={{ margin: '0  auto', width: '20%', color: '#676a6c' }}
      >
        Check out
      </Title>
      <Paragraph style={{ width: '50%', margin: '20px auto 50px auto' }}>
        <DatePicker style={{ width: '100%' }} />
      </Paragraph>

      <Divider style={{ backgroundColor: '#e8e8e8' }} />
      <Paragraph style={{ width: '40%', margin: '20px auto 50px auto' }}>
        <Button style={{ width: '100%' }}>Request to book</Button>
      </Paragraph>
    </Paragraph>
  );

  return (
    <Content className="listing-details-content-area">
      <Row gutter={16} justify="space-between">
        <Col className="gutter-row" lg={14}>
          {ListingDetail}
        </Col>
        <Col className="gutter-row" lg={8} style={{ border: '2px solid #e8e8e8', height: '500px' }}>
          {BookingField}
        </Col>
      </Row>
    </Content>
  );
};

// #676a6c
