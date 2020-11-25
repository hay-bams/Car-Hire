import React from 'react';
import { Alert } from 'antd';

// const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//   console.log(e, 'I was closed.');
// };

interface Props {
  message: string;
  description: string
}

export const ErrorBanner = ({ message, description }: Props) => {
  return (
   <Alert
    message={message}
    description={description}
    type="error"
    closable
    showIcon
  />
  )
}