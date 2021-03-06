import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import "../../containers/Home/fonts.css";
import Navbar from "../Shared/Navbar";
import { Button} from "@mui/material";
import app from "../../base";
import { Parallax } from "react-parallax";
import carbon from "../../images/carbon.png";
import mountain from "../../images/mountain.png";
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
      backgroundImage: "url(" + carbon + ")",
      backgroundColor: "rgba(100, 100, 100, 0.9)",
      backgroundBlendMode: "multiply",
    },
    pictures: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: 800,
      //width: "100%",
      textAlign: "center",
      //marginLeft: "13%",
      backgroundImage: "url(" + mountain + ")",
      marginBottom: "500"
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
        <Parallax bgImage={carbon} strength={600}>
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
        <Paper square={true} elevation={24} className={`${classes.pictures}`}></Paper>
        <p>Tal como se se??al??, el pueblo Mapuche desde tiempos prehisp??nico, ocup?? los diferentes nichos ecol??gicos del sur de Chile, desde la costa pac??fico, la cordillera de los Andes y la pampa argentina. Si bien en su vida de pueblo independiente (que dataremos hasta 1881 con su derrota militar en Tucapel y la fundaci??n de Temuco), el pueblo mapuche se desplazaba por los diferentes espacios descritos, de acuerdo con sus necesidades econ??micas, de intercambio comercial y la crianza de su ganado caballar. Luego de estos episodios, se establecieron de manera m??s permanente y forzada, en dichos territorios. </p>
        <p>Desde el presente, las identidades territoriales del pueblo Mapuche que m??s se conocen son la Identidad Williche, que cubre el f??ta willi mapu (la gran tierra del sur) que abarca las actuales regiones de Los R??os y Los Lagos. La identidad Peweche, que bordea la zona oeste de la cordillera de los Andes, entre las actuales regiones del Bio Bio y la Araucan??a. La identidad Wenteche a??n ocupa parte del valle central de la regi??n de la Araucan??a. Allende de la cordillera de los Andes, tenemos al pueblo Puelche y Tehuelche. En la zona costera del oc??ano Pac??fico, de las actuales regiones del Bio Bio y la Araucan??a, se ubica la identidad Lafkenche. </p>
        <p>La identidad territorial Nagche, ocupa el este de la Cordillera de la Costa o Cordillera de Nawelf??ta (El gran tigre), entre las actuales regiones del Bio Bio y la Araucan??a, concentr??ndose principalmente en las actuales comunas de Pur??n, Lumaco, Traigu??n, Galvarino y Chol Chol. De ah?? deriva el Nombre de la actual ??rea de Desarrollo Ind??gena (ADI) Puel Nawelf??ta, haciendo referencia al este de esta cordillera (puel: este). Desde el inicio de la conquista espa??ola y luego en la guerra con el ej??rcito chileno, este territorio fue la primera l??nea de resistencia y contenci??n del avance extranjero, lo que caracteriza su esp??ritu guerrero. Sus monta??as, de bosques nativos en sus or??genes, junto a zonas de quebradas y valles internos, permitieron hacer de esta zona un lugar de refugio para los kona (guerrero mapuche) y sus familias, los que fueron utilizadas tambi??n para emboscadas y escaramuzas que le aseguraban el ??xito en sus acciones, dado su dominio del terreno.</p>
        <p>En este territorio, se dieron hechos hist??ricos emblem??ticos, tales como el triunfo de los mapuche sobre </p>
        <p>los espa??oles en Curalaba[1] el a??o 1598, lo que permiti?? la realizaci??n del Parlamento y Tratado de Quil??n (R??o Quillen, entre las actuales Comuna de Lautaro y Galvarino) en 1641, lo que entre otros punto, fija la frontera del Bio Bio, dando comienzo a un periodo de relativa calma entre las partes, y que en la historiograf??a tradicional chilena se conoce como la Colonia. Este tratado fue refrendado por la Corona Espa??ola. Algunos de los lonko m??s conocido de este territorio fueron, por el lado sur de la cordillera, Venancio Co??oepan, en el sector de Repocura (actual comuna de Chol Chol) y Lorenzo Colipi, hacia el norte, en la actual comuna de Pur??n.</p>
        <p>Del mismo modo, la zona alberga muchos ???ren?????, cuevas que conectan diferentes valles internos de la Cordillera de Nawelf??ta, los que fueron usado militarmente por los mapuche, como lugares de refugio, o rituales, seg??n las zonas y tiempos hist??ricos. Tambi??n se pueden distinguir los kuel, especie de cerros (o pir??mides, seg??n el arque??logo Tom Dillehay) en honor a un lonko destacado, que se iban formando tras sucesivas capas de tierras que se acumulaban, tra??das de diferentes territorios, en encuentros que se realizaban con relativa frecuencia para recordar a dicha persona. En la Comuna de Galvarino, la toponimia del lugar hace referencia a este hecho, como el conocido cord??n monta??oso denominado Kuel-??ielol[2]. </p>
        <p>Otros lugares que a??n pueden identificar las comunidades mapuche de este territorio, son los txen-txen, cerros tutelares para los mapuche, los eltun, cementerio antiguos, luegos prohibidos por el Estado chileno, los ngillatuwe, lugares para hacer las ceremonias religiosas comunitarias (ngillatun), y los paliwe, zonas donde se practica el juego del palin o chueca. En la zona nagche, es habitual que el paliwe sea a la vez el lugar para hacer el ngillatun. </p>
        <p>En lo que respecta a las caracter??sticas naturales de la zona, y a pesar que en la actualidad se encuentra invadida por las plantaciones de pinos y eucaliptus, lo que ha provocado una degradaci??n del suelo y escasez de agua, a??n guarda diferentes saltos de agua o txayenko, como los de Kelen Kelen en Cholchol, salto del R??o Quillem en Galvarino, salto de Chufken en Traiguen y Salto Rayen en Puren. Todos estos conforman una rica olla hidrogr??fica que luego desembocar?? en el rio Imperial o Txaitxaiko. Hoy dichos cursos de agua se encuentran en peligro por la industria forestal.</p>
        <p>Al extremo norte de la Cordillera de la Costas, en el Parque Nacional Nahuelbuta (entre las comunas de Lumaco y Angol) a??n se puede apreciar la belleza del paisaje original de este territorio, que entre otros atractivo, nos muestra bosque de araucarias y alturas que nos permitir??n disfrutar de la vista del valle, y desde la Cordillera de los Andes hasta el oc??ano Pac??fico, cuando el clima lo permite.</p>
        <p>En lo ling????stico, la identidad nagche, conforma una de las variantes dialectales del mapuzugun o lengua mapuche, caracterizado por sus sonidos ???b??? en vez de ???f??? y ???d??? en vez de ???z??? (ejemplo: b??ta/f??ta y domo/zomo). En todo caso, las variaciones dialectales de la lengua mapuche son poco significativas, siendo todas ellas perfectamente inteligibles entre si. De igual modo, en lo cultural se marcan algunas caracter??stica, expresado por ejemplo, en aspectos rituales, y la vestimenta, especialmente el txarilonko (joya de plata que se usa en la cabeza) y el k??pam (vestido de la mujer mapuche).</p>
        <p>________________________________________________________________________________________________</p>
        <p>[1] Cuaralaba, ubicada en la actual Comuna de Lumaco, Provincia de Malleco, Regi??n de la Araucan??a.</p>
        <p>[2] Para alguno ??ielol puede referirse al ??izol, autoridad mapuche que lideraba a varios lonko. Para otros la palabra puede venir de ngenh-lol, el esp??ritu due??o (ngenh) de la cueva (lol).</p>
        </span>
      </Container>
    </>
  );
}

export default NagcheHistory;