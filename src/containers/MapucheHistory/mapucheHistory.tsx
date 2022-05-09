import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../../containers/Home/fonts.css";
import Navbar from "../Shared/Navbar";
import { Button } from "@mui/material";
import app from "../../base";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Parallax } from "react-parallax";
import { styled } from '@mui/material/styles';
import eljoven from "../../images/eljoven.png";
import ethnicgraph from "../../images/ethnicgraph.png";
import salto from "../../images/salto.jpg";
import ocupation from "../../images/ocupation.jpg";
import telas from "../../images/telas.jpg";
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
      color: "#AC5435",
      fontFamily: "Prata",

    },
    description: {
      color: "#ffffff",
      margin: "auto",
      textAlign: "center",
      marginTop: 20,
      fontSize: 18,
      display: "inline-block",
      width: 900,
      "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
      textShadowColor: "0 0 5px rgba(255,255,255,.5)",
      padding: 15,
      paddingBottom: 55,
      overflow: "hidden",
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      fontFamily: "ABeeZee, sans-serif",
    },
    dummytext: {
      color: "#AC5435",
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
    dummytext2: {
      color: "#AC5435",
      margin: "auto",
      textAlign: "center",
      marginTop: 20,
      fontSize: 14,
      display: "inline-block",
      width: 400,
      padding: 15,
      paddingBottom: 55,
      overflow: "hidden",
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      fontFamily: "ABeeZee, sans-serif",
    },
    dummytext4: {
      color: "#AC5435",
      margin: "auto",
      textAlign: "center",
      marginTop: 20,
      fontSize: 15,
      display: "inline-block",
      width: 350,
      padding: 10,
      paddingBottom: 55,
      overflow: "hidden",
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      fontFamily: "ABeeZee, sans-serif",
    },
    dummytext3: {
      color: "#AC5435",
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
      backgroundImage: "url(" + salto + ")",
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
    pictures2: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: 600,
      width: "90%",
      textAlign: "center",
      marginLeft: "5%",
      backgroundImage: "url(" + ethnicgraph + ")",
    },
    pictures3: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: 600,
      width: "75%",
      textAlign: "center",
      marginLeft: "13%",
      backgroundImage: "url(" + ocupation + ")",
    },
    pictures4: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: 545,
      width: "75%",
      textAlign: "center",
      marginLeft: "13%",
      backgroundImage: "url(" + telas + ")",
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
    boxes: {
      margin: "1%",
      marginBottom: "1%"
    },
  })
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MapucheHistory() {
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
        <Parallax bgImage={salto} strength={600}>
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

          <h1 className={`${classes.h1_header}`}>Mapuche History</h1>
          <span className={`${classes.description}`}>
            The Mapuche (/mæˈpʊtʃi/ (Mapuche & Spanish: [maˈputʃe])) are a group of indigenous inhabitants of present-day south-central Chile and southwestern Argentina, including parts of present-day Patagonia. The collective term refers to a wide-ranging ethnicity composed of various groups who shared a common social, religious, and economic structure, as well as a common linguistic heritage as Mapudungun speakers. Their influence once extended from Aconcagua Valley to Chiloé Archipelago and later spread eastward to Puelmapu, a land comprising part of the Argentine pampa and Patagonia. Today the collective group makes up over 80% of the indigenous peoples in Chile, and about 9% of the total Chilean population. The Mapuche are particularly concentrated in the Araucanía region. Many have migrated from rural areas to the cities of Santiago and Buenos Aires for economic opportunities.
          </span>
        </Parallax>
        <Box sx={{ flexGrow: 1 }} className={`${classes.boxes}`}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>
                <h1 className={`${classes.pictureheader}`}>Lautaro</h1>
                <Paper square={true} elevation={24} className={`${classes.pictures}`}>
                </Paper>
                <span className={`${classes.dummytext}`}>
                  Lautaro was the son of a Mapuche lonko (a chief who holds office during peacetime) called, Curiñancu (Kurüñamku in the Mapuche language, Mapudungun, ‘aguilucho negro’ meaning ‘black harrier’) and was born in 1533. He lived a normal life until, at the age of 11, he was captured by the Spanish and forced into servitude by Don Pedro de Valdivia and became his personal servant. Since it was difficult for the Spaniards to pronounce Lautaro’s original name, Leftraru, they gave him the name of Felipe Lautaro. Don Pedro de Valdivia was a Spanish conqueror of Chile and then became the captain general of Chile.
                </span>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>
                <h1 className={`${classes.pictureheader}`}>Etymology</h1>
                <Paper square={true} elevation={24} className={`${classes.pictures2}`}>
                </Paper>
                <span className={`${classes.dummytext2}`}>
                  Nagche: "people of the plains" occupied Nag mapu, "the land of the plains" (located in sectors of the Cordillera de Nahuelbuta and the low zones bordering it). Its epic and literary name is Araucanians and its old autochthonous name is Reche. The ancient Mapuche Toqui ("axe-bearer") like Lef-Traru ("swift hawk", better known as Lautaro), Kallfülikan ("blue quartz stone", better known as Caupolicán – "polished flint") or Pelontraru ("Shining Caracara", better known as Pelantaro) were Nagche.
                </span>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>
                <h1 className={`${classes.pictureheader}`}>Cosmology and beliefs</h1>
                <Paper square={true} elevation={24} className={`${classes.pictures4}`}>
                </Paper>
                <span className={`${classes.dummytext4}`}>
                  Central to Mapuche cosmology is the idea of a creator called ngenechen, who is embodied in four components: an older man (fucha/futra/cha chau), an older woman (kude/kuse), a young man and a young woman. They believe in worlds known as the Wenu Mapu and Minche Mapu. Also, Mapuche cosmology is informed by complex notions of spirits that coexist with humans and animals in the natural world, and daily circumstances can dictate spiritual practices.
                </span>
              </Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item>
                <h1 className={`${classes.pictureheader}`}>Incorporation into Chile and Argentina</h1>
                <Paper square={true} elevation={24} className={`${classes.pictures3}`}>
                </Paper>
                <span className={`${classes.dummytext3}`}>
                  In the nineteenth century Chile experienced a fast territorial expansion. Chile established a colony at the Strait of Magellan in 1843, settled Valdivia, Osorno and Llanquihue with German immigrants and conquered land from Peru and Bolivia. Later Chile would also annex Easter Island. In this context Araucanía began to be conquered by Chile due to two reasons. First, the Chilean state aimed for territorial continuity and second it remained the sole place for Chilean agriculture to expand.
                </span>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default MapucheHistory;
