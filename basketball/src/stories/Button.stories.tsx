import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from "../uiComponents/Button";
import { Pagination } from "../uiComponents/Pagination";

export default {
    title: 'Example/Buttons',
    component: Button,
} as Meta;

interface IProps {
    type: "Sign" | "Add" | "Cancel",
    size: "small" | "middle" | "large";
    text: string;
    disabled: boolean;
}

export const AllButtons = ({ type = 'Sign', size = 'middle', text = 'Add', disabled = false }: IProps) => (
    <Button
        type={type}
        size={size}
        text={text}
        disabled={disabled}
    />
    );

AllButtons.argsTypes = {
    type: {
        control: {
            type: 'select',
            options: ["Sign" , "Add" , "Cancel"],
        },
    },
 size: {
     control: {
     type: 'select',
     options: ["small" , "middle" , "large"],
   },
 },
  text: {
   control: 'text',
   },
    disabled: {
     control: 'boolean',
    },
};

interface IProps {
    number: string;
}


export const PaginationBtn = ({ number = '1' }: IProps) => (
    <Pagination
      number={number}
    />
);

PaginationBtn.argTypes = {
    number: {
        control: {
          type: 'range',
            min: 1,
            max: 100,
            step: 1,
          },
    },
};