export interface ISignInForm {
  login: string,
  password: string,
}

export interface ISignUpForm {
  userName: string,
  login: string,
  password: string,
}

export interface IMessageNotification {
  message: string;
  isError: boolean;
}
