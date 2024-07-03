import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// biome-ignore lint/style/noNonNullAssertion:
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <Notifications />
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
