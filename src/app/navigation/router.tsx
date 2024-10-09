import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from 'features/auth/LoginPage';
import { DashboardPage } from 'features/dashboard/DashboardPage';
import { AppRoutes } from './AppRoutes';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { PokemonsPage } from 'features/pokemon/PokemonsPage';

export const router = createBrowserRouter([
  {
    path: AppRoutes.login,
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: AppRoutes.dashboard,
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: AppRoutes.pokemons,
    element: (
      <ProtectedRoute>
        <PokemonsPage />
      </ProtectedRoute>
    ),
  },
]);
