import { createStyles, makeStyles } from "@mui/styles";
import {

  useEffect,
  useState,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import "../../containers/Home/fonts.css";
import Navbar from "../Shared/Navbar";
import {
  CardActionArea,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import app from "../../base";
import { getDocs } from "firebase/firestore";
import Footer from "../Shared/footer";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: "#F7ECE1",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      padding: "20px",
      maxHeight: 1800,
      display: "flex",
      flexDirection: "row",
      flexGrowing: 1,
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      marginTop: "60px",
      flexGrowing: 1,
    },

    information: {
      backgroundColor: "#F7ECE1",
      height: "70%",
      width: "50%",
      float: "right",
    },
    photo: {
      backgroundColor: "#F7ECE1",
      height: "50%",
      width: "50%",
      float: "left",
    },
    card: {
      width: "100%",
      height: "100%",
    },
    media: {
      maxHeight: 550,
      borderRadius: 15,
    },
  })
);

const theme = createTheme();

function ItemPage() {
  const classes = useStyles();
  const history = useHistory();

  const [itemData, setItemData] = useState<any>([]);
  const location = useLocation<any>();
  let itemId = "";

  if (location.state) {
    itemId = location.state.itemUid;
  }

  const getItemData = () => {
    const firestore = app.firestore();

    if (itemId) {
      const itemInfo = firestore
        .collection("productData")
        .doc(itemId)
        .get()
        .then((snapshot) => setItemData(snapshot.data()));
    } else {
      console.log("Error getting itemID");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getItemData();
  }, []);

  useEffect(() => {
    console.log("Item: " + itemData);
  }, [itemData]);

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        className={`${classes.container}`}
      >
        <Navbar />

        <Container className={`${classes.content}`}>
          <div className={`${classes.information}`}>
            <List>
              <ListItem key={itemData.itemTitle}>
                <Card className={classes.card} sx={{ borderRadius: 5 }}>
                  <CardActionArea
                    sx={{ display: "column", border: `5px solid white` }}
                  >
                    <CardContent sx={{ flexDirection: "row" }}>
                      <Grid container justifyContent="space-between">
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          color="#AC5435"
                        >
                          {itemData.itemTitle}
                        </Typography>
                      </Grid>
                      <Typography variant="body2" color="#AC5435">
                        {itemData.itemDescription}
                      </Typography>
                      <br />
                      <Typography variant="body2" color="#AC5435" align="left">
                        Price: ${itemData.price}
                      </Typography>
                      <CardActions sx={{ justifyContent: "end" }}>
                        <Button
                          size="small"
                          color="secondary"
                          variant="contained"
                          sx={{ borderRadius: 25, maxHeight: 25 }}
                        >
                          BUY
                        </Button>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ListItem>
            </List>
          </div>

          <div className={`${classes.photo}`}>
            <List sx={{ columns: 1, gap: 3 }}>
              <ListItem key={itemData.itemTitle}>
                <Card className={classes.card} sx={{ borderRadius: 5 }}>
                  <CardActionArea
                    sx={{ display: "column", border: `5px solid white` }}
                  >
                    <CardMedia
                      component="img"
                      width="100%"
                      className={classes.media}
                      image={itemData.photoURL}
                      alt="No Image Available"
                    />
                  </CardActionArea>
                </Card>
              </ListItem>
            </List>
          </div>
          <Footer />
        </Container>

        
      </Container>
    </>
  );
}

export default ItemPage;
