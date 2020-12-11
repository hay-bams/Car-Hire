import React, { useState } from 'react';
import { List } from 'antd';
import { useApolloClient } from '@apollo/client';
import { ListingCards } from '../../../../lib/components';
import {
  User as UserData,
  User_user_listings,
} from '../../../../lib/graphql/queries/User/__generated__/User';
import { USER_LISTING } from '../../../../lib/graphql/queries/UserListing';
import { UserListingVariables } from '../../../../lib/graphql/queries/UserListing/__generated__/UserListing';
import { UserListingSkeleton } from '../UserPageSkeleton/UserListingSkeleton';
import { Link } from 'react-router-dom';

interface Props {
  listings: User_user_listings['result'];
  limit: number;
  total: number;
  pageParams: string;
}

export const UserListing = ({ pageParams, listings, limit, total }: Props) => {
  const client = useApolloClient();
  const [userListings, setListings] = useState(listings);
  const [listingPage, setListingPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const onPageChange = async (page: number) => {
    setLoading(true);
    setListingPage(page);
    const { data } = await client.query<UserData, UserListingVariables>({
      query: USER_LISTING,
      variables: {
        id: pageParams,
        listingPage: page,
        limit,
      },
    });
    setListings(data.user.listings.result);
    setLoading(false);
  };

  if (loading) {
    return <UserListingSkeleton title={false} />;
  }

  const Listings = (
    <List
      grid={{
        gutter: 8,
        column: 4,
        xs: 1,
        sm: 2,
        lg: 4,
      }}
      dataSource={userListings ? userListings : undefined}
      locale={{ emptyText: "User doesn't have any listings yet!" }}
      pagination={{
        position: 'top',
        current: listingPage,
        total,
        defaultPageSize: limit,
        hideOnSinglePage: true,
        showLessItems: true,
        onChange: (page: number) => onPageChange(page),
      }}
      renderItem={(userListing) => (
        <List.Item>
          <Link to={`/listing/${userListing ? userListing.id : ''}`}>
            <ListingCards listing={userListing} />
          </Link>
        </List.Item>
      )}
    />
  );

  return <>{Listings}</>;
};
