import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
//import Home from "../../containers/Home/home";
import Marketplace from "../../containers/Marketplace/marketplace";

function Routes() {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={Home} /> */}
                
                <Route exact path="/">
                    <Redirect to="/marketplace" />
                </Route>
                <Route path="/marketplace" exact component={Marketplace} />
            </Switch>
        </Router>
    );
}

export default Routes;

