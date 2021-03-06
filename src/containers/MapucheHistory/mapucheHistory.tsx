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
import mapucheflag from "../../images/MapucheFlag.png";
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
      fontSize: "5rem",
      color: "#ffffff",
      padding: 15,
      paddingTop: 120,
      fontFamily: "Prata",
      "text-shadow": "0 0 30px rgba(0,0,0,.99), 0 0 10px rgba(0,0,0,.99)",
      textShadowColor: "0 0 5px rgba(255,255,255,.99)",
    },
    pictureheader: {
      fontSize: 35,
      color: "#ffffff",
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
      fontSize: 16,
      display: "inline-block",
      width: 800,
      height: 546,
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
      marginTop: "20%",
      fontSize: 18,
      display: "inline-block",
      width: 400,
      height: 961.5,
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
      fontSize: 17,
      display: "inline-block",
      width: 350,
      height: 416.5,
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
      height: 515,
      width: "65.5%",
      textAlign: "center",
      marginLeft: "17%",
      backgroundImage: "url(" + mapucheflag + ")",
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

          <h1 className={`${classes.h1_header}`}>EL PUEBLO MAPUCHE</h1>
        </Parallax>
        <Box sx={{ flexGrow: 1 }} className={`${classes.boxes}`}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>
                <Paper square={true} elevation={24} className={`${classes.pictures}`}>
                </Paper>
                <span className={`${classes.dummytext}`}>
                El pueblo Mapuche, es la naci??n prehisp??nica que habitaba pr??cticamente todo el centro y sur del Chile actual, desde los r??os Itata por el norte, hasta la Isla de Chilo?? por el sur. Sin embargo, con la llegada del Imperio Espa??ol (entre 1536 a 1541) y luego de los primeros a??os de enfrentamientos entre ambos pueblos (la Guerra de Arauco de 1541 a 1598), se establece como frontera el r??o Bio Bio (en la actual regi??n del mismo nombre) que durante casi dos siglos (1598 a 1810), y en una relativa tranquilidad, permiti?? el desarrollo colonial de los espa??oles en la zona central de Chile, y el desarrollo econ??mico del pueblo Mapuche al sur del Bio Bio, expandi??ndose su dominio hacia las pampas de la actual Argentina. Durante los siglos XVII, XVIII y parte del XIX, el pueblo mapuche pas?? de ser un pueblo cazador y recolector, a uno cuya base econ??mica se encontraba en la crianza del ganado, caballar principalmente, controlando el tr??fico comercial a ambos lados de la cordillera de Los Andes, desde el oc??ano Pac??fico al oc??ano Atl??ntico. Este periodo marca el surgimiento del ??lmen, persona de poder econ??mico, capaz de controlar bastos territorios y ligados a diferentes familias del Wallmapu o territorio mapuche.
Como es prol??feramente testimoniado por diversos historiadores, el pueblo Mapuche no pudo ser derrotado por los espa??oles, m??s bien se establecieron entendimientos mutuos a trav??s de continuos parlamentos, reconocidos por las autoridades espa??olas en Chile y por la propia corona espa??ola. Dicha resistencia, para muchos se debe al tipo de organizaci??n de la sociedad mapuche. Ello obedec??a a una unidad b??sica, el lof o comunidad, liderada por un lonko (jefe de la comunidad), el que pod??a hacer alianzas territoriales de mediana o gran magnitud (rewe, aylla rewe y f??talmapu). Dicha alianza, liderada por un toki o jefe de guerra, pod??a obedecer a fines espec??ficos o de m??s largo alcance, pero nunca llegaron a constituir un Estado, y en definitiva, siempre cada lof era aut??nomo de tomar sus determinaciones. Por ende, y en contraposici??n al caso de la conquista espa??ola de los Aztecas en M??xico o los Incas en Per??, en el pueblo mapuche no tuvieron una cabeza ??nica a quien derrotar. Fortaleza o debilidad, dicha organizaci??n se mantiene hasta el d??a de hoy. Sin embargo, ello no implic?? que se generan complejos lazos de parentesco y alianzas militares y econ??micas entre las distintas identidades territoriales que habitaban los diversos nichos ecol??gicos del Wallmapu (costa pac??fico, cordillera de los Andes y la pampa argentina).
                </span>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>
                <Paper>
                </Paper>
                <span className={`${classes.dummytext2}`}>
                Durante el proceso de independencia de Chile, los mapuche tomaron posiciones divergentes, unos apoyando a los independistas, otros, haciendo valer los acuerdos con los espa??oles, pelearon contra los criollos (1810-1818). Durante los primeros a??os de la Rep??blica chilena, sus gobernantes siguieron la pol??tica de la colonia hacia los mapuche, respetando la frontera del Bio Bio. Sin embargo, ya en la segunda mitad del siglo XIX (1860-1881), una vez asentado el Estado chileno, producto de su expansi??n en el norte (Guerra del Pac??fico), y contando con un ej??rcito moderno, se dio a la tarea de invadir el territorio mapuche, lo que eufem??sticamente se dio en llamar ???la pacificaci??n de la Araucan??a[1]???. Esta invasi??n implic?? una dr??stica disminuci??n de la poblaci??n mapuche, diezmada por una guerra de exterminio, que se dio en base a una acci??n conjunta del Estado chileno y argentino, en ambos lados de la Cordillera de los Andes. Junto a ello, le fueron arrebatadas sus tierras m??s productivas de la zona central de la actuales regiones del Bio Bio, la Araucan??a, Los R??os y Los Lagos, las cuales fueron entregada a colonos de origen europeo. En contraposici??n, poblaci??n mapuche sobreviviente, fue arrinconada en ???reducciones???, en tierras de baja productividad. Desde este momento comienza la imposici??n del Estado chileno de todos sus dispositivos, instituciones y ciudades que conformaran el paisaje actual. A??n as??, tanto la Corona espa??ola, como el Estado chileno, dejaron documentado en parlamentos y t??tulos de merced, las tierras que se establec??an para el pueblo mapuche, lo que es hoy la base de su lucha para la restituci??n de tierras.
                </span>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>
                <Paper>
                </Paper>
                <span className={`${classes.dummytext4}`}>
                Luego de este repliegue inicial del pueblo mapuche, ya a iniciados la segunda d??cadas del siglo XX, y producto del proceso de formaci??n de los primeros profesionales mapuche (principalmente profesores) quienes conocen la lengua, cultura y leyes del estado chileno, se dan a la tarea de la conformaci??n de las primeras organizaciones mapuche, tales como la Sociedad Caupolic??n o la Federaci??n Araucana, quienes denuncian la condici??n de su pueblo y buscan avanzar en sus reivindicaciones de tierras y derechos colectivos. Esto inaugura un nuevo periodo en la historia mapuche, en donde mapuche tanto del campo como de la ciudad buscan hacerse escuchar, ya no a trav??s de sus organizaciones tradicionales, sino a trav??s de diversas organizaciones. 
                </span>
              </Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item>
                <Paper>
                </Paper>
                <span className={`${classes.dummytext3}`}>
                En este mismo esfuerzo, los intelectuales mapuche, comienzan a abrirse paso en los partidos pol??ticos de representaci??n popular, y as?? logran elegir a diferentes diputados, quienes tratan de representar sus interese como pueblo en la pol??tica chilena. Dicho proceso va en ascenso, en conjunto con los procesos de reforma agraria que comienzan a abrirse en la segunda mitad del siglo XX en toda Am??rica Latina, los que luego van a tener un serio repliegue con el surgimiento de las dictaduras militares, de la cual Chile no tuvo exento. A??n as??, persiste durante los a??os 70??? y 80??? la representaci??n indirecta del pueblo mapuche, a trav??s de los partidos pol??ticos chilenos del m??s amplio espectro. Dicho proceso, sufre un momento de inflexi??n con la conmemoraci??n de los 500 a??os del ???descubrimiento??? de Am??rica a principios de los a??os ??90, con el surgimiento del movimiento zapatista en M??xico y el auge del movimiento ind??gena en Guatema, Ecuador y Bolivia, entre otros, que lleva a que las organizaciones mapuche se replanteen de manera independiente a los partidos pol??ticos chilenos, y el surgimiento de organizaciones propias. Ello, unido al desarrollo del derecho internacional, coloca en la palestra pol??tica demanda por autonom??a, tema que marcar?? la pol??tica entre el Estado chileno y el pueblo mapuche, en la naciente democracia de finales del siglo XX y principios del XXI.

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