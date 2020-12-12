import React, { useState } from 'react';
import { Typography, Divider, DatePicker, Button } from 'antd';
import { Listing } from '../../../../lib/graphql/queries/Listing/__generated__/Listing';
import moment, { Moment } from 'moment';
import { displayErrorMessage } from '../../../../lib/utils';

interface Props {
  listing: Listing['listing'];
}

const { Paragraph, Title, Text } = Typography;

const bookingFieldTitle = {
  color: '#477b71',
  margin: '20px auto 0 auto',
  width: '40%',
};

export const ListingCreateBooking = ({ listing }: Props) => {
  const [checkin, setCheckin] = useState<Moment | null>(null);
  const [checkout, setCheckout] = useState<Moment | null>(null);
  const bookingIndexJSON = JSON.parse(listing.bookingsIndex);

  const disabledDate = (currentDate: Moment) => {
    if (currentDate) {
      const year = moment(currentDate).year();
      const month = moment(currentDate).month();
      const day = moment(currentDate).date();

      if (
        bookingIndexJSON[year] &&
        bookingIndexJSON[year][month] &&
        bookingIndexJSON[year][month][day]
      ) {
        return true;
      }
      return currentDate.isBefore(moment().endOf('days'));
    } else {
      return false;
    }
  };

  console.log(checkout, checkin);

  const disableCheckout = !checkin;
  const disableButton =
    !checkin || !checkout || (checkout && checkout.isBefore(checkin));

  const verifyAndSetCheckoutDate = (date: Moment | null) => {
    if (date && date.isBefore(checkin)) {
      displayErrorMessage('Checkout date cannot be before checkin');
    }
    
    setCheckout(date);
  };

  const verifyAndSetCheckindate = (date: Moment | null) => {
    setCheckin(date);

    if (date && date.isAfter(checkout)) {
      displayErrorMessage('Checkout date cannot be before checkin');
    }
  };

  return (
    <Paragraph
      className="booking_column"
      style={{ width: '90%', margin: '0 auto' }}
    >
      <Title level={2} style={bookingFieldTitle}>
        ${listing.price}
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
        <DatePicker
          onChange={(date: Moment | null) => verifyAndSetCheckindate(date)}
          disabledDate={disabledDate}
          style={{ width: '100%' }}
        />
      </Paragraph>

      <Title
        level={5}
        style={{ margin: '0  auto', width: '20%', color: '#676a6c' }}
      >
        Check out
      </Title>
      <Paragraph style={{ width: '50%', margin: '20px auto 50px auto' }}>
        <DatePicker
          onChange={(date: Moment | null) => verifyAndSetCheckoutDate(date)}
          disabledDate={disabledDate}
          disabled={disableCheckout}
          style={{ width: '100%' }}
        />
      </Paragraph>

      <Divider style={{ backgroundColor: '#e8e8e8' }} />
      <Paragraph style={{ width: '40%', margin: '20px auto 50px auto' }}>
        <Button disabled={disableButton} style={{ width: '100%' }}>
          Request to book
        </Button>
      </Paragraph>
    </Paragraph>
  );
};
