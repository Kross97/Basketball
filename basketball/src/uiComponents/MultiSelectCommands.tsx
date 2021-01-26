import React from 'react';
import Select from 'react-select';
import { theme } from '../themes/theme';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'red', label: 'Red' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }];

const customStyles = {
  clearIndicator: (styles: any) => ({
    ...styles,
    color: theme.colors.lightGrey,
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: theme.colors.lightGrey,
  }),
  control: (styles: any) => ({
    ...styles,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.lightGrey,
    boxShadow: 'none',
    cursor: 'pointer',
    ':hover': {
      borderColor: theme.colors.lightGrey,
    },
  }),
  option: (styles: any, state: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '25px',
    color: state.isFocused ? theme.colors.white : theme.colors.grey,
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
};

export const MultiSelectCommands = () => (
  <Select
    isMulti
    isClearable
    styles={customStyles}
    options={options}
  />
);
