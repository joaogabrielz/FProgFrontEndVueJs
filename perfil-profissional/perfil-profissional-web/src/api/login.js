import { mande } from 'mande';

const loginApi  = mande('http://localhost:3000/login', {});

export async function login(usuario) {
  return await loginApi.post(usuario);
}
