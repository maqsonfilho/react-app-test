import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './components/Private-Route/private-route';
import PublicRoute from './components/Public-Route/public-route';
import { AuthProvider } from './context/auth';
import { NotFound } from './pages/NotFound';
import { Dismemberment } from './pages/dismemberment';
import { Login } from './pages/login';
import MyThemeProvider from './styles/MyThemeProvider';

export const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <MyThemeProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Navigate to="/desmembramento" />} />
              <Route path="desmembramento" element={<Dismemberment />} />
            </Route>

            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="reset-password" />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </MyThemeProvider>
      </AuthProvider>
    </Router>
  );
};
