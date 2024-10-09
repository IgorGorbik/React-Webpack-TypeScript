import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'app/store';
import { selectCurrentToken } from 'features/auth/authSlice';
import { AppRoutes } from './AppRoutes';

export const ProtectedRoute: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const token = useAppSelector(selectCurrentToken);

  if (!token) {
    return <Navigate to={AppRoutes.login} replace />;
  }

  return children;
};
