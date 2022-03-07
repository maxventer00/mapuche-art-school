import { Typography, Button, TextField, createTheme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useState } from "react";
import crafter from "../../images/crafter.png";
import profilePlaceholder from "../../images/profilePlaceholder.png";
import { useHistory, withRouter, useLocation } from "react-router";
import app from "../../base";
import Navbar from "../Shared/Navbar";

const useStyles = makeStyles((theme) =>
  createStyles({
    tempNav: {
      backgroundColor: "#ffffff",
      height: 50,
      marginBottom: 140,
    },
    backgroundImg: {
      backgroundImage: "url(" + crafter + ")",
    },
    subtitle: {
      fontSize: 48,
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
      paddingBottom: 80,
    },
    profileConatiner: {
      maxWidth: 500,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    buttonContainer: {
      maxWidth: 500,
      display: "flex",
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
    textFldAbout: {
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

interface LocationState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export default function SignupCrafterProfile() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation<LocationState>();

  const [photoURL, setPhotoURL] = useState("");

  const SignUp = async () => {
    try {
      // Sign up user
      await app
        .auth()
        .createUserWithEmailAndPassword(
          location.state.email,
          location.state.password
        );

      // Update their display name
      await app.auth().onAuthStateChanged(function (user) {
        if (user) {
          user
            .updateProfile({
              displayName:
                location.state.firstName + " " + location.state.lastName,
              photoURL: photoURL,
            })
            .then(function () {
              history.push("/");
            });
        }
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className={classes.backgroundImg}>
        <Navbar />

        <Typography className={classes.subtitle} variant="h4">
          Crafter Signup
        </Typography>

        <div className={classes.profileConatiner}>
          <img
            src={profilePlaceholder}
            style={{
              maxWidth: 230,
              maxHeight: 230,
              float: "left",
              marginBottom: 50,
            }}
          />

          <Typography
            variant="h4"
            style={{
              fontSize: 22,
              float: "left",
              marginLeft: 20,
            }}
          >
            Profile Picture
          </Typography>

          <Button
            size="large"
            variant="outlined"
            style={{
              marginTop: 90,
              maxWidth: 250,
              maxHeight: 40,
              display: "flex",
              float: "left",
              marginLeft: 20,
            }}
          >
            Upload
          </Button>
        </div>

        <div className={classes.fieldContainer}>
          <TextField
            className={classes.textFldAbout}
            label="About Yourself"
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
          />

          <TextField
            className={classes.textFld}
            label="Location"
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
          />

          <div className={classes.buttonContainer}>
            <Button
              size="large"
              variant="outlined"
              onClick={() => history.push("/signup")}
              style={{
                marginTop: 50,
                maxWidth: 300,
                display: "flex",
                float: "left",
                marginRight: 10,
              }}
            >
              Back
            </Button>

            <Button
              size="large"
              variant="contained"
              onClick={() => SignUp()}
              style={{
                marginTop: 50,
                maxWidth: 300,
                display: "flex",
                float: "right",
                marginLeft: 10,
              }}
            >
              Confirm Signup
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
