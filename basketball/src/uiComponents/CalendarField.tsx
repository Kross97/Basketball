import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { TextSmall } from './Typography';
import calendarIcon from '../static/icons/calendar.svg';

interface IProps {
  register: (field: any) => void;
  trigger: (key: string) => void;
  defaultValue?: string;
  isError?: boolean;
  errorMessage?: string;
}

export const CalendarField: FC<IProps> = ({
  defaultValue,
  isError = false,
  errorMessage = '',
  register,
  trigger,
}) => {
  const [dateBirthDay, setBirthDay] = useState<string>('');
  const { t } = useTranslation();

  const changeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (value.length === 2 || value.length === 5) {
      value += '.';
      setBirthDay(value);
    } else if (value.length !== 11) {
      setBirthDay(value);
    }
    trigger('birthday');
  };

  const resetHandler = ({ keyCode }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 8) {
      setBirthDay('');
    }
  };

  return (
    <InputContainer htmlFor="birthday">
      <TextInput>{t('player:birthday')}</TextInput>
      <CustomInput
        onChange={changeHandler}
        onKeyDown={resetHandler}
        onFocus={() => trigger('birthday')}
        name="birthday"
        type="text"
        isError={isError}
        defaultValue={defaultValue}
        ref={register}
        value={dateBirthDay}
        placeholder="dd.mm.yyyy"
      />
      {isError && <TextInputError>{errorMessage}</TextInputError>}
    </InputContainer>
  );
};

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  outline: none;
`;

const CustomInput = styled.input<{ type: string, isError: boolean }>`
  outline: none;
  box-sizing: border-box;
  border: ${({ isError, theme }) => (isError ? `1px solid ${theme.colors.lightestRed}` : 'none')};
  border-radius: 4px;
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.colors.lightestGrey};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkGrey};
  background: ${({ theme }) => `${theme.colors.lightestGrey} url(${calendarIcon}) no-repeat right 14px center`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:focus {
    box-shadow: 0 0 5px #D9D9D9;
    background-color: ${({ theme }) => theme.colors.lightestGrey};
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.colors.lightestGrey};
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media (max-width: ${mobileVersionLayout}) {
    padding: 4px 12px;
  }

`;

const TextInput = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.middleGrey};
`;

const TextInputError = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.lightestRed};
  font-size: 12px;
  position: absolute;
  bottom: -23px;
`;
