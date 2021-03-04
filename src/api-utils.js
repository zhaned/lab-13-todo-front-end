import request from 'superagent';
const URL = 'http://localhost:3000';

export async function signUpUser(email, password){
  const response = await request
  .post(`${URL}/auth/signup`)
  .send({
    email: email,
    password: password,
  })

  return response.body;
}

export async function loginUser(email, password){
  const response = await request
  .post(`${URL}/auth/signin`)
  .send({
    email: email,
    password: password,
  })

  return response.body;
}