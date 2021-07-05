import { signIn } from '../../api/auth';

let token;

beforeAll(async () => {
  const dataLogin = {
    login: 'Bezh1',
    password: '1',
  };
  const response = await signIn('Auth/SignIn', dataLogin);
  token = response.token;
});

test('Sign In test', async () => {
  const dataLogin = {
    login: 'Bezh1',
    password: '1',
  };
  const response = await signIn('Auth/SignIn', dataLogin);
  expect(response).toHaveProperty('name');
  expect(response).toHaveProperty('avatarUrl');
  expect(response).toHaveProperty('token');
});
