import { createStyles, makeStyles } from "@mui/styles";
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import homapageBackground from "../../images/homeBackground.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../../containers/Home/fonts.css";
import { height, textAlign } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Navbar from "../Shared/Navbar";
import { Typography } from "@mui/material";
import profilePlaceholder from "../../images/profilePlaceholder.png";
import app from "../../base";
import { getDocs } from "firebase/firestore";

// Way to add EXTRA css values
const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      fontSize: 48,
      color: "#ffffff",
      padding: 15,
      paddingTop: 150,
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
    imgcontainer: {
      backgroundColor: "grey",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 900,
      padding: 0,
      maxHeight: 900,
    },
    tint: {
      maxHeight: 1180,
      padding: 0,
      height: 1180,
      backgroundColor: "rgba(0,0,0,.6)",
    },
    maincontainer: {
      backgroundColor: "#F7ECE1",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 900,
      padding: 0,
      maxHeight: 900,
    },
    subtitle: {
      fontSize: 35,
      color: "#AC5435",
      paddingTop: 80,
      fontFamily: "Prata",
      marginTop: 0,
    },
    description2: {
      fontSize: 18,
      color: "#AC5435",
      fontFamily: "Lato",
      fontWeight: 500,
      marginBottom: 65,
    },
    photoContainer: {
      width: "230px",
      height: "230px",
      float: "left",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#B8A088",
      marginBottom: 35,
      marginRight: 35,
    },
    crafterDisplay: {
      marginLeft: 55,
      textAlign: "left",
      marginBottom: 255,
    },
    crafterHeading: {
      fontSize: 22,
      color: "#AC5435",
      fontFamily: "Lato",
    },
  })
);

const theme = createTheme();

function CraftersPage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <h1>Crafter page</h1>
    </>
  );
}

export default CraftersPage;
