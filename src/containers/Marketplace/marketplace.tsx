import { createStyles, makeStyles } from "@mui/styles";
import { useEffect } from "react";
import {
  Typography,
  Button,
  Container,
  createTheme,
  TextField,
  Paper,
  Card,
  CardContent,
  CardMedia,
  autocompleteClasses,
  Grid,
} from "@mui/material";
import { useHistory } from "react-router";
import homapageBackground from "../../images/homeBackground.png";
import { Box } from "@mui/system";
import itemTest from "../../images/itemTest.png";
import { Filter } from './filter';

const useStyles = makeStyles((theme) =>
  createStyles({
    tempNav: {
      backgroundColor: "#ffffff",
      height: 50,
    },
    h1_header: {
      fontSize: 50,
      color: "#ffffff",
      padding: 15,
      paddingTop: 20,
      fontFamily: "Beth Ellen, cursive",
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

    container: {
      backgroundImage: "url(" + homapageBackground + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 800,
      padding: 0,
      maxHeight: 800,
    },
    marketContainer: {
      position: "absolute",
      width: "100%",
      height: 1500,
      backgroundColor: "#F7ECE1",
      display: "flex",
      flexGrowing: 1,
    },
    filterContainer: {
      position: "absolute",
      height: 900,
      maxWidth: 300,
      backgroundColor: "#FFFFFF",
      
    },
    tint: {
      maxHeight: 1180,
      padding: 0,
      height: 1180,
      backgroundColor: "rgba(0,0,0,.6)",
    },
    paper: {
      padding: 20,
      textAlign: "center"
    },
  })
);

const theme = createTheme();

function Marketplace() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <>
      {/* Header Container */}
      <Container
        disableGutters
        maxWidth={false}
        className={`${classes.container}`}
      >
        <div className={classes.tempNav}>navbar</div>
        <h1 className={`${classes.h1_header}`}>Marketplace</h1>

        <span className={`${classes.description}`}>
          marketplace text placeholder
        </span>
      </Container>



      {/* Marketplace Container */}
      <Container
        disableGutters
        maxWidth={false}
        className={`${classes.marketContainer}`}
      >
        <h1 className={`${classes.h1_header}`}>Marketplace</h1>

        {/* Filters Container */}
        <Container maxWidth={false} className={`${classes.filterContainer}`}>
        </Container>

        {/* Marketplace grid container */}
        <Container   >
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ position: "relative", marginLeft: 30 }}>
            <Paper className={`${classes.paper}`} sx={{ height: 200, width: 150 }}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={3} sx={{ position: "relative"}}>
            <Paper className={`${classes.paper}`} sx={{ height: 200, width: 150 }}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={3} sx={{ position: "relative" }}>
            <Paper className={`${classes.paper}`} sx={{ height: 200, width: 150 }}>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
        </Container>

      </Container>
      <Container>
        <div className={`${classes.contactUs}`}>
          <Button
            size="large"
            variant="outlined"
            style={{
              maxWidth: 700,
              marginTop: 1000,
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
              marginBottom: 0,
            }}
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Marketplace;
