
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";


//creating an instance of makestyles function
const Styles = makeStyles(
  (theme: { breakpoints: { down: (arg0: string) => any } }) =>
    createStyles({
      //styling for components
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1700,
        },
      },
      linkbar: {
        justifyContent: "space-evenly",
        backgroundColor: "0",
        background: "0!important",
      },
      bar: {
        position: "fixed",
        "margin-bottom": "3%",
      },
      link: {
        "textDecorationLine": "none",
        fontFamily: "Prata!important",
        "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
        textShadowColor: "0 0 5px rgba(255,255,255,.5)",
        "font-size": "2.75rem!important",
        color: "white",
      },
      silversmithing:{
        display:"none",
        color: "#ffffff",
        margin: "auto",
        textAlign: "center",
        marginTop: 20,
        fontSize: 18,
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
      textiles:{
        display:"none",
        color: "#ffffff",
        margin: "auto",
        textAlign: "center",
        marginTop: 20,
        fontSize: 18,
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
      basketry:{
        display:"none",
        color: "#ffffff",
        margin: "auto",
        textAlign: "center",
        marginTop: 20,
        fontSize: 18,
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
      pottery:{
        display:"none",
        color: "#ffffff",
        margin: "auto",
        textAlign: "center",
        marginTop: 20,
        fontSize: 18,
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
      woodcarving:{
        display:"none",
        color: "#ffffff",
        margin: "auto",
        textAlign: "center",
        marginTop: 20,
        fontSize: 18,
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
    })
);

//components and functions here
export default function MarketplaceBar() {

  const classes = Styles();

  function silversmith()
  {
    const silversmith = Array.from(document.getElementsByClassName('silversmithing') as HTMLCollectionOf<HTMLElement>,);
    const textile = Array.from(document.getElementsByClassName('textiles') as HTMLCollectionOf<HTMLElement>,);
    const basket = Array.from(document.getElementsByClassName('basketry') as HTMLCollectionOf<HTMLElement>,);
    const pot = Array.from(document.getElementsByClassName('pottery') as HTMLCollectionOf<HTMLElement>,);
    const woodcarve = Array.from(document.getElementsByClassName('woodcarving') as HTMLCollectionOf<HTMLElement>,);

    silversmith.forEach(silversmithing => {
      silversmithing.style.display = 'block';
      silversmithing.style.color = "#ffffff";
      silversmithing.style.textAlign = "center";
      silversmithing.style.marginTop = "2%";
      silversmithing.style.fontSize = "1.5rem";
      silversmithing.style.width = "600!important";
      silversmithing.style.textOverflow = "ellipsis";
      silversmithing.style.fontFamily = "ABeeZee, sans-serif";
      silversmithing.style.textShadow = "0px 2px 5px rgba(0,0,0,0.92)";
      silversmithing.style.visibility = "visible";
      silversmithing.style.opacity = "1";
    });
    textile.forEach(textiles => {
      textiles.style.display = 'none';
    });
    basket.forEach(basketry => {
      basketry.style.display = 'none';
    });
    pot.forEach(pottery => {
      pottery.style.display = 'none';
    });
    woodcarve.forEach(woodcarving => {
      woodcarving.style.display = 'none';
    });
  }
  function textiles()
  {
    const silversmith = Array.from(document.getElementsByClassName('silversmithing') as HTMLCollectionOf<HTMLElement>,);
    const textile = Array.from(document.getElementsByClassName('textiles') as HTMLCollectionOf<HTMLElement>,);
    const basket = Array.from(document.getElementsByClassName('basketry') as HTMLCollectionOf<HTMLElement>,);
    const pot = Array.from(document.getElementsByClassName('pottery') as HTMLCollectionOf<HTMLElement>,);
    const woodcarve = Array.from(document.getElementsByClassName('woodcarving') as HTMLCollectionOf<HTMLElement>,);

    silversmith.forEach(silversmithing => {
      silversmithing.style.display = 'none';
    });
    textile.forEach(textiles => {
      textiles.style.display = 'block';
      textiles.style.color = "#ffffff";
      textiles.style.textAlign = "center";
      textiles.style.marginTop = "2%";
      textiles.style.fontSize = "1.5rem";
      textiles.style.width = "600!important";
      textiles.style.textOverflow = "ellipsis";
      textiles.style.fontFamily = "ABeeZee, sans-serif";
      textiles.style.textShadow = "0px 2px 5px rgba(0,0,0,0.92)";
      textiles.style.visibility = "visible";
      textiles.style.opacity = "1";
    });
    basket.forEach(basketry => {
      basketry.style.display = 'none';
    });
    pot.forEach(pottery => {
      pottery.style.display = 'none';
    });
    woodcarve.forEach(woodcarving => {
      woodcarving.style.display = 'none';
    });
  }
  function basketry()
  {
    const silversmith = Array.from(document.getElementsByClassName('silversmithing') as HTMLCollectionOf<HTMLElement>,);
    const textile = Array.from(document.getElementsByClassName('textiles') as HTMLCollectionOf<HTMLElement>,);
    const basket = Array.from(document.getElementsByClassName('basketry') as HTMLCollectionOf<HTMLElement>,);
    const pot = Array.from(document.getElementsByClassName('pottery') as HTMLCollectionOf<HTMLElement>,);
    const woodcarve = Array.from(document.getElementsByClassName('woodcarving') as HTMLCollectionOf<HTMLElement>,);

    silversmith.forEach(silversmithing => {
      silversmithing.style.display = 'none';
    });
    textile.forEach(textiles => {
      textiles.style.display = 'none';
    });
    basket.forEach(basketry => {
      basketry.style.display = 'block';
      basketry.style.color = "#ffffff";
      basketry.style.textAlign = "center";
      basketry.style.marginTop = "2%";
      basketry.style.fontSize = "1.5rem";
      basketry.style.width = "600!important";
      basketry.style.textOverflow = "ellipsis";
      basketry.style.fontFamily = "ABeeZee, sans-serif";
      basketry.style.textShadow = "0px 2px 5px rgba(0,0,0,0.92)";
      basketry.style.visibility = "visible";
      basketry.style.opacity = "1";
    });
    pot.forEach(pottery => {
      pottery.style.display = 'none';
    });
    woodcarve.forEach(woodcarving => {
      woodcarving.style.display = 'none';
    });
  }
  function pottery()
  {
    const silversmith = Array.from(document.getElementsByClassName('silversmithing') as HTMLCollectionOf<HTMLElement>,);
    const textile = Array.from(document.getElementsByClassName('textiles') as HTMLCollectionOf<HTMLElement>,);
    const basket = Array.from(document.getElementsByClassName('basketry') as HTMLCollectionOf<HTMLElement>,);
    const pot = Array.from(document.getElementsByClassName('pottery') as HTMLCollectionOf<HTMLElement>,);
    const woodcarve = Array.from(document.getElementsByClassName('woodcarving') as HTMLCollectionOf<HTMLElement>,);

    silversmith.forEach(silversmithing => {
      silversmithing.style.display = 'none';
    });
    textile.forEach(textiles => {
      textiles.style.display = 'none';
    });
    basket.forEach(basketry => {
      basketry.style.display = 'none';
    });
    pot.forEach(pottery => {
      pottery.style.display = 'block';
      pottery.style.color = "#ffffff";
      pottery.style.textAlign = "center";
      pottery.style.marginTop = "2%";
      pottery.style.fontSize = "1.5rem";
      pottery.style.width = "600!important";
      pottery.style.textOverflow = "ellipsis";
      pottery.style.fontFamily = "ABeeZee, sans-serif";
      pottery.style.textShadow = "0px 2px 5px rgba(0,0,0,0.92)";
      pottery.style.visibility = "visible";
      pottery.style.opacity = "1";
    });
    woodcarve.forEach(woodcarving => {
      woodcarving.style.display = 'none';
    });
  }
  function woodcarving()
  {
    const silversmith = Array.from(document.getElementsByClassName('silversmithing') as HTMLCollectionOf<HTMLElement>,);
    const textile = Array.from(document.getElementsByClassName('textiles') as HTMLCollectionOf<HTMLElement>,);
    const basket = Array.from(document.getElementsByClassName('basketry') as HTMLCollectionOf<HTMLElement>,);
    const pot = Array.from(document.getElementsByClassName('pottery') as HTMLCollectionOf<HTMLElement>,);
    const woodcarve = Array.from(document.getElementsByClassName('woodcarving') as HTMLCollectionOf<HTMLElement>,);

    silversmith.forEach(silversmithing => {
      silversmithing.style.display = 'none';
    });
    textile.forEach(textiles => {
      textiles.style.display = 'none';
    });
    basket.forEach(basketry => {
      basketry.style.display = 'none';
    });
    pot.forEach(pottery => {
      pottery.style.display = 'none';
    });
    woodcarve.forEach(woodcarving => {
      woodcarving.style.display = 'block';
      woodcarving.style.color = "#ffffff";
      woodcarving.style.textAlign = "center";
      woodcarving.style.marginTop = "2%";
      woodcarving.style.fontSize = "1.5rem";
      woodcarving.style.textOverflow = "ellipsis";
      woodcarving.style.fontFamily = "ABeeZee, sans-serif";
      woodcarving.style.textShadow = "0px 2px 5px rgba(0,0,0,0.92)";
      woodcarving.style.visibility = "visible";
      woodcarving.style.opacity = "1";
    });
  }
  return (
    <AppBar style={{ background: "0" ,"boxShadow": "none","position": "static" }} className={classes.bar}>
      <Toolbar className={classes.linkbar}>

        <Typography className={classes.link}>
          <Link onClick={() => {
              silversmith();
            }}>
            platero
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              textiles();
            }}>
            Tejido
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              basketry();
            }}>
            Cestería 
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              pottery();
            }}>
            Alfarería
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              woodcarving();
            }}>
            Madera
          </Link>
        </Typography>
      </Toolbar>
      <span id = "silversmithing"style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}} className="silversmithing">
      <p>El oficio del joyero mapuche es transversal en nuestra sociedad. Una joya no sólo representa lo que hoy llamamos opulencia, sino además envuelve un sentido filosófico, espiritual, sociopolítico y por supuesto económico. A través de ella, podemos conocer el origen territorial de una persona, el “estado civil”, o su lugar al interior de la sociedad mapuche.</p>
      <p>Obedece, por tanto, no sólo a una técnica de la metalurgia; sino además, da respuesta a cómo aparece y se construye la vida para el mapuche.</p>

        </span>
        <span id = "textiles" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="textiles">
        <p>El tejido lleva mucho conocimiento, así como rituales al mismo tiempo. Desde la búsqueda de la tela araña a las manos de una niña, para que ésta sea una buena tejedora, hasta el respeto por los ngen para pedirles permiso cuando se entra a un bosque u otro lugar natural en la búsqueda de hojas, raíces, tierra, hongos, entre otros, que la naturaleza da para el teñido de la lana.</p>
        <p>Existe gran variedad de prendas tejidas, para diferentes aspectos de la vida, como el vestuario, de uso doméstico y aperos. Cada una de estas prendas llevan consigo simbología propia de la cosmología y orden natural, espiritual y terrenal mapuche, cifrado en cada uno de los símbolos o signos (ñimin) y colores de la prenda.</p>

        </span>
        <span id = "basketry" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="basketry">
        <p>La cestería es un oficio o trabajo anterior a la cerámica. Es un arte que nació para ayudar en los quehaceres diarios, pues ella ha facilitado la recolección de semillas y frutos, conservación de alimentos, limpieza y selección de granos; hoy también es parte de la ornamentación. </p>
        <p>La cestería mapuche también guarda simbología, se reconoce en un yepu, por ejemplo o en un artefacto con fondo circular un espiral, el cual está ligado al agua y al culto a la fertilidad.
