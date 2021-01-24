import React from 'react';
import { get } from './api';

function App() {
  const handler = async () => {
    const res = await get('http://dev.trainee.dex-it.ru/api/Auth/SignUp');
    console.log('RESULT', res);
  };

  return (
    <button onClick={handler} type="button">Request</button>
  );
}

export default App;
