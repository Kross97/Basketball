import React, { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import search from '../static/icons/search.svg';
import { sizeMobile } from '../helpers/constants/mobileSize';

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FieldSearch: FC<IProps> = ({
  onChange,
}) => {
  const { t } = useTranslation();
  return (
    <SearchContainer>
      <CustomSearch onChange={onChange} type="text" placeholder={t('markup:search')} />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
display: flex;
flex-direction: column;  
`;

const CustomSearch = styled.input`
  outline: none;
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
  border-radius: 4px;
  padding: 7px 12px;
  background: ${({ theme }) => theme.colors.white} url(${search}) no-repeat right 18px center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  
  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.middleGrey};
  }

  @media(max-width: ${sizeMobile}) {
    padding: 4px 12px;
  }
`;
