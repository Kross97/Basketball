import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { TextSmall } from './Typography';
import calendarIcon from '../static/icons/calendar.svg';

interface IProps {
  defaultValue?: string;
  isError?: boolean;
  errorMessage?: string;
  register?: (field: any) => void;
  onChange?: () => void;
  onBlur?: () => void;
}

export const CalendarField: FC<IProps> = ({
  defaultValue,
  isError = false,
  errorMessage = '',
  register,
  onBlur,
  onChange,
}) => {
  const [showDateMenu, setShowmenu] = useState<boolean>(false);
  const [dateBirthDay, setBirthDay] = useState<string>('');

  const { t } = useTranslation();

  const toggleStateMenu = () => {
    setShowmenu(!showDateMenu);
  };

  return (
    <InputContainer htmlFor="birthday" onClick={toggleStateMenu}>
      {showDateMenu && (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      ) }
      <TextInput>{t('player:birthday')}</TextInput>
      <CustomInput
        onChange={onChange}
        onBlur={onBlur}
        name="birthday"
        type="text"
        isError={isError}
        defaultValue={defaultValue}
        disabled
        ref={register}
        value={}
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
  
  @media(max-width: ${mobileVersionLayout}) {
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
