import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import homapageBackground from "../../images/homeBackground.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../../containers/Home/fonts.css";
import { height } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Navbar from "../Shared/Navbar";
import { Typography, Button, TextField } from "@mui/material";
import app from "../../base";

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
    h1_header: {
      fontSize: 50,
      color: "#ffffff",
      padding: 15,
      paddingTop: 120,
      fontFamily: "Prata",
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
    },
    contactUs: {
      width: 200,
      height: 50,
      fontFamily: "ABeeZee, sans-serif",
      textTransform: "none",
      marginTop: 30,
    },

    container: {
      backgroundImage: "url(" + homapageBackground + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 1180,
      padding: 0,
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

  const [loggedIn, setLoggedIn] = useState(false);

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
  }, []);

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        className={`${classes.container}`}
      >
        <Navbar />
        <h1 className={`${classes.h1_header}`}>Mapuche Art School</h1>

        <span className={`${classes.description}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
