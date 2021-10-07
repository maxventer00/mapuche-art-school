import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from "../../containers/Home/home";
import Login from "../../containers/Onboarding/login";
import Signup from "../../containers/Onboarding/signup";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </Router>
    );
}

export default Routes;

