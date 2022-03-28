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
import Crafters from "../../containers/Crafters/crafters";
import app from "../../base";
import CraftersPage from "../../containers/Crafters/crafterPage";
import ListItem from "../../containers/Crafters/listItem";
import NagcheHistory from "../../containers/NagcheHistory/nagcheHistory";

function Routes() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<any>();
  const [loggedInAsCrafter, setLoggedInAsCrafter] = useState(false);

  const userCheck = () => {
    app.auth().onAuthStateChanged(async function (user) {
      if (user) {
        // User is signed in.
        setLoggedIn(true);
        const firestore = app.firestore();
        await firestore
          .collection("userData")
          .doc(user.uid)
          .get()
          .then((snapshot) => setUserInfo(snapshot.data()));
      } else {
        // No user is signed in.
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    userCheck();
  }, []);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.userType === "Crafter") {
        setLoggedInAsCrafter(true);
        console.log("logged in as crafter");
      } else {
        setLoggedInAsCrafter(false);
        console.log("NOT logged in as crafter");
      }
    }
  }, [userInfo]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/marketplace" exact component={Marketplace} />
        <Route exact path="/marketplace/:id" component={ItemPage} />
        <Route
          path="/listitem"
          exact
          component={ListItem}
        >
          {loggedInAsCrafter ? null : <Redirect push to="/home" />}
        </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/nagcheHistory" exact component={NagcheHistory} />
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
        <Route exact path="/crafters/:id" component={CraftersPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
