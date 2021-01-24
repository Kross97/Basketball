import React from 'react';
import styled from 'styled-components';
import { FieldInputData } from '../uiComponents/FieldInputData';
import { CheckboxСhoice } from '../uiComponents/CheckboxСhoice';
import { ButtonAction } from '../uiComponents/ButtonAction';
import { TextLink } from '../uiComponents/TextLink';
import { TextSmall, TextLabelSignUp } from '../uiComponents/Typography';
import signUp from '../static/images/sign_up.svg';

export const SignUp = () => (
  <SignContainer>
    <FormContainer>
      <FormSignUp>
        <LabelForm>Sign Up</LabelForm>
        <FieldInputData text="Name" disabled={false} type="text" />
        <FieldInputData text="Login" disabled={false} type="text" />
        <FieldInputData text="Password" disabled={false} type="text" />
        <FieldInputData text="Enter your password again" disabled={false} type="text" />
        <CheckboxСhoice text="I accept the agreement" disabled={false} checked={false} />
        <ButtonAction isNegativeStyle={false} isAdding={false} size="large" text="Sign Up" disabled={false} />
        <TextContainer>
          <TextSignUp>
            Already a member?
          </TextSignUp>
          <TextLink text="Sign in" href="/signIn" disabled={false} />
        </TextContainer>
      </FormSignUp>
    </FormContainer>
    <PosterContainer>
      <PosterSignUp />
    </PosterContainer>
  </SignContainer>
);

const SignContainer = styled.div`
 display: flex;
`;

const FormContainer = styled.div`
  flex-grow: 1;
  padding: 226px 120px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const PosterContainer = styled.div`
  flex-grow: 8;
  padding: 305px 0;
  justify-content: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

const FormSignUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TextContainer = styled.div`
  align-self: center;
`;

const TextSignUp = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 5px;
`;

const PosterSignUp = styled.div`
  width: 660px;
  height: 414px;
  background: url(${signUp}) no-repeat;
  background-size: contain;
  display: inline-block;
}
`;

const LabelForm = styled(TextLabelSignUp)`
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 6px;
`;
