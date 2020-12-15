import React, { useState } from 'react';
import { Typography, Divider, DatePicker, Button } from 'antd';
import { Listing } from '../../../../lib/graphql/queries/Listing/__generated__/Listing';
import moment, { Moment } from 'moment';
import { displayErrorMessage } from '../../../../lib/utils';
import { WrappedListingBookingCreateModal as ListingCreateBookingModal } from '../';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [startDay, setStartDay] = useState<Moment | null>(null);
  const [endDay, setEndDay] = useState<Moment | null>(null);

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

  const disableendDay = !startDay;
  const disableButton =
    !startDay || !endDay || (endDay && endDay.isBefore(startDay));

  const verifyAndsetEndDayDate = (date: Moment | null) => {
    if (date && date.isBefore(startDay)) {
      displayErrorMessage('endDay date cannot be before startDay');
    }

    setEndDay(date);
  };

  const verifyAndSetStartDaydate = (date: Moment | null) => {
    setStartDay(date);

    if (date && date.isAfter(endDay)) {
      displayErrorMessage('endDay date cannot be before startDay');
    }
  };

  const BookingModal =  startDay && endDay ?(
    <ListingCreateBookingModal
      price={listing.price}
      startDay={startDay}
      endDay={endDay}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
    />
  ) : null;

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
          onChange={(date: Moment | null) => verifyAndSetStartDaydate(date)}
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
          onChange={(date: Moment | null) => verifyAndsetEndDayDate(date)}
          disabledDate={disabledDate}
          disabled={disableendDay}
          style={{ width: '100%' }}
        />
      </Paragraph>

      <Divider style={{ backgroundColor: '#e8e8e8' }} />
      <Paragraph style={{ width: '40%', margin: '20px auto 50px auto' }}>
        <Button
        size="large"
          disabled={disableButton}
          style={{ width: '90%',    backgroundColor: '#035d4d',
          color: '#fff', }}
          onClick={() => setModalOpen(!modalOpen)}
        >
          Request to book
        </Button>
        <Text mark strong>You wont be charge yet</Text>
      </Paragraph>
      {BookingModal}
    </Paragraph>
  );
};
