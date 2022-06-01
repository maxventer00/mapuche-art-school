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
import mapucheflag from "../../images/mapucheflag.png";
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
      backgroundImage: "url(" + mapucheflag + ")",
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

        <h1 className={`${classes.h1_header}`}>Nagche</h1>
         </Parallax>
        <span className={`${classes.dummytext}`}>
        <p>Tal como se señaló, el pueblo Mapuche desde tiempos prehispánico, ocupó los diferentes nichos ecológicos del sur de Chile, desde la costa pacífico, la cordillera de los Andes y la pampa argentina. Si bien en su vida de pueblo independiente (que dataremos hasta 1881 con su derrota militar en Tucapel y la fundación de Temuco), el pueblo mapuche se desplazaba por los diferentes espacios descritos, de acuerdo con sus necesidades económicas, de intercambio comercial y la crianza de su ganado caballar. Luego de estos episodios, se establecieron de manera más permanente y forzada, en dichos territorios. </p>
        <p>Desde el presente, las identidades territoriales del pueblo Mapuche que más se conocen son la Identidad Williche, que cubre el füta willi mapu (la gran tierra del sur) que abarca las actuales regiones de Los Ríos y Los Lagos. La identidad Peweche, que bordea la zona oeste de la cordillera de los Andes, entre las actuales regiones del Bio Bio y la Araucanía. La identidad Wenteche aún ocupa parte del valle central de la región de la Araucanía. Allende de la cordillera de los Andes, tenemos al pueblo Puelche y Tehuelche. En la zona costera del océano Pacífico, de las actuales regiones del Bio Bio y la Araucanía, se ubica la identidad Lafkenche. </p>
        <p>La identidad territorial Nagche, ocupa el este de la Cordillera de la Costa o Cordillera de Nawelfüta (El gran tigre), entre las actuales regiones del Bio Bio y la Araucanía, concentrándose principalmente en las actuales comunas de Purén, Lumaco, Traiguén, Galvarino y Chol Chol. De ahí deriva el Nombre de la actual Área de Desarrollo Indígena (ADI) Puel Nawelfüta, haciendo referencia al este de esta cordillera (puel: este). Desde el inicio de la conquista española y luego en la guerra con el ejército chileno, este territorio fue la primera línea de resistencia y contención del avance extranjero, lo que caracteriza su espíritu guerrero. Sus montañas, de bosques nativos en sus orígenes, junto a zonas de quebradas y valles internos, permitieron hacer de esta zona un lugar de refugio para los kona (guerrero mapuche) y sus familias, los que fueron utilizadas también para emboscadas y escaramuzas que le aseguraban el éxito en sus acciones, dado su dominio del terreno.</p>
        <p>En este territorio, se dieron hechos históricos emblemáticos, tales como el triunfo de los mapuche sobre </p>
        <p>los españoles en Curalaba[1] el año 1598, lo que permitió la realización del Parlamento y Tratado de Quilín (Río Quillen, entre las actuales Comuna de Lautaro y Galvarino) en 1641, lo que entre otros punto, fija la frontera del Bio Bio, dando comienzo a un periodo de relativa calma entre las partes, y que en la historiografía tradicional chilena se conoce como la Colonia. Este tratado fue refrendado por la Corona Española. Algunos de los lonko más conocido de este territorio fueron, por el lado sur de la cordillera, Venancio Coñoepan, en el sector de Repocura (actual comuna de Chol Chol) y Lorenzo Colipi, hacia el norte, en la actual comuna de Purén.</p>
        <p>Del mismo modo, la zona alberga muchos “renü”, cuevas que conectan diferentes valles internos de la Cordillera de Nawelfüta, los que fueron usado militarmente por los mapuche, como lugares de refugio, o rituales, según las zonas y tiempos históricos. También se pueden distinguir los kuel, especie de cerros (o pirámides, según el arqueólogo Tom Dillehay) en honor a un lonko destacado, que se iban formando tras sucesivas capas de tierras que se acumulaban, traídas de diferentes territorios, en encuentros que se realizaban con relativa frecuencia para recordar a dicha persona. En la Comuna de Galvarino, la toponimia del lugar hace referencia a este hecho, como el conocido cordón montañoso denominado Kuel-Ñielol[2]. </p>
        <p>Otros lugares que aún pueden identificar las comunidades mapuche de este territorio, son los txen-txen, cerros tutelares para los mapuche, los eltun, cementerio antiguos, luegos prohibidos por el Estado chileno, los ngillatuwe, lugares para hacer las ceremonias religiosas comunitarias (ngillatun), y los paliwe, zonas donde se practica el juego del palin o chueca. En la zona nagche, es habitual que el paliwe sea a la vez el lugar para hacer el ngillatun. </p>
        <p>En lo que respecta a las características naturales de la zona, y a pesar que en la actualidad se encuentra invadida por las plantaciones de pinos y eucaliptus, lo que ha provocado una degradación del suelo y escasez de agua, aún guarda diferentes saltos de agua o txayenko, como los de Kelen Kelen en Cholchol, salto del Río Quillem en Galvarino, salto de Chufken en Traiguen y Salto Rayen en Puren. Todos estos conforman una rica olla hidrográfica que luego desembocará en el rio Imperial o Txaitxaiko. Hoy dichos cursos de agua se encuentran en peligro por la industria forestal.</p>
        <p>Al extremo norte de la Cordillera de la Costas, en el Parque Nacional Nahuelbuta (entre las comunas de Lumaco y Angol) aún se puede apreciar la belleza del paisaje original de este territorio, que entre otros atractivo, nos muestra bosque de araucarias y alturas que nos permitirán disfrutar de la vista del valle, y desde la Cordillera de los Andes hasta el océano Pacífico, cuando el clima lo permite.</p>
        <p>En lo lingüístico, la identidad nagche, conforma una de las variantes dialectales del mapuzugun o lengua mapuche, caracterizado por sus sonidos “b” en vez de “f” y “d” en vez de “z” (ejemplo: büta/füta y domo/zomo). En todo caso, las variaciones dialectales de la lengua mapuche son poco significativas, siendo todas ellas perfectamente inteligibles entre si. De igual modo, en lo cultural se marcan algunas característica, expresado por ejemplo, en aspectos rituales, y la vestimenta, especialmente el txarilonko (joya de plata que se usa en la cabeza) y el küpam (vestido de la mujer mapuche).</p>
        <p>________________________________________________________________________________________________</p>
        <p>[1] Cuaralaba, ubicada en la actual Comuna de Lumaco, Provincia de Malleco, Región de la Araucanía.</p>
        <p>[2] Para alguno ñielol puede referirse al ñizol, autoridad mapuche que lideraba a varios lonko. Para otros la palabra puede venir de ngenh-lol, el espíritu dueño (ngenh) de la cueva (lol).</p>
        </span>
      </Container>
    </>
  );
}

export default NagcheHistory;
