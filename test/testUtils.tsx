import type { Store } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render as rtlRender } from '@testing-library/react';
import { App } from 'app/App';
import { restApi } from 'app/store/restApi';
import { rootReducer } from 'app/store/rootReducer';
import { Provider } from 'react-redux';

type CustomRenderOptions = Omit<RenderOptions, 'queries'> & { store?: Store };

const testStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat([restApi.middleware]),
  });

function render(
  ui: React.ReactElement,
  { store = testStore(), ...renderOptions }: CustomRenderOptions = {}
) {
  const Wrapper: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

const navigate = (path: string) => {
  window.history.pushState({}, '', path);

  render(<App />);
};

export { navigate };

export { default as user } from '@testing-library/user-event';
