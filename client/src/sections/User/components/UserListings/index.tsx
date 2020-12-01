import { List } from 'antd';
import React from 'react';
import { ListingCards } from '../../../../lib/components';
import { User_user_listings } from '../../../../lib/graphql/queries/User/__generated__/User';

interface Props {
  listings: User_user_listings['result'];
  limit: number;
  listingPage: number;
  total: number;
  setListingPage: (page: number) => void;
}

export const UserListing = ({
  listings,
  limit,
  total,
  listingPage,
  setListingPage,
}: Props) => {
  const Listings = (
    <List
      grid={{
        gutter: 8,
        column: 4,
        xs: 1,
        sm: 2,
        lg: 4,
      }}
      dataSource={listings ? listings : undefined}
      locale={{ emptyText: "User doesn't have any listings yet!" }}
      pagination={{
        position: 'top',
        current: listingPage,
        total,
        defaultPageSize: limit,
        hideOnSinglePage: true,
        showLessItems: true,
        onChange: (page: number) => setListingPage(page),
      }}
      renderItem={(userListing) => (
        <List.Item>
          <ListingCards listing={userListing} />
        </List.Item>
      )}
    />
  );

  return <>{Listings}</>;
};
