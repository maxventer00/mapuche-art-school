import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import homepic from "../../images/Homepic.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../../containers/Home/fonts.css";
import { height } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Navbar from "../Shared/Navbar";
import { Typography, Button, TextField } from "@mui/material";
import app from "../../base";
import Footer from "../Shared/footer";
import { Trans, useTranslation } from "react-i18next";

// Way to add EXTRA css values
const useStyles = makeStyles((theme) =>
  createStyles({
    contained: {
      backgroundColor: "#B8A088",
      color: "white",
      boxShadow: "none",
      borderWidth: "5px",
      borderColor: "white",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "25px",
      lineHeight: "30px",
      width: "500px",
      marginTop: "50px",
      "&:hover": {
        backgroundColor: "#8A7866",
        boxShadow: "none",
      },
    },
    outlined: {
      backgroundColor: "transparent",
      color: "white",
      boxShadow: "none",
      borderWidth: "2px",
      borderColor: "white",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "25px",
      lineHeight: "30px",
      width: "500px",
      marginTop: "20px",
      "&:hover": {
        backgroundColor: "#8A7866",
      },
    },
    signoutButtonContainer: {
      float: "right",
      marginRight: "2%",
      marginTop: "55px",
    },
    h1_header: {
      fontSize: 50,
      color: "#ffffff",
      padding: 15,
      paddingTop: 120,
      fontFamily: "Prata",
      "text-shadow": "0 0 30px rgba(0,0,0,.99), 0 0 10px rgba(0,0,0,.99)",
      textShadowColor: "0 0 5px rgba(255,255,255,.99)",
    },
    description: {
      color: "#ffffff",
      margin: "auto",
      textAlign: "center",
      marginTop: 20,
      fontSize: 18,
      display: "inline-block",
      width: 600,
      padding: 15,
      paddingBottom: 55,
      overflow: "hidden",
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      fontFamily: "ABeeZee, sans-serif",
      "text-shadow": "0 0 20px rgba(0,0,0,.99), 0 0 10px rgba(0,0,0,.99)",
      textShadowColor: "0 0 5px rgba(255,255,255,.99)",
    },
    contactUs: {
      width: 200,
      height: 50,
      fontFamily: "ABeeZee, sans-serif",
      textTransform: "none",
      marginTop: 30,
    },
    container: {
      backgroundImage: "url(" + homepic + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 1180,
      paddingTop: 60,
      maxHeight: 1180,
    },
    tint: {
      maxHeight: 1180,
      padding: 0,
      height: 1180,
      backgroundColor: "rgba(0,0,0,.6)",
    },
  })
);

const theme = createTheme();

function Home() {
  

  const classes = useStyles();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(true);
  const { t, i18n } = useTranslation();


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

  const signOut = async () => {
    await app.auth().signOut();
  };

  useEffect(() => {
    userCheck();
  }, []);

  return (
    
    <>
      <Container
        disableGutters
        maxWidth={false}
        className={`${classes.container}`}
      >
        <Navbar />

        {loggedIn ? (
          <div className={classes.signoutButtonContainer}>
            <Button
              style={{ maxWidth: "155px" }}
              className={classes.outlined}
              variant="outlined"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </div>
        ) : null}

        <h1 className={`${classes.h1_header}`}>Nagche Arts & Crafts school</h1>

        <span className={`${classes.description}`}>
        <p>{t("homepage.label1")}</p>
        <p>{t("homepage.label2")}</p>
        <p>{t("homepage.label3")}</p>
        </span>

        {loggedIn ? null : (
          <div>
            <Button
              className={classes.contained}
              variant="contained"
              onClick={() => history.push("/login")}
            >
              Login/Sign up
            </Button>
          </div>
        )}
      </Container>
    </>
  );
}

export default Home;
