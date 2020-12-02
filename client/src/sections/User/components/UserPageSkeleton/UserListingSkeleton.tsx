import React from 'react';
import { Card, List, Skeleton } from 'antd';

interface Props {
  title?: boolean;
}

export const UserListingSkeleton = ({ title = true }: Props) => {
  const emptyData = [{}, {}, {}, {}];
  return (
    <>
      {title ? (
        <Skeleton paragraph={{ rows: 0 }} className="user_listing_skeleton" />
      ) : null}
      <List
        grid={{
          gutter: 8,
          column: 4,
          xs: 1,
          sm: 2,
          lg: 4,
        }}
        dataSource={emptyData}
        renderItem={() => (
          <List.Item>
            <Card
              cover={
                <img alt="listing" src="/images/blank_1.png" height={180} />
              }
              loading
            />
          </List.Item>
        )}
      />
    </>
  );
};
