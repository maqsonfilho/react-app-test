import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';

const PublicRoute: FC = () => {
  const { token } = useAuth();

  return token ? <Navigate to="/desmembramento" /> : <Outlet />;
};

export default PublicRoute;
