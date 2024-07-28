import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './components/context/LanguageContext';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
    </LanguageProvider>
    
  </React.StrictMode>
);


