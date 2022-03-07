import { Typography, Button, TextField, createTheme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useState } from "react";
import crafter from "../../images/crafter.png";
import { useHistory } from "react-router";
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

  const submitPage = () => {
    if (password === password2) {
      history.push({
        pathname: "/signup/crafter/profile",
        state: {
          email,
          firstName,
          lastName,
          password,
        },
      });
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
            variant="contained"
            onClick={() => submitPage()}
            style={{
              marginTop: 50,
            }}
          >
            Continue
          </Button>

          <Button
            size="large"
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
