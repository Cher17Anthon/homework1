import './index.css';
import App from './app/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './shared/lib/theme';
import StoreProvider from './app/providers/store/StoreProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
