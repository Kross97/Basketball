import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { NotificationMessage } from '../uiComponents/NotificationMessage';

export default {
  title: 'UI/Notification',
  component: NotificationMessage,
} as Meta;

interface IProps {
  text: string;
}

export const ErrorNotification = ({
  text = 'User with the specified username / password was not found.',
}: IProps) => (
  <MockContainer>
    <NotificationMessage
      isError
      text={text}
    />
  </MockContainer>
);

export const SuccessNotification = ({
  text = 'User with the specified username / password was not found.',
}: IProps) => (
  <MockContainer>
    <NotificationMessage
      isError={false}
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

SuccessNotification.argTypes = {
  text: {
    control: {
      type: 'text',
    },
  },
};

const MockContainer = styled.div`
  width: 500px;
`;
