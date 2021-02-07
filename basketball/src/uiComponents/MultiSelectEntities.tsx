import React, { FC } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { theme } from '../themes/theme';
import { TextSmall, TextExtraSmall } from './Typography';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';

const customStyles = {
  clearIndicator: (styles: any) => ({
    ...styles,
    color: theme.colors.lightGrey,
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: theme.colors.lightGrey,
  }),
  control: (styles: any, { selectProps }: any) => ({
    ...styles,
    backgroundColor: selectProps.isForm ? theme.colors.lightestGrey : theme.colors.white,
    borderColor: selectProps.isError ? theme.colors.lightestRed : selectProps.isForm ? 'transparent' : theme.colors.lightGrey,
    boxShadow: 'none',
    cursor: 'pointer',
    height: '40px',
    ':hover': {
      borderColor: theme.colors.lightGrey,
      backgroundColor: selectProps.isForm ? theme.colors.lightestGrey : theme.colors.white,
    },
    maxHeight: '40px',
  }),
  option: (styles: any, state: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '25px',
    color: state.isFocused ? theme.colors.white : theme.colors.grey,
    backgroundImage: (state.data.imageSrc && `url(${state.data.imageSrc})`),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 15px center',
    backgroundSize: '22px 22px',
    backgroundColor: (state.isFocused && theme.colors.lightestRed),
    cursor: 'pointer',
    wordBreak: 'break-word',
    borderBottom: !state.data.isLast && `1px solid ${theme.colors.lightGrey}`,
    ':active': {
      backgroundColor: theme.colors.darkRed,
      color: theme.colors.white,
    },
    '@media(max-width: 475px)': {
      fontSize: '14px',
    },
  }),
  multiValue: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '19px',
    padding: '1px 4px',
    borderRadius: '4px',
    color: theme.colors.white,
    backgroundColor: theme.colors.red,

  }),
  singleValue: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '19px',
    padding: '1px 4px',
    borderRadius: '4px',
    color: theme.colors.white,
    backgroundColor: theme.colors.red,
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: theme.colors.white,
  }),
  placeholder: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '24px',
    color: theme.colors.middleGrey,
  }),
  input: (styles: any) => ({
    ...styles,
    padding: '4px 8px',
  }),
  menuList: (styles: any) => ({
    ...styles,
    scrollbarColor: `${theme.colors.grey} ${theme.colors.lightestGrey}`,
    scrollbarWidth: 'thin',

    '::-webkit-scrollbar-track': {
      backgroundColor: theme.colors.lightestGrey,
    },

    '::-webkit-scrollbar-thumb': {
      '-webkit-border-radius': '0px',
      borderRadius: '0px',
      backgroundColor: theme.colors.grey,
    },

    '::-webkit-scrollbar': {
      width: '5px',
    },
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    maxWidth: '300px',
    overflow: 'auto',
    maxHeight: '40px',
    scrollbarColor: `${theme.colors.grey} ${theme.colors.lightestGrey}`,
    scrollbarWidth: 'thin',

    '::-webkit-scrollbar-track': {
      backgroundColor: theme.colors.lightestGrey,
    },

    '::-webkit-scrollbar-thumb': {
      '-webkit-border-radius': '0px',
      borderRadius: '0px',
      backgroundColor: theme.colors.grey,
    },

    '::-webkit-scrollbar': {
      width: '1px',
    },
  }),
};

interface IOptions {
  value: string | number;
  label: string;
}

interface IProps {
  options: IOptions[],
  isMulti: boolean,
  isPlaceholder: string,
  onChange: (value: any) => void;
  isForm?: boolean;
  defaultValue?: IOptions;
  isError?: boolean,
  text?: string;
}

export const MultiSelectEntities: FC<IProps> = React.memo(({
  options,
  isMulti,
  isPlaceholder,
  text,
  isForm,
  defaultValue,
  isError,
  onChange,
}) => (
  <SelectLabel>
    {text && <TextLabel>{text}</TextLabel>}
    <Select
      onChange={onChange}
      placeholder={isPlaceholder}
      isMulti={isMulti}
      isClearable
      isError={isError}
      isForm={isForm}
      styles={customStyles}
      options={options}
      defaultValue={defaultValue}
    />
    {isError && <TextError>Required</TextError>}
  </SelectLabel>
));

const SelectLabel = styled.label`
  position: relative;
`;

const TextLabel = styled(TextSmall)`
  color: ${(props) => props.theme.colors.middleGrey};
  @media(max-width: ${mobileVersionLayout}) {
    font-size: 17px;
    line-height: 25px;
  }
`;

const TextError = styled(TextExtraSmall)`
  color: ${(props) => props.theme.colors.lightestRed};
  position: absolute;
  bottom: -23px;
`;
