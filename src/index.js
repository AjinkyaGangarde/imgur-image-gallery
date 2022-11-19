import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GalleryContextProvider} from './context/GalleryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GalleryContextProvider>
      <App />
    </GalleryContextProvider>
  </React.StrictMode>
);