import { Typography, Button, TextField, createTheme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import cusSignup from "../../images/cusSignup.png";
import craftSignup from "../../images/craftSignup.png";
import { useHistory } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import app from "../../base";

const useStyles = makeStyles((theme) =>
  createStyles({
    topImg: {
      backgroundImage: "url(" + cusSignup + ")",
      maxHeight: "50%",
    },
    bottomImg: {
      backgroundImage: "url(" + craftSignup + ")",
      maxHeight: "50%",
    },
  })
);

const theme = createTheme();

export default function Signup() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Navbar />

      <div className={classes.topImg}>
        <Button
          size="large"
          variant="outlined"
          style={{
            maxWidth: 300,
            marginTop: "20vh",
            marginBottom: 700,
          }}
          onClick={() => history.push("/signup/customer")}
        >
          Customer Signup
        </Button>
      </div>

      <div className={classes.bottomImg}>
        <Button
          size="large"
          variant="outlined"
          style={{
            maxWidth: 300,
            marginTop: "20vh",
            marginBottom: 700,
          }}
          onClick={() => history.push("/signup/crafter")}
        >
          Crafter Signup
        </Button>
      </div>
    </>
  );
}
