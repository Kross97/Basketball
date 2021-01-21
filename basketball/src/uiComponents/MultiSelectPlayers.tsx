import React from 'react';
import Select, {} from 'react-select';
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
    ':hover': {
      borderColor: theme.colors.lightGrey,
    },
  }),
  option: (styles: any) => ({
    ...styles,
    color: theme.colors.grey,
    ':hover': {
      backgroundColor: theme.colors.lightestRed,
      color: theme.colors.white,
    },
  }),
  multiValue: (styles: any) => ({
    ...styles,
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

export const MultiSelectPlayers = () => (
  <Select
    isMulti
    isClearable
    styles={customStyles}
    options={options}
  />
);
