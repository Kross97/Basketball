interface IRoutePath {
  [key: string]: string;
}

export const routePaths: IRoutePath = {
  signUp: '/',
  signIn: '/signIn',
  main: '/main/:path',
};
