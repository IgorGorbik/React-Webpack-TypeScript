import { Box, Button, Stack } from '@mui/material';
import { useAppDispatch } from 'app/store';
import { useCallback } from 'react';
import { clearToken } from '../auth/authSlice';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'app/navigation/AppRoutes';

export const DashboardPage = () => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(clearToken());
  }, [dispatch]);

  return (
    <Box>
      <Stack gap={1} mt={3}>
        Dashboard
        <Link to={AppRoutes.pokemons}>pokemons</Link>
        <Button variant="text" onClick={handleLogout} fullWidth>
          Logout
        </Button>
      </Stack>
    </Box>
  );
};
