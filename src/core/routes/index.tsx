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
import { AuthProvider } from "../../Auth";

function Routes() {
  //  Marketplace-layout
  //     return (
  //         <Router>
  //             <Switch>
  //                 <Route exact path="/">
  //                     <Redirect to="/marketplace" />
  //                 </Route>
  //                 <Route path="/marketplace" exact component={Marketplace} />
  //                 //<Route path="/home" exact component={Home} />
  //                 //<Route path="/login" exact component={Login} />
  //                 <Route path="/signup" exact component={Signup} />
  //                 <Route path="/signup/customer" exact component={SignupCustomer} />
  //                 <Route path="/signup/crafter" exact component={SignupCrafter} />
  //                 <Route path="/signup/crafter/profile" exact component={SignupCrafterProfile} />
  //             </Switch>
  //         </Router>
  //     );
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/marketplace" exact component={Marketplace} />
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
