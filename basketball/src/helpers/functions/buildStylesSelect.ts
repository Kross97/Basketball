import { theme } from '../../themes/theme';

export const buildStyleSelect = () => ({
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
    fontSize: '14px',
    lineHeight: '24px',
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
    '@media(max-width: 1300px)': {
      fontSize: '15px',
    },
    '@media(max-width: 930px)': {
      fontSize: '18px',
    },
    '@media(max-width: 475px)': {
      fontSize: '15px',
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
  singleValue: (styles: any, { selectProps }: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: selectProps.isForm ? '500' : 'normal',
    fontSize: '14px',
    lineHeight: selectProps.isForm ? '24px' : '19px',
    padding: '1px 4px',
    borderRadius: '4px',
    color: selectProps.isForm ? theme.colors.darkGrey : theme.colors.white,
    backgroundColor: selectProps.isForm ? 'transparent' : theme.colors.red,
    paddingLeft: '0',
    marginLeft: '0',
    '@media(max-width: 380px)': {
      fontSize: '11px',
    },
    '@media(max-width: 320px)': {
      whiteSpace: 'break-spaces',
      wordBreak: 'break-all',
      lineHeight: 'normal',
    },
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
    marginLeft: '0',
  }),
  input: (styles: any) => ({
    ...styles,
    padding: '4px 8px',
  }),
  menuList: (styles: any) => ({
    ...styles,
    scrollbarColor: `${theme.colors.grey} ${theme.colors.lightestGrey}`,
    scrollbarWidth: 'thin',
    padding: '0',
    '::-webkit-scrollbar-track': {
      backgroundColor: theme.colors.lightestGrey,
    },

    '::-webkit-scrollbar-thumb': {
      '-webkit-border-radius': '0px',
      borderRadius: '0px',
      backgroundColor: theme.colors.grey,
    },

    '::-webkit-scrollbar': {
      width: '2px',
    },
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    overflow: 'auto',
    maxHeight: '40px',
    height: '40px',
    scrollbarColor: `${theme.colors.grey} ${theme.colors.lightestGrey}`,
    scrollbarWidth: 'thin',
    padding: '0 12px',

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
});
