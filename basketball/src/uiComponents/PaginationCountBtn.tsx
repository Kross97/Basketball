import React, { FC } from 'react';
import styled from 'styled-components';
import { TextStandart } from './Typography';
import { PagginationBtn } from '../helpers/types/types';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';

interface IProps {
  type: PagginationBtn;
}

export const PaginationCountBtn: FC<IProps> = ({ type }) => (
  <PaginationBtn>
    <TextPagination type={type}>{type === 'break' ? '...' : <Arrow type={type} />}</TextPagination>
  </PaginationBtn>
);

const Arrow = styled.div<{ type: string }>`
  border: 2px solid grey;
  border-top: none;
  border-right: none;
  width: 6px;
  height: 6px;
  transform: rotate(${({ type }) => (type === 'prev' ? '45deg' : '225deg')});
`;

const PaginationBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.middleGrey};
  
  @media(max-width: ${mobileVersionLayout}) {
    width: 28px;
    height: 28px;
  }
  
  
  &:active {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    & ${Arrow} {
    border-color: ${({ theme }) => theme.colors.white};
  }
  }
`;

const TextPagination = styled(TextStandart)<{ type: string}>`
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 2px;
`;
