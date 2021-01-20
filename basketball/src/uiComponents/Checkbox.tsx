import React from "react";
import styled from "styled-components";
import { TextSmall } from "../uiComponents/Typography";

interface IProps {
    text: string;
    disabled: boolean;
    isError?: boolean;
    errorMessage?: string;
}

export const Checkbox = ({ text, disabled, isError = false, errorMessage = '' }: IProps) => {
  return (
      <div>
          <CheckboxContainer>
              <CheckboxNative disabled={disabled} type={"checkbox"} />
              <CheckboxCustom>
                  <Arrow></Arrow>
              </CheckboxCustom>
              <TextCheckBox>{text}</TextCheckBox>
          </CheckboxContainer>
      </div>
  );
};

const CheckboxContainer = styled.label`
 display: flex;
`;

const CheckboxCustom = styled.div`
 width: 12px;
 height: 12px;
 border-radius: 2px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.red }; 
`;

const TextCheckBox = styled(TextSmall)``;

const Arrow = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 1px;
  display: none;
  border: 2.3px solid ${({ theme }) => theme.colors.white };
  width: 7px;
  height: 5px;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
`;

const CheckboxNative = styled.input`
 width: 0;
 height: 0;
 
  &:checked ~ ${CheckboxCustom} {
    background-color: ${({ theme }) => theme.colors.red };
  }

  &:checked ~ ${CheckboxCustom} ${Arrow} {
    display: block;
  }
`;
