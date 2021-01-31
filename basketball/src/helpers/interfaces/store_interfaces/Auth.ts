export interface IAddAuth {
  name: string,
  avatarUrl: string,
  token: string,
}

export interface ILocalUserData {
  login: string,
  password: string,
}

export interface IStateAuthData {
  authData: {
    name: string,
    avatarUrl: string,
    token: string,
  },
  authErrorMessageSignUp: string,
  authErrorMessageSignIn: string,
  errorChangeMessage: string,
  localUserData: {
    login: string,
    password: string,
  },
}
