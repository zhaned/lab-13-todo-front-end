const USER = 'USER';

export function getUserFromLocalStorage() {
  const user = localStorage.getItem(USER);
  if(user) return JSON.parse(user);

  return {
    email: '',
    password: '',
    token: ''
  }
}

export function setUserInLocalStorage(user) {
  localStorage.setItem(USER, JSON.stringify(user));
}