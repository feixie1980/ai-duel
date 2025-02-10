import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@radix-ui/themes/styles.css';
import App from './App.tsx';
import { store } from './store';
import { Provider } from 'react-redux';
import { Theme } from '@radix-ui/themes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Theme>
        <App />
      </Theme>
    </Provider>
  </StrictMode>
);
