import { StorageProps } from '~/@types/storage/storage-props';

export const getAuthToken = () => {
  return localStorage.getItem(StorageProps.AUTH_TOKEN);
};

export const setAuthToken = (token: boolean) => {
  const tokenString = JSON.stringify(token);
  return localStorage.setItem(StorageProps.AUTH_TOKEN, tokenString);
};

export const removeAuthToken = () => {
  localStorage.removeItem(StorageProps.AUTH_TOKEN);
};
