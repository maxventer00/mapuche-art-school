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
  CardActionArea,
  CardActions,
  autocompleteClasses,
  Grid,
  List,
  ListItem
} from "@mui/material";
import { useHistory } from "react-router";
import homapageBackground from "../../images/homeBackground.png";
import { Box } from "@mui/system";
import itemTest from "../../images/itemTest.png";
//import { Filter } from './filter';

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

// Shop Item Data
// ADD MORE TAGS TO THE ITEM

const shopData = [
  {
    id: 1,
    name: "Item 1",
    price: "10",
    description: "This is the first item",
    image: itemTest,
  },
  {
    id: 2,
    name: "Item 2",
    price: "20",
    description: "This is the second item",
    image: itemTest,
  },
  {
    id: 3,
    name: "Item 3",
    price: "30",
    description: "This is the third item",
    image: itemTest,
  },
  {
    id: 4,
    name: "Item 4",
    price: "40",
    description: "This is the fourth item",
    image: itemTest,
  },
  {
    id: 5,
    name: "Item 5",
    price: "50",
    description: "This is the first item",
    image: itemTest,
  },
  {
    id: 6,
    name: "Item 6",
    price: "60",
    description: "This is the second item",
    image: itemTest,
  },
  {
    id: 7,
    name: "Item 7",
    price: "70",
    description: "This is the third item",
    image: itemTest,
  },
  {
    id: 8,
    name: "Item 8",
    price: "80",
    description: "This is the fourth item",
    image: itemTest,
  },
]


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
        {/* <Container maxWidth={false} className={`${classes.filterContainer}`}>
       </Container> */}

        {/* Marketplace grid container */}
        <Container>
          <Grid container justifyContent="center" alignItems="center" >
            <List sx={{ columns: 4, gap: 5 }}>
              {shopData.map((item => (
                <ListItem key={item.name}>
                  <Card sx={{ maxWidth: 400, maxHeight: 225, borderRadius: 4 }}>
                    <CardActionArea sx={{ display: 'flex' }}>
                      <CardMedia
                        component="img"
                        height="150"
                        width="100"
                        image={item.image}
                        alt="No Image Available"
                      />
                      <CardContent sx={{ flexDirection: "column" }}>
                        <Grid container justifyContent="space-between">
                          <Typography gutterBottom variant="h5" component="div" color="#AC5435">
                            {item.name}
                          </Typography>

                        </Grid>
                        <Typography variant="body2" color="#AC5435">
                          {item.description}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="#AC5435" align="left">
                          Price: {item.price}
                        </Typography>
                        <CardActions sx={{ justifyContent: 'end' }} >
                          <Button size="small" color="secondary" variant="contained" sx={{ borderRadius: 25, maxHeight: 25 }} >
                            BUY
                          </Button>
                        </CardActions>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </ListItem>
              )))}
            </List>
          </Grid>
        </Container>
          
          {/* <Grid container spacing={2}>
          <Grid item xs={3} sx={{ position: "relative", marginLeft: 30 }}>
            <Paper className={`${classes.paper}`} sx={{ height: 200, width: 150 }}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={3} sx={{ position: "relative"}}>
            <Paper className={`${classes.paper}`} sx={{ height: 200, width: 150 }}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={3} sx={{ position: "relative" }}>
            <Paper className={`${classes.paper}`} sx={{ height: 200, width: 150 }}>xs=12 sm=6</Paper>
          </Grid>
        </Grid> */}

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
