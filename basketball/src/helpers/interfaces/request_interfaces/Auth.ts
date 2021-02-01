export interface RegisterUser {
  userName: string,
  login: string,
  password: string
}

export interface UserChange {
  userName: string,
  avatarUrl: string
}

export interface LoginUser {
  login: string,
  password: string
}

export interface IResponseSignSucces {
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
