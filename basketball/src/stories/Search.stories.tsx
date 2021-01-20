import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Search } from "../uiComponents/Search";
import styled from "styled-components";

export default {
    title: 'Search/Search',
    component: Search,
} as Meta;

export const SearchInput = () => (
    <MockContainer>
        <Search />
    </MockContainer>
    );

const MockContainer = styled.div`
 width: 366px;
`;