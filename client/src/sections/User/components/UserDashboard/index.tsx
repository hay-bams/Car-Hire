import React from 'react';
import { Layout, Typography, } from 'antd';
import { ProfileSection } from '../ProfileSection';
import { Sidebar } from '../Sidebar';
import { User as _User } from '../../../../lib/graphql/queries/User/__generated__/User';
import { User as UserType } from '../../../../lib/types';
import { UserListing } from '../UserListings';
import { UserBookings } from '../UserBookings';
interface Props {
  user: _User['user'];
  setUser: (user: _User['user']) => void
  limit: number;
  listingPage: number;
  bookingPage: number;
  setBookingPage: (page: number) => void;
  setListingPage: (page: number) => void;
  pageParams: string
}

const { Title } = Typography;

export const UserDashboard = ({
  user,
  setUser,
  limit,
  pageParams
}: Props) => {
  const listings = user.listings.result ? user.listings.result : null;
  const bookings = user.bookings.result ? user.bookings.result : null;

  return (
    <Layout>
      <Sidebar />
      <Layout className="dashboard_layout" style={{ padding: '0 20px 24px' }}>
        {/** TODO: Use Url parameters to determine which dashboard content to show **/}
        <ProfileSection user={user} setUser={setUser} />
        <div className="user_listing">
          <Title level={3} className="user_active_listing">
            Your Active Listings
          </Title>
       
          <UserListing
            limit={limit}
            listings={listings}
            total={user.listings.total}
            pageParams={pageParams}
          />

          <Title level={3} className="user_bookings">
            Your Bookings
          </Title>

          <UserBookings
            limit={limit}
            bookings={bookings}
            total={user.bookings.total}
            pageParams={pageParams}
          />
        </div>
      </Layout>
    </Layout>
  );
};
