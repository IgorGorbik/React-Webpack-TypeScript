import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { router } from './navigation/router';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
