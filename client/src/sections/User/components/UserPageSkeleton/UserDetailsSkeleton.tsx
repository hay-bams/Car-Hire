import React from 'react';
import { Card, Col, Row, Skeleton } from 'antd'

export const UserDetailsSkeleton = () => {
  return (
    <>
      <Card>
        <Row gutter={16}>
          <Col xs={24} lg={3}>
            <Skeleton.Avatar size={100} shape="circle" />
          </Col>
          <Col lg={20}  style={{marginTop: 0, marginLeft: 20}}>
            <Skeleton paragraph={{ rows: 1 }} />
          </Col>
        </Row>
      </Card>
    </>
  );
};
