
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
        position: "fixed"
      },
      link: {
        "textDecorationLine": "none",
        fontFamily: "Prata!important",
        "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
        textShadowColor: "0 0 5px rgba(255,255,255,.5)",
        "font-size": "2.75rem!important",
        color: "white",
      },
    })
);

//components and functions here
export default function MarketplaceBar() {

  const classes = Styles();

  return (
    <AppBar style={{ background: "0" ,"boxShadow": "none","position": "static" }} className={classes.bar}>
      <Toolbar className={classes.linkbar}>

        <Typography className={classes.link}>
          <Link>
            Silversmithing
          </Link>
        </Typography>
        <Typography className={classes.link}>
          <Link>
            Textiles
          </Link>
        </Typography>
        <Typography className={classes.link}>
          <Link>
            Basketry
          </Link>
        </Typography>
        <Typography className={classes.link}>
          <Link>
            Pottery
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}