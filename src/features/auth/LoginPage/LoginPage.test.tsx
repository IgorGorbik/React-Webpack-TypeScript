import { screen } from '@testing-library/react';
import { AppRoutes } from 'app/navigation/AppRoutes';
import { Fields } from 'test/Fields';
import { navigate, user } from 'test/testUtils';

const renderLoginPage = async () => {
  navigate(AppRoutes.login);

  const element = await screen.findByTestId('LoginPage');
  const submitButton = await screen.findByRole('button', { name: 'Submit' });

  return {
    element,
    submit: () => user.click(submitButton),
  };
};

it('should go to dashboard on success login', async () => {
  const { element, submit } = await renderLoginPage();
  const loginFields = Fields(element);
  await loginFields.fillTextFieldValue('Login', 'Login');
  await loginFields.fillTextFieldValue('Password', 'Password');
  await submit();
  await screen.findByText('Dashboard');
});
