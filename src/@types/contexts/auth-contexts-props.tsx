import User from '~/services/api/users/User';

export interface Props {
  children: React.ReactNode;
}

export interface AuthProps {
  loading: boolean;
  token: string | null;
  userData: User | undefined;
  handleSignIn: (username: string, password: string) => Promise<void>;
  handleSignOut: () => void;
  errorMessage: string | null;
}
