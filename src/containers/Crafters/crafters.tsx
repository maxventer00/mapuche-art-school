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

function Crafters() {
  const classes = useStyles();
  const history = useHistory();

  const [crafters, setCrafters] = useState<any>([]);
  const [crafterDetails, setCrafterDetails] = useState<any>([]);

  const getCrafters = async () => {
    if (crafters.length === 0) {
      const firestore = app.firestore();

      const collectionRef = firestore.collection("userData");

      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        // Only add crafters
        if (
          doc.data().userType === "Crafter" &&
          crafters.includes(doc.data()) === false
        ) {
          setCrafters((arr: any) => [...arr, doc.data()]);
          setCrafterDetails((arr: any) => [...arr, doc]);
        }
      });
    }
  };

  useEffect(() => {
    getCrafters();
  }, []);

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        className={classes.imgcontainer}
      >
        <Navbar />
        <h1 className={classes.header}>Crafters</h1>

        <span className={classes.description}>
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
      </Container>

      <Container
        disableGutters
        maxWidth={false}
        className={classes.maincontainer}
      >
        <h1 className={classes.subtitle}>All Crafters</h1>
        <h2 className={classes.description2}>
          Click on a crafter to learn more about them and discover their art!
        </h2>

        {crafterDetails.map((doc: any) => {
          let crafter = doc.data();
          let id = doc.id;

          return (
            <>
              <div
                className={classes.crafterDisplay}
                onClick={() => console.log("Clicked " + id)}
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
      </Container>
    </>
  );
}

export default Crafters;
