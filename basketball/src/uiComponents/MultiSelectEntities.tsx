import React, { FC } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { theme } from '../themes/theme';
import { TextSmall, TextExtraSmall } from './Typography';

const customStyles = {
  clearIndicator: (styles: any) => ({
    ...styles,
    color: theme.colors.lightGrey,
    '@media(max-width: 800px)': {
      padding: '5px',
    },
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: theme.colors.lightGrey,
    '@media(max-width: 800px)': {
      padding: '5px',
    },
  }),
  control: (styles: any, state: any) => ({
    ...styles,
    backgroundColor: theme.colors.lightestGrey,
    borderColor: state.selectProps.isError ? theme.colors.lightestRed : 'transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    ':hover': {
      borderColor: theme.colors.lightGrey,
      backgroundColor: theme.colors.lightestGrey,
    },
    '@media(max-width: 1000px)': {
      minHeight: '20px',
    },
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
    backgroundPosition: 'right 35px center',
    backgroundSize: '22px 22px',
    backgroundColor: (state.isFocused && theme.colors.lightestRed),
    cursor: 'pointer',

    ':active': {
      backgroundColor: theme.colors.darkRed,
      color: theme.colors.white,
    },
  }),
  multiValue: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '19px',
    padding: '3px 4px',
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
    padding: '3px 4px',
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
    '@media(max-width: 1000px)': {
      height: '20px',
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
  isPlaceholder: boolean,
  onChange: (value: any) => void;
  defaultValue?: IOptions;
  isError?: boolean,
  text?: string;
}
export const MultiSelectEntities: FC<IProps> = ({
  options,
  isMulti,
  isPlaceholder,
  text,
  defaultValue,
  isError,
  onChange,
}) => (
  <label>
    {text && <TextLabel>{text}</TextLabel>}
    <Select
      onChange={onChange}
      placeholder={isPlaceholder}
      isMulti={isMulti}
      isClearable
      isError={isError}
      styles={customStyles}
      options={options}
      defaultValue={defaultValue}
    />
    {isError && <TextError>Required</TextError>}
  </label>
);

const TextLabel = styled(TextSmall)`
  color: ${(props) => props.theme.colors.middleGrey};
`;

const TextError = styled(TextExtraSmall)`
  color: ${(props) => props.theme.colors.lightestRed};
  
`;
