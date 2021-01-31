import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { NotificationError } from '../uiComponents/NotificationError';

export default {
  title: 'UI/Notification',
  component: NotificationError,
} as Meta;

interface IProps {
  text: string;
}

export const ErrorNotification = ({
  text = 'User with the specified username / password was not found.',
}: IProps) => (
  <MockContainer>
    <NotificationError
      text={text}
    />
  </MockContainer>
);

ErrorNotification.argTypes = {
  text: {
    control: {
      type: 'text',
    },
  },
};

const MockContainer = styled.div`
  width: 500px;
`;
