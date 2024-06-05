import { StorageProps } from '~/@types/storage/storage-props';

export const getProfileData = (): string | null => {
  return localStorage.getItem(StorageProps.PROFILE_DATA);
};

export const setProfileData = (profileData: string): void => {
  localStorage.setItem(StorageProps.PROFILE_DATA, profileData);
};

export const removeProfileData = (): void => {
  localStorage.removeItem(StorageProps.PROFILE_DATA);
};
