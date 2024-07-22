import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-ui/themes/base/all.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HoverProvider } from './HoverContext';
import { ActiveProvider } from './ActiveContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HoverProvider>
    <ActiveProvider>
      <App />
    </ActiveProvider>
  </HoverProvider >
  ,
);
