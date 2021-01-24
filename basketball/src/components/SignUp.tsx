import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FieldInputData } from '../uiComponents/FieldInputData';
import { CheckboxСhoice } from '../uiComponents/CheckboxСhoice';
import { ButtonAction } from '../uiComponents/ButtonAction';
import { TextLink } from '../uiComponents/TextLink';
import { TextSmall, TextLabelSignUp } from '../uiComponents/Typography';
import signUp from '../static/images/sign_up.svg';
import { authData } from '../store';
import { useCustomActions } from '../helpers/functions/useCustomActions';
import { TypesInput } from '../helpers/types/types';

const actionCreators = {
  addAuthData: authData.actions.addAuthData,
};

export const SignUp = () => {
  const [typePasswordInputs, setNewTypes] = useState<{ [key: string]: TypesInput }>({
    password: 'password',
    passwordRepeat: 'password',
  });

  const { addAuthData } = useCustomActions(actionCreators);
  const result = useSelector((state: any) => state.authData);
  console.log('RESULT', result);

  const changeTypeInput = (name: string) => {
    const newType = typePasswordInputs[name] === 'password' ? 'text' : 'password';
    setNewTypes({ ...typePasswordInputs, [name]: newType });
    addAuthData({ authData: 'First!' });
  };

  return (
    <SignContainer>
      <FormContainer>
        <FormSignUp>
          <LabelForm>Sign Up</LabelForm>
          <FieldInputData
            changeHandler={() => console.log('1')}
            name="userName"
            text="Name"
            disabled={false}
            type="text"
            startType="text"
            value="zzz"
          />
          <FieldInputData
            changeHandler={() => console.log('2')}
            name="login"
            text="Login"
            disabled={false}
            type="text"
            startType="text"
            value="zzz"
          />
          <FieldInputData
            changeHandler={() => console.log('3')}
            name="password"
            text="Password"
            disabled={false}
            type={typePasswordInputs.password}
            startType="password"
            changeTypeInput={() => changeTypeInput('password')}
            value="zzz"
          />
          <FieldInputData
            changeHandler={() => console.log('4')}
            name="passwordRepeat"
            text="Enter your password again"
            disabled={false}
            type={typePasswordInputs.passwordRepeat}
            startType="password"
            changeTypeInput={() => changeTypeInput('passwordRepeat')}
            value="zzz"
          />
          <CheckboxСhoice text="I accept the agreement" disabled={false} checked={false} />
          <ButtonAction
            type="submit"
            isNegativeStyle={false}
            isAdding={false}
            size="large"
            text="Sign Up"
            disabled={false}
          />
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
};

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

const FormSignUp = styled.form`
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
