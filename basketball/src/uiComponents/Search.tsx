import React from "react";
import styled from "styled-components";
import search from "../static/icons/search.png";

export const Search = () => {
  return (
      <SearchContainer>
          <CustomSearch type={"text"} placeholder={"Search..."} />
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
  border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}` };
  border-radius: 4px;
  padding: 11px 12px;
  background: ${({ theme }) => theme.colors.white } url(${search}) no-repeat right 18px center;
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  
  &::placeholder {
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.middleGrey };
  }
`;