import { message, notification } from 'antd';

export const displaySccessNotification = (message: string, description?: string) => {
  notification['success']({
    message,
    description
  })
}

export const displayErrorMessage = (error: string) => {
  return message.error(error);
};