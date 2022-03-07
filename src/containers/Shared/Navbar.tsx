//imports
import { AppBar, Avatar, Link, Toolbar, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//creating an instance of makestyles function
const useStyles = makeStyles(
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
      toolbar: {
        diplay: "flex",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        marginRight: "6%",
      },
      flag: {
        "margin-top": "1.25rem",
        height: "4rem",
        width: "4rem",
        [theme.breakpoints.down("sm")]: {
          height: "3rem",
          width: "3rem",
        },
      },
      link: {
        "margin-top": "2rem",
        fontFamily: "Proza Libre",
        color: "white",
        fontWeight: 900,
        "margin-right": "-1rem",
        [theme.breakpoints.down("md")]: {
          "font-size": "1rem",
        },
        [theme.breakpoints.down("sm")]: {
          "font-size": "0.55rem",
          "margin-top": "1.5rem",
        },
      },
      linkMain: {
        "margin-top": "1.25rem",
        fontFamily: "Prata",
        "margin-left": "-5.5rem",
        "font-size": "2.25rem",

        [theme.breakpoints.down("lg")]: {
          "font-size": "1.75rem",
          "margin-left": "-2.5rem",
        },
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
      appbar: {
        backgroundColor: "transparent",
      },
    })
);

const theme = createTheme();

//components and functions here
export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Avatar
          className={classes.flag}
          alt="Flag"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Ancient_mapuche_flag.svg"
          variant="square"
        />
        <Typography className={classes.linkMain}>
          Mapuche Arts & Crafts School
        </Typography>

        <Link className={classes.link} href="#">
          Home
        </Link>
        <Link className={classes.link} href="#">
          Mapuche History
        </Link>
        <Link className={classes.link} href="#">
          Nagche History
        </Link>
        <Link className={classes.link} href="#">
          Nagche Route
        </Link>
        <Link className={classes.link} href="#">
          Crafters
        </Link>
        <Link className={classes.link} href="#">
          Marketplace
        </Link>
      </Toolbar>
    </AppBar>
  );
}
