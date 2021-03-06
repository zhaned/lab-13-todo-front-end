import request from 'superagent';
const URL = 'https://glacial-woodland-36114.herokuapp.com';

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

export async function getTodos(token){
  const response = await request
  .get(`${URL}/api/todos`)
  .set('Authorization', token)

  return response.body;
}

export async function postTodo(todo, token){
  const response = await request
  .post(`${URL}/api/todos`)
  .set('Authorization', token)
  .send({
    todo,
    completed: false
  })

  return response.body;
}

export async function completeTodo(todoId, token){
  const response = await request
  .put(`${URL}/api/todos/${todoId}`)
  .set('Authorization', token)

  return response.body;
}

