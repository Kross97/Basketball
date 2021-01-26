import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { FieldInputData } from '../uiComponents/FieldInputData';
import { TypesInput } from '../helpers/types/types';

export default {
  title: 'UI/Inputs',
  component: FieldInputData,
} as Meta;

interface IProps {
  text: string;
  disabled: boolean;
  type: TypesInput;
  startType: TypesInput;
  isError: boolean;
  errorMessage: string;
}

export const AllInputs = ({
  text = 'Login',
  disabled = false,
  type = 'text',
  startType = 'text',
  isError,
  errorMessage = 'Required',
}: IProps) => {
  const [typeInput, setTypeInput] = useState<'text' | 'password'>(type);
  const changeTypeInput = () => {
    setTypeInput(typeInput === 'text' ? 'password' : 'text');
  };

  return (
    <MockContainer>
      <FieldInputData
        text={text}
        type={typeInput}
        startType={startType}
        name="name"
        changeTypeInput={changeTypeInput}
        disabled={disabled}
        isError={isError}
        errorMessage={errorMessage}
      />
    </MockContainer>
  );
};

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
  startType: {
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
