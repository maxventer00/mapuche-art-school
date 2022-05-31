import { createStyles, makeStyles } from "@mui/styles";
import {

  useEffect,
  useState,
} from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
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
  TextField,
  IconButton,
} from "@mui/material";
import app from "../../base";
import { getDocs } from "firebase/firestore";
import Footer from "../Shared/footer";
import EmailIcon from '@mui/icons-material/Email';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "#F7ECE1",
      display: "flex",
      flexGrowing: 1,
      paddingBottom: "100px",
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
    signoutButtonContainer: {
      float: "right",
      marginRight: "3%",
      marginTop: "3%",
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
    itemEditContainer: {
      fontSize: "25px",
      textAlign: "left",
      marginLeft: "3%",
      marginRight: "3%",
      backgroundColor: "white",
      marginTop: "25px",
      paddingTop: "15px",
      paddingBottom: "15px",
      paddingLeft: "35px",
      paddingRight: "15px",
      borderRadius: "5px",

    },
    itemEditTitle: {
      fontSize: "28px",
      fontFamily: "Lato",
      paddingBottom: 0,
      marginBottom: 0,
    },
    itemEditPrice: {
      fontSize: "28px",
      fontFamily: "Lato",
      paddingBottom: 0,
      marginBottom: 0,
    },
    itemEditStock: {
      fontSize: "28px",
      fontFamily: "Lato",
      paddingBottom: 0,
      marginBottom: 0,
    },
    itemEditDescription: {
      marginTop: "15px",
      fontSize: "22px",
      fontFamily: "Lato",
      dispay: "block",
    },
  })
);

const theme = createTheme();

function ItemPage() {
  const classes = useStyles();
  const history = useHistory();

  const [itemData, setItemData] = useState<any>([]);
  const [crafterData, setCrafterData] = useState<any>([]);
  const location = useLocation<any>();
  const [userID, setUserID] = useState<any>();
  let itemId = "";

  if (location.state) {
    itemId = location.state.itemUid;
  }

  const [loggedIn, setLoggedIn] = useState(true);
  const [userInfo, setUserInfo] = useState<any>();
  const [isOwner, setIsOwner] = useState(false);
  const [allowItemEdit, setAllowItemEdit] = useState(false);
  const [openItemEdit, setOpenItemEdit] = useState(false);

  const [itemTitle, setItemTitle] = useState(itemData.itemTitle);
  const [price, setPrice] = useState(itemData.itemPrice);
  const [itemDescription, setItemDescription] = useState(itemData.itemDescription);
  const [itemStock, setItemStock] = useState(itemData.itemStock);
  const [listerEmail, setListerEmail] = useState(itemData.listerEmail);

  const crafterID = location.state.crafterID;


  const userCheck = () => {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setUserID(user.uid);
        setListerEmail(user.email);
        console.log("user email: " + user.email);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };



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



  const updateListing = () => {
    const firestore = app.firestore();
    const itemRef = firestore.collection("productData").doc(itemId);

    itemRef.update({
      itemTitle: itemTitle,
      price: price,
      itemDescription: itemDescription,
      itemStock: itemStock,

    });
  };





  useEffect(() => {
    window.scrollTo(0, 0);
    userCheck();
    getItemData();
    console.log("user email: " + listerEmail);

  }, []);

  useEffect(() => {
    if (itemData) {
      if (itemData.listingUser === userID) {
        setIsOwner(true);
        setAllowItemEdit(true);

      } else {
        setIsOwner(false);
        setAllowItemEdit(false);

      }
    }
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
                      <br />
                      <Typography variant="body2" color="#AC5435" align="left">
                        listed by: {itemData.listingUserName}
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
            <div style={{ paddingBottom: "35px" }}>
              {allowItemEdit ? (
                <div className={classes.signoutButtonContainer}>
                  <Button
                    style={{ maxWidth: "255px" }}
                    className={classes.outlined}
                    variant="outlined"
                    onClick={() => setOpenItemEdit(!openItemEdit)}
                  >
                    Manage Listing
                  </Button>
                </div>
              ) : <div className={classes.signoutButtonContainer}>
                <Button
                  style={{ maxWidth: "255px" }}
                  className={classes.outlined}
                  variant="outlined"
                  onClick={() => window.location.href = 'mailto:' + itemData.listingUserEmail + '?subject=I want to buy your item, ' + itemData.itemTitle + '&body=Hi, I would like to buy your item, ' + itemData.itemTitle}


                >
                  <EmailIcon />
                  Email Seller
                </Button>

              </div>}


            </div>
            {openItemEdit ? (
              <div className={classes.itemEditContainer}>
                <p className={classes.itemEditDescription}>Edit Your Listing
                  <Button
                    style={{
                      maxWidth: "255px",


                      float: "right",

                    }}
                    className={classes.contained}
                    variant="contained"
                    onClick={() => updateListing()}
                  >
                    Update Listing
                  </Button></p>


                <TextField
                  className={classes.itemEditTitle}
                  variant="outlined"
                  placeholder="Title"
                  required
                  size="medium"
                  margin="dense"
                  onChange={(e) => setItemTitle(e.target.value)}
                />

                <TextField
                  className={classes.itemEditPrice}
                  variant="outlined"
                  placeholder="Price"
                  required
                  size="medium"
                  margin="dense"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                  className={classes.itemEditStock}
                  variant="outlined"
                  placeholder="Items In Stock"
                  required
                  size="medium"
                  margin="dense"
                  onChange={(e) => setItemStock(e.target.value)}
                />



                <TextField
                  className={classes.itemEditDescription}
                  variant="outlined"
                  placeholder="Description"
                  required
                  multiline
                  minRows={5}
                  size="medium"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setItemDescription(e.target.value)}
                />


              </div>
            ) : null}

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

        </Container>

      </Container>
    </>
  );
}

export default ItemPage;
