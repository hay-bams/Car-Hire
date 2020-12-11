import { Typography, Divider, Tag } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import React from 'react';
import { Listing } from '../../../../lib/graphql/queries/Listing/__generated__/Listing';
import { Link } from 'react-router-dom';
import { UserAvatar } from '../../../../lib/components';

interface Props {
  listing: Listing['listing'];
}

const { Text, Paragraph, Title } = Typography;

export const ListingDetails = ({ listing }: Props) => {
  const {
    image,
    city,
    address,
    name,
    host,
    description,
    seats,
    type,
  } = listing;
  return (
    <>
      {/* <div style={{backgroundImage: `url(/images/${listing.image})`, height: 900 }}></div> */}
      <div style={{ height: 600 }}>
        <img
          src={`/images/${image}`}
          height="100%"
          width="100%"
          alt="listing_details"
        />
      </div>

      <Paragraph style={{ marginTop: 15 }}>
        <Link to={`/listings/:${city}`}>
          <EnvironmentOutlined style={{ color: '#477b71' }} />
          <Text style={{ color: '#477b71', marginLeft: 5 }}>
            {city} <Divider type="vertical" />
          </Text>
        </Link>
        <Text style={{ color: '#676a6c' }}>{address}</Text>
      </Paragraph>
      <Title style={{ marginTop: -10, color: '#676a6c' }} level={3}>
        {name}
      </Title>
      <Divider style={{ backgroundColor: '#e8e8e8' }} />
      <UserAvatar
        className="small-avatar"
        src={host.name}
        name={host.avatar}
        size={{ xs: 100, sm: 32, md: 100, lg: 44, xl: 80, xxl: 70 }}
      />
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontSize: 30,
          fontFamily: 'Sacramento,cursive',
        }}
      >
        {host.name}
      </Text>
      <Divider style={{ backgroundColor: '#e8e8e8' }} />
      <Title level={4} style={{ color: '#676a6c' }}>
        About this car
      </Title>
      <Tag color="green">{type}</Tag>
      <Tag color="green">{seats} Seats</Tag>
      <Paragraph style={{ marginTop: 20, color: '#676a6c' }}>
        {description}
      </Paragraph>
    </>
  );
};
