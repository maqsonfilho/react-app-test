import React, { createContext, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProps, Props } from '~/@types/contexts/auth-contexts-props';
import { StorageProps } from '~/@types/storage/storage-props';
import { getAccessToken, removeAccessToken } from '~/commons/storage/access-token';
import { getProfileData, removeProfileData } from '~/commons/storage/profile-data';
import { CustomSnackbar } from '~/components/Custom-Snackbar/custom-snackbar';
import AuthService from '~/services/api/auth/AuthService';
import User from '~/services/api/users/User';
import UserService from '~/services/api/users/UserService';

export const AuthContext = createContext<AuthProps>({} as AuthProps);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<User | undefined>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const userService = new UserService();
  const authService = new AuthService();

  useEffect(() => {
    const loadStorageData = async () => {
      const profileData = getProfileData();

      if (profileData) {
        setUserData(JSON.parse(profileData));
      }
    };
    loadStorageData();
  }, []);

  async function handleSignIn(username: string, password: string) {
    try {
      setLoading(true);

      const token = await authService.authenticate(username, password);
      if (!token) {
        return;
      }
      localStorage.setItem(StorageProps.ACCESS_TOKEN, token);
      const loggedUser: User = await userService.getLoggedUser();
      if (!loggedUser) {
        return;
      }
      localStorage.setItem(StorageProps.LOGGED_USER, JSON.stringify(loggedUser));

      navigate('/desmembramento');
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Ocorreu um erro durante o processo de autenticação.';
      setErrorMessage(errorMessage);
      setOpen(true);
    } finally {
      setLoading(false);
    }
  }

  const handleSignOut = () => {
    removeAccessToken();
    removeProfileData();
    setUserData(undefined);
    localStorage.removeItem(StorageProps.LOGGED_USER);

    navigate('/login');
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        token: getAccessToken(),
        userData,
        errorMessage,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
      <CustomSnackbar open={open} message={errorMessage} onClose={handleClose} />
    </AuthContext.Provider>
  );
};