A medida que crece la presencia de bosque nativo y se mantienen los humedales en un lugar, aparece junto a ellos diversidad de fibras vegetales, permitiendo la continuidad y existencia de este oficio. 
</p>

        </span>
        <span id = "pottery" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="pottery">
        <p>La recolección, creación y tratado de la greda, obedece a una fuerte tradición arraigada de generaciones anteriores, que se mantienen hasta la fecha. Es un arte que se ha negado a los avances tecnológicos, conservando sus técnicas de origen, entendiendo ésta como un fenómeno de resistencia cultural al mismo tiempo.</p>
        <p>Las creaciones de objetos en greda no sólo se agrupan en una dimensión netamente utilitaria, sino además, éstas deben estar presentes en cada una de las ceremonias o manifestaciones mapuche, como lo son el ngillatun, machitun, funerales, matrimonio, entre otros. Por otro lado, los diversos jarros y pipas de greda, responden a simbologías de carácter natural, así también estructuras familiares y sociales.</p>

        </span>
        <span id = "woodcarving" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="woodcarving">
        <p>El trabajo con madera es otro de los oficios nobles del pueblo mapuche, producto de la recolección de madera de árboles nativos del territorio.</p>
        <p>Su uso es amplio y transversal. Desde lo doméstico a lo ceremonial. Aún, en la actualidad, pese al despojo territorial que vivió el pueblo mapuche y la llegada de forestales y grandes plantaciones agrícolas, esta materia prima ha logrado resistir en algunos sectores.</p>
        <p>Desde ahí, los cultores que la trabajan han podido desarrollar su oficio en la creación de asientos (wanko), kollon (máscara de madera, ceremonial), pali (“pelota” que se usa para el palin), wiño (chueca, que se usa para golpear el pali); cucharas, rali (plato), fuentes, estos últimos de uso doméstico (cocina). Asimismo los instrumentos musicales, como el kultrug, distinguiendo al mismo tiempo de dónde es quien lo usa, por el tipo de madera reconocemos el territorio de origen; lo mismo la pifilka, instrumento de viento.</p>

        </span>
    </AppBar>  
  );
}