
export const API_URL = 'https://682aafcdab2b5004cb3761ac.mockapi.io/api/v1/users';

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