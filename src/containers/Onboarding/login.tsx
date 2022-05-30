import { Typography, Button, TextField, Container } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import homapageBackground from "../../images/homeBackground.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import app from "../../base";
import Navbar from "../Shared/Navbar";

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
      marginTop: "20px",
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
    subtitle: {
      fontSize: 48,
      paddingTop: "250px",
      color: "white",
    },
    smallBody: {
      fontSize: 22,
      float: "left",
      textDecoration: "underline",
      color: "white",
      paddingBottom: 25,
    },
    fieldContainer: {
      maxWidth: 500,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 80,
      paddingTop: 70,
    },
    bgImg: {
      backgroundImage: "url(" + homapageBackground + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    textFld: {
      width: 500,
      height: 60,
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 30,
      fontSize: 35,
    },
    input: {
      color: "#FFFFFF",
      fontSize: 25,
    },
    label: {
      color: "#767676",
      fontSize: 25,
    },
  })
);

const theme = createTheme();

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    try {
      // Login user
      await app.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className={classes.bgImg}>
        <Navbar />

        <Typography className={classes.subtitle} variant="h4">
          Login
        </Typography>

        <div className={classes.fieldContainer}>
          <TextField
            className={classes.textFld}
            label="Email Address"
            variant="filled"
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.textFld}
            label="Password"
            variant="filled"
            type="password"
            InputProps={{
              classes: {
                input: classes.label,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography className={classes.smallBody}>Forgot Password</Typography>

          <Button
            className={classes.contained}
            size="large"
            variant="contained"
            onClick={() => Login()}
          >
            Login
          </Button>

          <Typography
            variant="h4"
            style={{
              fontSize: 25,
              marginTop: 100,
              marginBottom: 30,
              color: "white",
            }}
          >
            Haven’t made an account yet?
          </Typography>

          <Button
            className={classes.outlined}
            size="large"
            variant="outlined"
            style={{
              maxWidth: 300,
              marginTop: 0,
            }}
            onClick={() => history.push("/signup")}
          >
            Signup
          </Button>
        </div>
      </div>
    </>
  );
}
