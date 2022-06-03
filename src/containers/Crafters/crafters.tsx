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
import { Button, Typography } from "@mui/material";
import profilePlaceholder from "../../images/profilePlaceholder.png";
import app from "../../base";
import { getDocs } from "firebase/firestore";
import allCraftersBanner from "../../images/allCraftersBanner.jpg";
import { Parallax } from "react-parallax";
import LoadingAnimation from "../LoadingAnimation";

// Way to add EXTRA css values
const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      fontSize: 48,
      color: "#ffffff",
      padding: 15,
      paddingTop: 150,
      fontFamily: "Prata",
      marginTop: 0,
      "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
      textShadowColor: "0 0 5px rgba(255,255,255,.5)",
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
      paddingBottom: 100,
      overflow: "hidden",
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      fontFamily: "ABeeZee, sans-serif",
      "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
      textShadowColor: "0 0 5px rgba(255,255,255,.5)",
    },
    contactUs: {
      width: 200,
      height: 50,
      fontFamily: "ABeeZee, sans-serif",
      textTransform: "none",
      marginTop: 30,
    },
    imgcontainer: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 900,
      paddingTop: 20,
      maxHeight: 900,
      backgroundImage: "url(" + allCraftersBanner + ")",
      backgroundColor: "rgba(100, 100, 100, 0.9)",
      backgroundBlendMode: "multiply",
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
      padding: 0,
      minHeight: "100%",
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
      paddingBottom: 200,
      backgroundColor: "#F7ECE1",
    },
    crafterHeading: {
      fontSize: 22,
      color: "#AC5435",
      fontFamily: "Lato",
    },
  })
);

const theme = createTheme();

function Crafters() {
  const classes = useStyles();
  const history = useHistory();

  const [crafters, setCrafters] = useState<any>([]);
  const [crafterDetails, setCrafterDetails] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(false);

  const getCrafters = async () => {
    setIsLoading(true);
    if (crafters.length === 0) {
      const firestore = app.firestore();

      const collectionRef = firestore.collection("userData");

      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        // Only add crafters
        if (
          doc.data().userType === "Crafter" &&
          doc.data().crafterApproved &&
          crafters.includes(doc.data()) === false
        ) {
          setCrafters((arr: any) => [...arr, doc.data()]);
          setCrafterDetails((arr: any) => [...arr, doc]);
        }
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCrafters();
  }, []);

  return (
    <>
      <Navbar />
      <Parallax bgImage={allCraftersBanner} strength={600}>
        <h1 className={classes.header}>Crafters</h1>
      </Parallax>

      <Container
        disableGutters
        maxWidth={false}
        className={classes.maincontainer}
      >
        <h1 className={classes.subtitle}>All Crafters</h1>
        <h2 className={classes.description2}>
          Click on a crafter to learn more about them and discover their art!
        </h2>

        {isLoading ? (
          <LoadingAnimation zIndex={1} paddingBottom={40} />
        ) : (
          <>
            {crafterDetails.map((doc: any) => {
              let crafter = doc.data();
              let id = doc.id;

              return (
                <>
                  <div
                    className={classes.crafterDisplay}
                    onClick={() =>
                      history.push({
                        pathname: `/crafters/${id}`,
                        state: { crafterID: id },
                      })
                    }
                  >
                    <div className={classes.photoContainer}>
                      {crafter.photoURL ? (
                        <img
                          src={crafter.photoURL}
                          style={{
                            maxWidth: 230,
                            maxHeight: 230,
                            marginBottom: 50,
                            float: "left",
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <img
                          src={profilePlaceholder}
                          style={{
                            maxWidth: 230,
                            maxHeight: 230,
                            marginBottom: 50,
                            float: "left",
                          }}
                        />
                      )}
                    </div>
                    <h2 className={classes.crafterHeading}>{crafter.name}</h2>
                    <h2
                      className={classes.crafterHeading}
                      style={{ display: "inline" }}
                    >
                      Location:{"  "}
                    </h2>
                    <h2
                      className={classes.crafterHeading}
                      style={{ fontWeight: 500, display: "inline" }}
                    >
                      {crafter.userLocation}
                    </h2>
                  </div>
                </>
              );
            })}
          </>
        )}
      </Container>
    </>
  );
}

export default Crafters;
