export interface IRegisterUser {
  userName: string,
  login: string,
  password: string
}

export interface IUserChange {
  userName: string,
  avatarUrl: string
}

export interface ILoginUser {
  login: string,
  password: string
}

export interface IResponseSignSuccess {
  name: string,
  avatarUrl: string,
  token: string,
}

export interface IResponseSignUpErrors {
  isError: boolean,
  status: number,
}

export interface IChangedDataUser {
  change: {
    userName: string,
    avatarUrl: string,
  }
  token: string,
}
