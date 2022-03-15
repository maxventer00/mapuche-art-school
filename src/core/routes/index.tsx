import React from "react";
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

function Routes() {
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
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signup/customer" exact component={SignupCustomer} />
        <Route path="/signup/crafter" exact component={SignupCrafter} />
        <Route
          path="/signup/crafter/profile"
          exact
          component={SignupCrafterProfile}
        />
        <Route path="/crafters" exact component={Crafters} />
      </Switch>
    </Router>
  );
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/marketplace" exact component={Marketplace} />
          <Route path="/marketplace/item" exact component={ItemPage} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signup/customer" exact component={SignupCustomer} />
          <Route path="/signup/crafter" exact component={SignupCrafter} />
          <Route
            path="/signup/crafter/profile"
            exact
            component={SignupCrafterProfile}
          />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default Routes;
