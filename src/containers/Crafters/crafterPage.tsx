import { createStyles, makeStyles } from "@mui/styles";
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import homapageBackground from "../../images/homeBackground.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../../containers/Home/fonts.css";
import { height, textAlign } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Navbar from "../Shared/Navbar";
import { Button, Typography } from "@mui/material";
import profilePlaceholder from "../../images/profilePlaceholder.png";
import app from "../../base";
import { getDocs } from "firebase/firestore";
import crafterBanner from "../../images/crafterBanner.jpg";

// Way to add EXTRA css values
const useStyles = makeStyles((theme) =>
  createStyles({
    name: {
      fontSize: 32,
      color: "#AC5435",
      fontFamily: "Prata",
    },
    infoContainer: {
      fontFamily: "Prata",
      marginTop: "285px",
      width: "100%",
    },
    bio: {
      fontFamily: "Prata",
      color: "#AC5435",
      fontSize: 25,
    },
    location: {
      fontFamily: "Prata",
      color: "#8A7866",
      fontSize: 22,
    },
    background: {
      backgroundColor: "#F7ECE1",
      minHeight: "90%",
    },
    imgContainer: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 400,
      padding: 0,
      maxHeight: 500,
      backgroundImage: "url(" + crafterBanner + ")",
      paddingTop: 20,
      backgroundColor: "rgba(100, 100, 100, 0.5)",
      backgroundBlendMode: "multiply",
    },
    contentContainer: {
      marginTop: 200,
      position: "absolute",
      width: "100%",
    },
    photoContainer: {
      width: "400px",
      height: "450px",
      float: "left",
      textAlign: "center",
      marginRight: "25px",
    },
    productsContainer: {
      fontFamily: "Prata",
      color: "#AC5435",
      fontSize: 25,
      alignContent: "center",
      backgroundColor: "#F7ECE1",
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
    listButton: {
      float: "right",
      marginRight: "2%",
      marginTop: "0px",
      marginBottom: "50px",
    },
    blogPostContainer: {
      fontSize: "25px",
      paddingBottom: "150px",
      textAlign: "left",
      marginLeft: "3%",
      marginRight: "3%",
      backgroundColor: "white",
      marginBottom: "15px",
      marginTop: "15px",
    },
    blogPostTitle: {
      fontFamily: "Lato",
    },
    blogPostDescription: {
      fontFamily: "Lato",
    },
  })
);

const theme = createTheme();

function CraftersPage() {
  const classes = useStyles();
  const history = useHistory();

  const [crafter, setCrafter] = useState<any>();
  const location = useLocation<any>();
  const crafterID = location.state.crafterID;

  const [loggedIn, setLoggedIn] = useState(true);
  const [userID, setUserID] = useState<any>();

  const [allowBlogPost, setAllowBlogPost] = useState(false);

  const userCheck = () => {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setUserID(user.uid);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };

  const getCrafterDetails = () => {
    const firestore = app.firestore();

    const crafterData = firestore
      .collection("userData")
      .doc(crafterID)
      .get()
      .then((snapshot) => setCrafter(snapshot.data()));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    userCheck();
    getCrafterDetails();
  }, []);

  useEffect(() => {
    if (crafterID === userID) {
      setAllowBlogPost(true);
    }
  }, [crafter]);

  return (
    <>
      <Navbar />

      <div className={classes.background}>
        <div className={classes.contentContainer}>
          {crafter ? (
            <>
              <div className={classes.photoContainer}>
                {crafter.photoURL ? (
                  <img
                    src={crafter.photoURL}
                    style={{
                      maxWidth: 300,
                      maxHeight: 300,
                      marginBottom: 20,
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <img
                    src={profilePlaceholder}
                    style={{
                      maxWidth: 300,
                      maxHeight: 300,
                      marginBottom: 20,
                      borderRadius: "50%",
                    }}
                  />
                )}
                <h1 className={classes.name}>{crafter.name}</h1>
                <h1 className={classes.location}>{crafter.userLocation}</h1>
              </div>

              <div className={classes.infoContainer}>
                <h1 className={classes.bio}>"{crafter.userBio}"</h1>
              </div>
            </>
          ) : null}
        </div>
        <div className={classes.imgContainer} />
      </div>

      <div className={classes.productsContainer}>
        <h1
          style={{ fontSize: "35px", marginTop: "0px", paddingBottom: "10px" }}
        >
          Blog Posts
        </h1>

        <div className={classes.blogPostContainer}>
          <text>My new favourite type of art!</text>
          <text>Description</text>
        </div>

        <div className={classes.blogPostContainer}>
          <text>Title</text>
          <text>Description</text>
        </div>

        <h1
          style={{ fontSize: "35px", marginTop: "0px", paddingBottom: "115px" }}
        >
          Products For Sale
        </h1>
      </div>
    </>
  );
}

export default CraftersPage;
