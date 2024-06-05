import { FC } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRouteProps } from '~/@types/components/Private-Route/private-route-props';
import { useAuth } from '~/hooks/useAuth';

const PrivateRoute: FC<PrivateRouteProps> = () => {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
