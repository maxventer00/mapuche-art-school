import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink, useHistory } from "react-router-dom";
import app from "../../base";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../App";
import LanguageMenu from "./LanguageMenu";
import MenuIcon from "@mui/icons-material/Menu";
import '../../index.css';
type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const [loggedIn, setLoggedIn] = useState(true);
  const language: any = useContext(LanguageContext);
  const history = useHistory();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
      color: "#000",
      "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
      textShadowColor: "0 0 5px rgba(255,255,255,.5)",
      width: anchor === "top" || anchor === "bottom" ? "auto" : 225,
      marginTop: "3.5rem", }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List sx={{bgcolor: "transparent" }}>
        <ListItem button>
          <ListItemText primary="Home" onClick={() => history.push("/home")} />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Mapuche History"
            onClick={() => history.push("/mapucheHistory")}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Nagche History"
            onClick={() => history.push("/nagcheHistory")}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Nagche Route"
            onClick={() => history.push("/nagcheRoute")}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Crafters"
            onClick={() => history.push("/crafters")}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Marketplace"
            onClick={() => history.push("/marketplace")}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Login/Sign Up"
            onClick={() => history.push("/login")}
          />
        </ListItem>
        <ListItem button>
          <LanguageMenu />
        </ListItem>
      </List>
    </Box>
  );

  const userCheck = () => {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    userCheck();
    console.log(language.language);
  }, []);

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            color="primary"
            onClick={toggleDrawer(anchor, true)}
            fontSize="large"
          >
            {anchor}
          </MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
