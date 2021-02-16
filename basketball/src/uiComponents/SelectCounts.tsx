import React, { FC } from 'react';
import Select from 'react-select';
import { theme } from '../themes/theme';

const counts = [
  { value: '6', label: '6' },
  { value: '12', label: '12' },
  { value: '24', label: '24' },
];

const customStyles = {
  dropdownIndicator: (styles: any, { isFocused }: any) => ({
    ...styles,
    transition: '0.5s ease',
    transform: isFocused && 'rotate(180deg)',
    '@media(max-width: 615px)': {
      padding: '2px',
    },
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    alignItems: 'flex-start',
    paddingTop: '2px',
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    '@media(max-width: 615px)': {
      marginBottom: '5px',
      marginTop: '5px',
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
    ':active': {
      backgroundColor: theme.colors.darkRed,
    },
    '@media(max-width: 615px)': {
      fontSize: '12px',
      lineHeight: '150%',
    },
  }),
  singleValue: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '25px',
    color: theme.colors.darkGrey,
    left: '38%',
    '@media(max-width: 615px)': {
      top: '55%',
      fontSize: '12px',
      lineHeight: '150%',
    },
  }),
  control: (styles: any) => ({
    ...styles,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.lightGrey,
    boxShadow: 'none',
    width: '90px',
    height: '40px',
    '@media(max-width: 615px)': {
      width: '60px',
      height: '28px',
      minHeight: '28px',
    },
    ':hover': {
      cursor: 'pointer',
      borderColor: theme.colors.lightGrey,
    },
  }),
  menu: (styles: any) => ({
    ...styles,
    position: 'absolute',
    top: '-150px',
    borderRadius: '4px',
    '@media(max-width: 615px)': {
      top: '-125px',
    },
  }),
  menuList: (styles: any) => ({
    ...styles,
    padding: '0',
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    '@media(max-width: 615px)': {
      padding: '0',
    },
  }),
};

interface IProps {
  onChange: (e: any) => void;
}

export const SelectCounts: FC<IProps> = React.memo(({
  onChange,
}) => (
  <Select
    isSearchable={false}
    isMulti={false}
    isClearable={false}
    styles={customStyles}
    defaultValue={counts[0]}
    options={counts}
    placeholder={false}
    onChange={onChange}
  />
));
