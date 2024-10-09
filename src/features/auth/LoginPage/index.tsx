import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { AppRoutes } from 'app/navigation/AppRoutes';
import { useAppDispatch } from 'app/store';
import { TextFormField } from 'components/Form/TextFormField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../authSlice';
import { loginPageStyles } from './LoginPage.styles';
import { generateToken } from './generateToken';
import { useCallback } from 'react';

type LoginFields = { login: string; password: string };

export const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<LoginFields>({
    defaultValues: { login: '', password: '' },
  });

  const onSubmit = useCallback<SubmitHandler<LoginFields>>(
    (fields) => {
      console.log(fields);
      dispatch(setToken(generateToken(35)));
      navigate(AppRoutes.dashboard, { replace: true });
    },
    [dispatch, navigate]
  );

  return (
    <Card css={loginPageStyles.card} variant="outlined" data-testid="LoginPage">
      <Typography component="h5" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack gap={1}>
          <TextFormField control={control} name="login" label="Login" required />
          <TextFormField
            control={control}
            name="password"
            label="Password"
            type="password"
            required
          />
          <Stack direction="row" gap={1} mt={3}>
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};
