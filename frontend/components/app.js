import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch } from 'react-router';
import NavBarContainer from './nav/NavBarContainer';

import Main from './main/main._page';
import LoginFormContainer from './session/login_form_contianer';
import SignUpFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={Main} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
)

export default App