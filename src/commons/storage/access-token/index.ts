import { StorageProps } from '~/@types/storage/storage-props';

export const getAccessToken = () => {
  return localStorage.getItem(StorageProps.ACCESS_TOKEN);
};

export const setAccessToken = (token: string) => {
  return localStorage.setItem(StorageProps.ACCESS_TOKEN, token);
};

export const removeAccessToken = () => {
  localStorage.removeItem(StorageProps.ACCESS_TOKEN);
};
