import { notification } from 'antd';

export const displaySccessNotification = (message: string, description?: string) => {
  notification['success']({
    message,
    description
  })
}