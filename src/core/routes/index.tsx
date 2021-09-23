import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from "../../containers/Home/home";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={Home} />
            </Switch>
        </Router>
    );
}

export default Routes;

