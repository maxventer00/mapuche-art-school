
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Trans, useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
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
            {t("silverSmith.head")}
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              textiles();
            }}>
            {t("textile.head")}
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              basketry();
            }}>
            {t("basketry.head")}
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              
              pottery();
            }}>
            {t("Poterry.head")}
          </Link>
        </Typography>
        <Typography className={classes.link}>
        <Link onClick={() => {
              woodcarving();
            }}>
            {t("woodCarving.head")}
          </Link>
        </Typography>
      </Toolbar>
      <span id = "silversmithing"style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}} className="silversmithing">
      <p>{t("silverSmith.label1")}</p>
      <p>{t("silverSmith.label2")}</p>

        </span>
        <span id = "textiles" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="textiles">
        <p>{t("textile.label1")}</p>
        <p>{t("textile.label2")}</p>

        </span>
        <span id = "basketry" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="basketry">
        <p>{t("basketry.label1")}</p>
        <p>{t("basketry.label2")}</p>

        </span>
        <span id = "pottery" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="pottery">
        <p>{t("Poterry.label1")}</p>
        <p>{t("Poterry.label2")}</p>

        </span>
        <span id = "woodcarving" style={{ display: "none", width: "45%", marginLeft: "27.5%",visibility: "hidden", opacity: "0", transition: "visibility 0s, opacity 0.5s linear"}}className="woodcarving">
        <p>{t("woodCarving.label1")}</p>
        <p>{t("woodCarving.label2")}</p>
        <p>{t("woodCarving.label3")}</p>

        </span>
    </AppBar>  
  );
}