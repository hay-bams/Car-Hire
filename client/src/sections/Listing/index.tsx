import React from 'react';
import { Row, Col, Layout } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LISTING } from '../../lib/graphql/queries/Listing';
import {
  ListingVariables,
  Listing as ListingData,
} from '../../lib/graphql/queries/Listing/__generated__/Listing';
import { ListingCreateBooking, ListingDetails } from './components';

interface MatchParams {
  id: string;
}

const { Content } = Layout;

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

  const BookingField =
    data && data.listing ? (
      <ListingCreateBooking listing={data.listing} />
    ) : null;

  return (
    <Content className="listing-details-content-area">
      <Row gutter={16} justify="space-between">
        <Col className="gutter-row" lg={14}>
          {ListingDetail}
        </Col>
        <Col
          className="gutter-row"
          lg={8}
          style={{ border: '2px solid #e8e8e8', height: '500px' }}
        >
          {BookingField}
        </Col>
      </Row>
    </Content>
  );
};

// #676a6c
