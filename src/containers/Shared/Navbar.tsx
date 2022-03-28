//imports
import { AppBar, Avatar, Link, Toolbar, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

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
        height: "4rem",
        width: "4rem",
        [theme.breakpoints.down("sm")]: {
          height: "3rem",
          width: "3rem",
        },
      },
      link: {
        fontFamily: "Proza Libre",
        color: "Black",
        fontWeight: 900,
        "font-size": "1.05rem",
        "text-shadow": "0px 2px 9px rgba(0,0,0,0.72)",
        "textShadowColor": '0 0 15px rgba(255,255,255,.5)',
        [theme.breakpoints.down("md")]: {
          "font-size": "1rem",
        },
        [theme.breakpoints.down("sm")]: {
          "font-size": "0.55rem",
          "margin-top": "1.5rem",
        },
      },
      linkMain: {
        "margin-top": ".1rem!important",
        fontFamily: "Prata!important",
        "margin-left": "-5rem!important",
        "text-shadow": "0px 2px 9px rgba(0,0,0,0.92)",
        "textShadowColor": '0 0 15px rgba(255,255,255,.5)',
        "font-size": "1.75rem!important",
        

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

//components and functions here
export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Link href={"/home"}>
          <Avatar
            className={classes.flag}
            alt="Flag"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Ancient_mapuche_flag.svg"
            variant="square"
          />
        </Link>
        <Typography className={classes.linkMain}>
        <Link href={"/home"} underline="none" color="black">
          Mapuche Arts & Crafts School
        </Link>
        </Typography>
        <NavLink className={classes.link} to="/home" style={isActive => ({
            color: isActive ? "#0039A6" : "black",
            textDecoration: "none"
          })}>
          Home
        </NavLink>
        <NavLink className={classes.link}  to="/test" style={isActive => ({
            color: isActive ? "#0039A6" : "black",
            textDecoration: "none"
          })}>
          Mapuche History
        </NavLink>
        <NavLink className={classes.link} to="/nagcheHistory" style={isActive => ({
            color: isActive ? "#0039A6" : "black",
            textDecoration: "none"
          })}>
          Nagche History
        </NavLink>
        <NavLink className={classes.link} to="/test2" style={isActive => ({
            color: isActive ? "#0039A6" : "black",
            textDecoration: "none"
          })}>
          Nagche Route
        </NavLink>
        <NavLink className={classes.link} to="/crafters" style={isActive => ({
            color: isActive ? "#0039A6" : "black",
            textDecoration: "none"
          })}>
          Crafters
        </NavLink>
        <NavLink className={classes.link} to="/marketplace" style={isActive => ({
            color: isActive ? "#0039A6" : "black",
            textDecoration: "none"
          })}>
          Marketplace
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
