import { Typography, Button, TextField, createTheme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useState } from "react";
import crafter from "../../images/crafter.png";
import { useHistory } from "react-router";
import Navbar from "../Shared/Navbar";
import app from "../../base";

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
    backgroundImg: {
      backgroundImage: "url(" + crafter + ")",
    },
    subtitle: {
      fontSize: 48,
      paddingTop: "160px",
      color: "white",
    },
    smallBody: {
      fontSize: 22,
      float: "left",
      textDecoration: "underline",
    },
    fieldContainer: {
      maxWidth: 500,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 150,
      paddingTop: 70,
    },
    textFld: {
      width: 500,
      height: 60,
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 30,
      fontSize: 28,
    },
    input: {
      color: "#FFFFFF",
      fontSize: 25,
    },
    label: {
      color: "#767676",
      fontSize: 22,
    },
  })
);

const theme = createTheme();

export default function SignupCrafter() {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const userType = "Crafter";

  const SignUp = async () => {
    if (password === password2) {
      try {
        // Sign up user
        const data = await app
          .auth()
          .createUserWithEmailAndPassword(email, password);

        var userID = data?.user?.uid;

        const firestore = app.firestore();

        firestore.collection("userData").doc(userID).set({
          userType: "Crafter",
        });

        // Update their display name
        await app.auth().onAuthStateChanged(function (user) {
          if (user) {
            user
              .updateProfile({
                displayName: firstName + " " + lastName,
              })
              .then(function () {
                history.push("/signup/crafter/profile");
              });
          }
        });
      } catch (error) {
        console.log(error);
        alert(error);
      }
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <>
      <div className={classes.backgroundImg}>
        <Navbar />

        <Typography className={classes.subtitle} variant="h4">
          Crafter Signup
        </Typography>

        <div className={classes.fieldContainer}>
          <TextField
            className={classes.textFld}
            label="First Name"
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
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            className={classes.textFld}
            label="Last Name"
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
            onChange={(e) => setLastName(e.target.value)}
          />

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
          <TextField
            className={classes.textFld}
            label="Re-Enter Password"
            variant="filled"
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
            onChange={(e) => setPassword2(e.target.value)}
          />

          <Button
            size="large"
            className={classes.contained}
            variant="contained"
            onClick={() => SignUp()}
            style={{
              marginTop: 70,
              marginBottom: 30,
            }}
          >
            Continue
          </Button>

          <Button
            size="large"
            className={classes.outlined}
            variant="outlined"
            onClick={() => history.push("/signup")}
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
}
