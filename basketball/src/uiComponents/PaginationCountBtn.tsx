import React, { FC } from 'react';
import styled from 'styled-components';
import { TextStandart } from './Typography';

interface IProps {
  number: string;
}

export const PaginationCountBtn: FC<IProps> = ({ number }) => (
  <PaginationBtn>
    <TextStandart>{number}</TextStandart>
  </PaginationBtn>
);

const PaginationBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  
  &:active {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;
