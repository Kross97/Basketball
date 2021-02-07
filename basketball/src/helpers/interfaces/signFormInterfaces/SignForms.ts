export interface ISignInForm {
  login: string,
  password: string,
}

export interface ISignUpForm {
  acceptAgreement: boolean,
  login: string,
  password: string,
  passwordRepeat: string,
  userName: string,
}

export interface IMessageNotification {
  message: string;
  isError: boolean;
}
