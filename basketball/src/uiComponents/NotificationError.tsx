import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { TextStandart } from './Typography';

interface IProps {
  text: string;
}

export const NotificationError: FC<IProps> = ({ text }) => (
  <Container>
    <TextStandart>{text}</TextStandart>
  </Container>
);

const animationNotification = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  
  10% {
    opacity: 0.1;
    transform: scale(0.75);
  }
  
  25% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
  
  75% {
    opacity: 0.8;
    transform: scale(0.95);
  }
  
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  width: 100%;
  animation: ${animationNotification} 1.7s linear;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-iteration-count: 2;
  display: inline-block;
  padding: 8px 16px;
  text-align: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightRed};
  color: ${({ theme }) => theme.colors.white};
 `;
