import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { CalendarField } from '../uiComponents/CalendarField';

export default {
  title: 'UI/Calendar',
  component: CalendarField,
} as Meta;

export const CalendarBirthDay = () => (
  <MockContainer>
    <CalendarField
      trigger={(key = 'key') => console.log('trigger', key)}
      register={() => {}}
    />
  </MockContainer>
);

export const InputDate = () => <input type="date" />;

const MockContainer = styled.div`
  margin-top: 450px;  
  width: 171px;
`;
