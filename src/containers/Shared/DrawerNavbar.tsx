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
import { createStyles, makeStyles } from "@mui/styles";

<style>{"\
.css-1160xiw-MuiPaper-root-MuiDrawer-paper {\
  background: 0 !important;\
  top: 4rem !important;\
  box-shadow: none !important;\
}\
.css-1vfk20j-MuiTypography-root {\
  margin: 0 !important;\
  font-family: Lato,Prata !important;\
  font-weight: 500 !important;\
  font-size: 1.2rem !important;\
  line-height: 1.5 !important;\
  display: block !important;\
}\
.css-185z3ai-MuiPaper-root {\
  margin-bottom: 0.75% !important;\
}\
"}</style>
const useStyles = makeStyles(
  (theme: { breakpoints: { down: (arg0: string) => any } }) =>
    createStyles({
      //styling for components
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1700,
        },
      },
      toolbar: {
        diplay: "flex",
        justifyContent: "flex-start",
        backgroundColor: "transparent",
        color: "transparent",
      },
      flag: {
        height: "4rem",
        width: "4rem",
        [theme.breakpoints.down("sm")]: {
          height: "3rem",
          width: "3rem",
        },
        paddingRight: "100px",
      },
      link: {
        fontFamily: "Proza Libre",
        color: "Black",
        fontWeight: 800,
        "font-size": "1.05rem",
        "text-shadow": "0 0 15px #FFFFFF",
        textShadowColor: "0 50px 18px rgba(255,255,255,0.5)",
        [theme.breakpoints.down("md")]: {
          "font-size": "1rem",
        },
        [theme.breakpoints.down("sm")]: {
          "font-size": "0.55rem",
          "margin-top": "1.5rem",
        },
      },
      linkMain: {
        float: "left",
        "margin-top": ".1rem!important",
        fontFamily: "Prata!important",
        "margin-left": "-5rem!important",
        "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
        textShadowColor: "0 0 5px rgba(255,255,255,.5)",
        "font-size": "1.75rem!important",

        [theme.breakpoints.down("lg")]: {
          "font-size": "1.75rem",
          "margin-left": "-2.5rem",
        },
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      drawer: {
        marginLeft: "auto",
      },
    })
);
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
      color: "#fff",
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
