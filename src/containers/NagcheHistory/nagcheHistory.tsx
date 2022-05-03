import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import "../../containers/Home/fonts.css";
import Navbar from "../Shared/Navbar";
import { Button} from "@mui/material";
import app from "../../base";
import { Parallax } from "react-parallax";
import cholchol from "../../images/cholchol.jpg";
import eljoven from "../../images/eljoven.png";
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
      "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
      textShadowColor: "0 0 5px rgba(255,255,255,.5)",
    },
    pictureheader: {
      fontSize: 48,
      color: "#000000",
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
      paddingBottom: 55,
      overflow: "hidden",
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      fontFamily: "ABeeZee, sans-serif",
      "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
      textShadowColor: "0 0 5px rgba(255,255,255,.5)",
    },
    dummytext: {
      color: "#000000",
      margin: "auto",
      textAlign: "center",
      marginTop: 20,
      fontSize: 18,
      display: "inline-block",
      width: 800,
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
    imgcontainer: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 900,
      paddingTop: 20,
      maxHeight: 900,
      backgroundImage: "url(" + cholchol + ")",
      backgroundColor: "rgba(100, 100, 100, 0.9)",
      backgroundBlendMode: "multiply",
    },
    pictures: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: 600,
      width: "75%",
      textAlign: "center",
      marginLeft: "13%",
      backgroundImage: "url(" + eljoven + ")",
    },
    maincontainer: {
      backgroundColor: "#F7ECE1",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      padding: 0,
      minHeight: "100%",
    },
    tint: {
      maxHeight: 1180,
      padding: 0,
      height: 1180,
      backgroundColor: "rgba(0,0,0,.6)",
    },
  })
);

function NagcheHistory() {
  const classes = useStyles();

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
        className={`${classes.maincontainer}`}
      >
        <Navbar />
        <Parallax bgImage={cholchol} strength={600}>
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

        <h1 className={`${classes.h1_header}`}>Nagche History</h1>
        <span className={`${classes.description}`}>
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
         </Parallax>
         <h1 className={`${classes.pictureheader}`}>Lautaro</h1>
        <Paper square={true} elevation={24} className={`${classes.pictures}`}>
        </Paper>
        <span className={`${classes.dummytext}`}>
        Lautaro was the son of a Mapuche lonko (a chief who holds office during peacetime) called, Curiñancu (Kurüñamku in the Mapuche language, Mapudungun, ‘aguilucho negro’ meaning ‘black harrier’) and was born in 1533. He lived a normal life until, at the age of 11, he was captured by the Spanish and forced into servitude by Don Pedro de Valdivia and became his personal servant. Since it was difficult for the Spaniards to pronounce Lautaro’s original name, Leftraru, they gave him the name of Felipe Lautaro. Don Pedro de Valdivia was a Spanish conqueror of Chile and then became the captain general of Chile.
        </span>
      </Container>
    </>
  );
}

export default NagcheHistory;
