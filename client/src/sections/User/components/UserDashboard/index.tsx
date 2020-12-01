import React from 'react';
import { Layout, Row, Typography, Pagination, Col } from 'antd';
import { ProfileSection } from '../ProfileSection';
import { Sidebar } from '../Sidebar';
import { User } from '../../../../lib/graphql/queries/User/__generated__/User';
import { UserListing } from '../UserListings';
interface Props {
  user: User['user'];
  limit: number;
  listingPage: number;
  setListingPage: (page: number) => void;
}

const { Title } = Typography;

export const UserDashboard = ({
  user,
  limit,
  listingPage,
  setListingPage,
}: Props) => {
  const listings = user.listings.result ? user.listings.result : null;

  return (
    <Layout>
      <Sidebar />
      <Layout className="dashboard_layout" style={{ padding: '0 20px 24px' }}>
        {/** TODO: Use Url parameters to determine which dashboard content to show **/}
        <ProfileSection user={user} />
        <div className="user_listing">
          <Title level={3} className="user_active_listing">
            Your Active Listings
          </Title>
          <UserListing
            listingPage={listingPage}
            setListingPage={setListingPage}
            limit={limit}
            listings={listings}
            total={user.listings.total}
          />
        </div>
      </Layout>
    </Layout>
  );
};
