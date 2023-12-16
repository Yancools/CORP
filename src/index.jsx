import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import './i18next/i18next'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Нет такого элемента как "root"');

const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);