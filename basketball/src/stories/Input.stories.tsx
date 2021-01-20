import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Input } from "../uiComponents/Input";
import styled from "styled-components";

export default {
    title: 'Inputs/Inputs',
    component: Input,
} as Meta;

interface IProps {
  text: string;
  disabled: boolean;
  type: "text" | "password";
  isError: boolean;
  errorMessage: string;
};

export const Inputs = ({ text = 'Login', disabled = false, type = 'text', isError, errorMessage = 'Required' } : IProps) => (
    <MockContainer>
        <Input
          text={text}
          type={type}
          disabled={disabled}
          isError={isError}
          errorMessage={errorMessage}
        />
    </MockContainer>
);

Inputs.argTypes = {
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