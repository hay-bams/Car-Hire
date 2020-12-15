import React from 'react';
import { Button, Typography, Row, Col, Modal, Divider, Card } from 'antd';
import {
  CardElement,
  injectStripe,
  ReactStripeElements,
} from 'react-stripe-elements';
import moment, { Moment } from 'moment';
import { KeyOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const { Paragraph, Text, Title } = Typography;

interface Props {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  startDay: Moment;
  endDay: Moment;
  price: number;
}

export const ListingCreateBookingModal = ({
  modalOpen,
  setModalOpen,
  startDay,
  endDay,
  price,
}: Props & ReactStripeElements.InjectedStripeProps) => {
  const daysBooked = endDay.diff(startDay, 'days') + 1;
  const rentalCost = price * daysBooked;
  const fee = rentalCost * 0.05;
  const total = rentalCost + fee;
  return (
    <>
      <Modal
        closable={false}
        centered
        footer={null}
        onCancel={() => setModalOpen(false)}
        visible={modalOpen}
      >
        <Row justify="center">
          <Col>
            <Paragraph style={{ textAlign: 'center' }}>
              <Text>
                <KeyOutlined style={{ fontSize: 40 }} />
              </Text>
              <Title level={3}>Book Your Car</Title>
              <Paragraph>
                Enter your payment information to book this Vehicle from the
                dates between{' '}
                <Text mark strong>
                  {moment(startDay).format('MMMM Do YYYY')}
                </Text>{' '}
                to{' '}
                <Text mark strong>
                  {moment(endDay).format('MMMM Do YYYY')}
                </Text>{' '}
                , inclusive.
              </Paragraph>
              <Divider />
              <Paragraph>
                {' '}
                <Text>
                  ${price} x {daysBooked} days = ${rentalCost}
                </Text>
              </Paragraph>
              <Paragraph>
                {' '}
                <Text>
                  {' '}
                  Platform Fee <QuestionCircleOutlined /> = ${fee}
                </Text>
              </Paragraph>
              <Paragraph>
                {' '}
                <Text strong> Total = = ${total}</Text>
              </Paragraph>
              <div>
                <Divider />
                <CardElement hidePostalCode className="stripe_card_element" />
                <Button
                  style={{
                    width: '30%',
                    backgroundColor: '#035d4d',
                    color: '#fff',
                  }}
                  size="large"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  Book
                </Button>
              </div>
            </Paragraph>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export const WrappedListingBookingCreateModal = injectStripe(
  ListingCreateBookingModal
);
