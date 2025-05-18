import axios from 'axios';
export const API_URL = 'https://fcfa2f07-e3ee-442c-a475-e66ef7415112.mock.pstmn.io/users';

const credentials={
  username:'Richard',
  password: 'Ygy@657s'
}
export default credentials;


export function isValid(value) {
  const lowerCase = /[a-z]/.test(value);
  const upperCase = /[A-Z]/.test(value);
  const digit = /[0-9]/.test(value);
  const symbol = /[!@#$%^&*]/.test(value);
  const len = value.length >= 8;

  if (!len || !lowerCase || !upperCase || (!symbol && !digit)) {
      return "Password should be minimum of 8 characters and must contain atleast 1 uppercase, 1 lowercase and digit or symbol";
  }
  return true;
}