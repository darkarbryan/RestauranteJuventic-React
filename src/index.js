import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './administrar/_helpers';
import { App } from './App';
import { HomePage } from './HomePage';
import { adminPage } from './administrar/Login/adminPage.js';
import { LoginPage } from './administrar/Login/LoginPage.js';
import { RegisterPage } from './administrar/RegisterPage/RegisterPage';



// setup fake backend
import { configureFakeBackend } from './administrar/_helpers';
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    
      
    </Provider>,
    document.getElementById('app')
);
