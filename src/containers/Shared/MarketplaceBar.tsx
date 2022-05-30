
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
            Silversmithing
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              textiles();
            }}>
            Textiles
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              basketry();
            }}>
            Basketry
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              pottery();
            }}>
            Pottery
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              woodcarving();
            }}>
            Wood Carving
          </Link>
        </Typography>
      </Toolbar>
      <span id = "silversmithing"style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}} className="silversmithing">
      <p>The Mapuche jeweler's craft is transversal in our society. A jewel not only represents what today we call opulence, but also involves a philosophical, spiritual, socio-political and of course economic sense. Through it, we can know the territorial origin of a person, the marital status or position within the Mapuche society.</p>
      <p>It obeys, therefore, not only to a technique of metallurgy, but also gives an answer to how life appears and is constructed for the Mapuche.</p>

        </span>
        <span id = "textiles" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="textiles">
        <p>Weaving carries a lot of knowledge as well as rituals at the same time. From the search for the spider's web in the hands of a girl, so that she will be a good weaver, to the respect for the ngen to ask their permission when entering a forest or other natural place in search of leaves, roots, earth, mushrooms, among others, that nature gives for the dyeing of wool.</p>
        <p>There is a great variety of woven garments for different aspects of life, such as clothing, domestic use and tools. Each of these garments carries with it its own symbolism of the Mapuche cosmology and natural, spiritual and earthly order, encoded in each of the symbols or signs (ñimin) and colours of the garment.</p>

        </span>
        <span id = "basketry" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="basketry">
        <p>Basketry is a craft or work that predates pottery. It is an art that was born to help in daily chores, as it has facilitated the collection of seeds and fruits, food preservation, cleaning and selection of grains; today it is also part of ornamentation. </p>
        <p>Mapuche basketry also holds symbolism, as can be seen in a llepu, for example, or in an artefact with a circular bottom, a spiral, which is linked to water and the cult of fertility.
As the presence of native forest grows and wetlands are maintained in a place, a diversity of plant fibres appear alongside them, allowing the continuity and existence of this craft. </p>

        </span>
        <span id = "pottery" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="pottery">
        <p>The collection, creation and processing of clay, obeys a strong tradition rooted in previous generations, which has been maintained to this day. It is an art that has refused technological advances, conserving its original techniques, understanding this as a phenomenon of cultural resistance at the same time.</p>
        <p>The creations of objects in clay are not only grouped in a purely utilitarian dimension, but they must also be present in each of the Mapuche ceremonies or manifestations, such as the ngillatun, machitun, funerals, marriages, among others. On the other hand, the various clay jars and pipes respond to symbolism of a natural nature, as well as family and social structures.</p>

        </span>
        <span id = "woodcarving" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="woodcarving">
        <p>Woodworking is another of the Mapuche people's noble trades, a product of the harvesting of wood from native trees in the territory.</p>
        <p>Its use is broad and transversal. From domestic to ceremonial. Even today, despite the territorial dispossession experienced by the Mapuche people and the arrival of forestry companies and large agricultural plantations, this raw material has managed to resist in some sectors.</p>
        <p>From there, the people who work with it have been able to develop their craft in the creation of seats (wanko), kollon (wooden mask, ceremonial), pali ("ball" used for the palin), wiño (crooked, used to hit the pali); spoons, rali (plate), dishes, the latter for domestic use (kitchen). Likewise musical instruments, such as the kultrug, distinguishing at the same time where the user is from, by the type of wood we recognise the territory of origin; the same goes for the pifilka, a wind instrument.</p>

        </span>
    </AppBar>  
  );
}