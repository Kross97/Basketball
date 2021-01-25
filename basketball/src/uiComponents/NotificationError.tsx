import React, { FC } from 'react';
import styled from 'styled-components';
import { TextStandart } from './Typography';

interface IProps {
  text: string;
}

export const NotificationError: FC<IProps> = ({ text }) => (
  <Container>
    <TextStandart>{text}</TextStandart>
  </Container>
);

const Container = styled.div`
  display: inline-block;
  padding: 8px 16px;
  text-align: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightRed};
  color: ${({ theme }) => theme.colors.white};
 `;
