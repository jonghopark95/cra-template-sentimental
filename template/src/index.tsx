import { css, Global } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('There is no root element');
}

createRoot(rootElement).render(
  <>
    <Global
      styles={css`
        // You can insert global styles on here.
        // https://emotion.sh/docs/globals
        body {
          margin: 0;
        }
      `}
    />
    <App />
  </>,
);
