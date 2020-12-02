import { List } from 'antd';
import React, { useState } from 'react';
import { client } from '../../../..';
import { ListingCards } from '../../../../lib/components';
import { User as UserData, User_user_bookings } from '../../../../lib/graphql/queries/User/__generated__/User';
import { USER_BOOKING } from '../../../../lib/graphql/queries/UserBookings';
import { UserBookingVariables } from '../../../../lib/graphql/queries/UserBookings/__generated__/UserBooking';
import { UserListingSkeleton } from '../UserPageSkeleton/UserListingSkeleton';

interface Props {
  bookings: User_user_bookings['result'] | null;
  limit: number;
  total: number;
  pageParams: string;
}

export const UserBookings = ({
  pageParams,
  bookings,
  limit,
  total,
}: Props) => {
  const [userBookings, setUserBookings] = useState(bookings);
  const [bookingPage, setbookingPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const onPageChange = async (page: number) => {
    setLoading(true);
    setbookingPage(page);
    const { data } = await client.query<UserData, UserBookingVariables>({
      query: USER_BOOKING,
      variables: {
        id: pageParams,
        bookingPage: page,
        limit,
      },
    });
    setUserBookings(data.user.bookings.result);
    setLoading(false);
  };

  if (loading) {
    return <UserListingSkeleton title={false} />;
  }


  const Bookings = (
    <List
      grid={{
        gutter: 8,
        column: 4,
        xs: 1,
        sm: 2,
        lg: 4,
      }}
      dataSource={userBookings ? userBookings : undefined}
      locale={{ emptyText: "User doesn't have any listings yet!" }}
      pagination={{
        position: 'top',
        current: bookingPage,
        total,
        defaultPageSize: limit,
        hideOnSinglePage: true,
        showLessItems: true,
        onChange: (page: number) => onPageChange(page),
      }}
      renderItem={(userBooking) => (
        <List.Item>
          <ListingCards listing={userBooking.listing} />
        </List.Item>
      )}
    />
  );

  return <>{Bookings}</>;
};
