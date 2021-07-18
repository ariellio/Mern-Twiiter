import React from 'react';
import { Providor } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './root';

const Root = ( { store } ) => (
    <Providor store ={store} >
        <HashRouter>
            <App />
        </HashRouter>
    </Providor>
)