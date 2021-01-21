import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { FieldInputData } from '../uiComponents/FieldInputData';

export default {
  title: 'UI/Inputs',
  component: FieldInputData,
} as Meta;

interface IProps {
  text: string;
  disabled: boolean;
  type: 'text' | 'password';
  isError: boolean;
  errorMessage: string;
}

export const AllInputs = ({
  text = 'Login',
  disabled = false,
  type = 'text',
  isError,
  errorMessage = 'Required',
}: IProps) => (
  <MockContainer>
    <FieldInputData
      text={text}
      type={type}
      disabled={disabled}
      isError={isError}
      errorMessage={errorMessage}
    />
  </MockContainer>
);

AllInputs.argTypes = {
  text: {
    control: {
      type: 'select',
      options: ['Login', 'Password'],
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  type: {
    control: {
      type: 'select',
      options: ['text', 'password'],
    },
  },
  isError: {
    control: 'boolean',
  },
  errorMessage: {
    control: 'text',
  },
};

const MockContainer = styled.div`
  width: 366px;
`;
