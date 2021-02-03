export interface IAddAuth {
  name: string,
  avatarUrl: string,
  token: string,
}

export interface ILocalUserData {
  login: string,
  password: string,
}

export interface INotification {
  message: string;
  isError: boolean;
}

export interface IStateAuthData {
  authData: {
    name: string,
    avatarUrl: string,
    token: string,
  },
  authNotificationMessageSignUp: INotification,
  authErrorMessageSignIn: string,
  errorChangeMessage: string,
  localUserData: {
    login: string,
    password: string,
  },
}

export interface IChangeDataUser {
  userName: string,
  avatarUrl: string,
}
