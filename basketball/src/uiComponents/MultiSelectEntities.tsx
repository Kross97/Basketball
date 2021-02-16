import React, { FC } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { TextSmall, TextExtraSmall } from './Typography';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { buildStyleSelect } from '../helpers/functions/buildStylesSelect';

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
  isForm = false,
  defaultValue,
  isError,
  onChange,
}) => (
  <SelectLabel>
    {text && <TextLabel>{text}</TextLabel>}
    <Select
      isSearchable={false}
      onChange={onChange}
      placeholder={isPlaceholder}
      isMulti={isMulti}
      isClearable
      isError={isError}
      isForm={isForm}
      styles={buildStyleSelect()}
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
