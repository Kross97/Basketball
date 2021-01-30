import React, { FC } from 'react';
import Select from 'react-select';
import { theme } from '../themes/theme';

const counts = [
  { value: '6', label: '6' },
  { value: '12', label: '12' },
  { value: '24', label: '24' },
];

const customStyles = {
  option: (styles: any, state: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '25px',
    color: state.isFocused ? theme.colors.white : theme.colors.grey,
    backgroundColor: (state.isFocused && theme.colors.lightestRed),
    ':active': {
      backgroundColor: theme.colors.darkRed,
    },
  }),
  singleValue: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '25px',
    color: theme.colors.grey,
  }),
  control: (styles: any) => ({
    ...styles,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.lightGrey,
    boxShadow: 'none',
    width: '90px',
    height: '40px',
    '@media(max-width: 800px)': {
      width: '80px',
      height: '28px',
    },
    ':hover': {
      borderColor: theme.colors.lightGrey,
    },
  }),
  menu: (styles: any) => ({
    ...styles,
    position: 'absolute',
    top: '-150px',
  }),
};

interface IProps {
  onChange: (e: any) => void;
}

export const SelectCounts: FC<IProps> = ({
  onChange,
}) => (
  <Select
    isMulti={false}
    isClearable={false}
    styles={customStyles}
    defaultValue={counts[0]}
    options={counts}
    placeholder={false}
    onChange={onChange}
  />
);
