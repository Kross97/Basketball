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

export interface IResponseSignUpSucces {
  name: string,
  avatarUrl: string,
  token: string,
}

export interface IResponseSignUpErrors {
  isError: boolean,
  status: number,
}
