import './index.css'; // Должен быть первым
import App from './app/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './shared/lib/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
