import React from 'react';
import styled from 'styled-components';
import search from '../static/icons/search.svg';

export const FieldSearch = () => (
  <SearchContainer>
    <CustomSearch type="text" placeholder="Search..." />
  </SearchContainer>
);

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
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  
  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.middleGrey};
  }
`;
