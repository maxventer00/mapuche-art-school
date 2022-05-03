import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import homapageBackground from "../../images/homeBackground.png";
import Container from "@mui/material/Container";
import "../../containers/Home/fonts.css";
import Navbar from "../Shared/Navbar";
import {Button} from "@mui/material";
import app from "../../base";
import CustomMap from "./customMap";
import { Parallax } from "react-parallax";
import Lumaco from "../../images/Lumaco.jpg";
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
      fontSize: 48,
      color: "#ffffff",
      padding: 15,
      paddingTop: 150,
      fontFamily: "Prata",
      marginTop: 0,
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
    tint: {
      maxHeight: 1180,
      padding: 0,
      height: 1180,
      backgroundColor: "rgba(0,0,0,.6)",
    },
    imgcontainer: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 1180,
      padding: 0,
      maxHeight: 1180,
      backgroundImage: "url(" + Lumaco + ")",
      backgroundColor: "rgba(100, 100, 100, 0.9)",
      backgroundBlendMode: "multiply",
    },
  })
);

// const loader = new Loader({
//   apiKey: "AIzaSyAGTjefET42RORseiTh5HgIYOq_oXaZgJY",
//   version: "weekly",
//   libraries: ["places"]
// });

// const mapOptions = {
//   center: {
//     lat: -38.2555834745345,
//     lng: -72.88456333399817
//   },
//   zoom: 10
// };
// // Promise
// loader
// .load()
// .then((google) => {
//   new google.maps.Map(document.getElementById("map")!, mapOptions);
// })
// .catch(e => {
//   // do something
// });

function NagcheRoute() {
  const classes = useStyles();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(true);

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
        className={`${classes.imgcontainer}`}
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

        <h1 className={`${classes.h1_header}`}>Nagche Route</h1>
        <div style={{ width: 300, height: 300 }}>
          <CustomMap />
        </div>
      </Container>
      
    </>
    
  );
  
}


export default NagcheRoute;
