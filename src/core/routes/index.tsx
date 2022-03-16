import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Marketplace from "../../containers/Marketplace/marketplace";
import Home from "../../containers/Home/home";
import Login from "../../containers/Onboarding/login";
import Signup from "../../containers/Onboarding/signupSelect";
import SignupCustomer from "../../containers/Onboarding/signupCustomer";
import SignupCrafter from "../../containers/Onboarding/signupCrafter";
import SignupCrafterProfile from "../../containers/Onboarding/signupCrafterProfile";
import ItemPage from "../../containers/Marketplace/itemPage";
import { AuthProvider } from "../../Auth";
import CreateListingPage from "../../containers/Marketplace/createListingPage";
import Crafters from "../../containers/Crafters/crafters";
import app from "../../base";

function Routes() {
  const [loggedIn, setLoggedIn] = useState(false);

  const userCheck = () => {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setLoggedIn(true);
      } else {
        // No user is signed in.
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    userCheck();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/marketplace" exact component={Marketplace} />
        <Route path="/marketplace/itemPage" exact component={ItemPage} />
        <Route
          path="/marketplace/createListingPage"
          exact
          component={CreateListingPage}
        />
        <Route path="/home" exact component={Home} />

        {/* Don't allow user to view these pages if they are logged in */}
        <Route path="/login" exact component={Login}>
          {loggedIn ? <Redirect push to="/home" /> : null}
        </Route>
        <Route path="/signup" exact component={Signup}>
          {loggedIn ? <Redirect push to="/home" /> : null}
        </Route>
        <Route path="/signup/customer" exact component={SignupCustomer}>
          {loggedIn ? <Redirect push to="/home" /> : null}
        </Route>
        <Route path="/signup/crafter" exact component={SignupCrafter}>
          {loggedIn ? <Redirect push to="/home" /> : null}
        </Route>
        {/* Don't allow user to view these pages if they are logged in */}
        <Route
          path="/signup/crafter/profile"
          exact
          component={SignupCrafterProfile}
        />
        <Route path="/crafters" exact component={Crafters} />
      </Switch>
    </Router>
  );
}

export default Routes;
