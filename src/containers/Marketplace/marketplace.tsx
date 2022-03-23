import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
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
  ListItem,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useHistory } from "react-router";
import homapageBackground from "../../images/homeBackground.png";
import { Box } from "@mui/system";
import itemTest from "../../images/itemTest.png";
import Footer from "../Shared/footer";

import Navbar from "../Shared/Navbar";
import app from "../../base";
import { doc, getDocs } from "firebase/firestore";
//import { getUserType } from "./FirebaseQuearys/MarketpalceQuearys";

const useStyles = makeStyles((theme) =>
  createStyles({
    tempNav: {
      backgroundColor: "#ffffff",
      height: 50,
    },
    h1_header: {
      fontSize: 64,
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
      justifyItems: "center",
    },

    container: {
      backgroundImage: "url(" + homapageBackground + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      padding: 0,
      maxHeight: 1800,
    },
    marketContainer: {
      position: "absolute",
      width: "100%",
      backgroundColor: "#F7ECE1",
      display: "flex",
      flexGrowing: 1,
      paddingBottom: "100px",

    },
    searchOptions: {
      width: "100%",
      height: 50,
      fontFamily: "ABeeZee, sans-serif",
      textTransform: "none",
      marginTop: 30,
      justifyItems: "center",
    },
    listButton: {
      float: "right",
      marginRight: "2%",
      marginTop: "0px",
      marginBottom: "50px",
    },
    listingCards:
    {
      minHeight: 380,
      minWidth: 250,
      margin: "auto",
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
  })
);



const theme = createTheme();

function Marketplace() {
  const classes = useStyles();

  const history = useHistory();

  const [shopData, setShopData] = useState<any>([]);

  const getData = async () => {
    const firestore = app.firestore();

    const collectionRef = firestore.collection("productData");
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      setShopData((arr: any) => [...arr, doc]);

    });
  };

  useEffect(() => {
    getData();
  }, []);

  // list an item button

  const [loggedIn, setLoggedIn] = useState(true);
  const [userInfo, setUserInfo] = useState<any>();
  const [isCrafter, setIsCrafter] = useState(false);

  const userCheck = async () => {
    app.auth().onAuthStateChanged(async function (user) {
      if (user) {
        // User is signed in.
        setLoggedIn(true);

        // Get user type
        const firestore = app.firestore();

        // getUserType(firestore,setUserInfo);

        await firestore.collection("userData").doc(user.uid).get().then((snapshot) => setUserInfo(snapshot.data()));


      } else {
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    userCheck();
  }, []);

  // Use effect since useState is asynchronous
  // Here you can check userInfo.type and set isCrafter to true or whatever you wanted to do
  useEffect(() => {
    if (userInfo) {
      if (userInfo.userType === "Crafter") {
        setIsCrafter(true);
      } else {
        setIsCrafter(false);
      }
    }
  }, [userInfo]);

  return (
    <>
      {/* Header Container */}
      <Container
        disableGutters
        maxWidth={false}
        className={`${classes.container}`}
      >
        <Navbar />
        <h1 className={`${classes.h1_header}`}>Marketplace</h1>
      </Container>

      {/* Marketplace Container */}

      {/* ADD SEACH OPTIONS HERE SOMEHOW */}

      <Container
        disableGutters
        maxWidth={false}
        className={`${classes.marketContainer}`}
      >
        <h1 className={`${classes.h1_header}`}>Marketplace</h1>

        {/* Marketplace grid container */}

        {isCrafter ? (
          <div className={classes.listButton}>
            <Button
              style={{ maxWidth: "155px" }}
              className={classes.outlined}
              variant="outlined"
              onClick={() => history.push("/marketplace/createListingPage")}
            >
              List an Item
            </Button>
          </div>
        ) : null}
        <Grid container justifyContent="center" alignItems="center">
          <List sx={{ columns: 4, gap: 3 }}>
            {shopData.map(
              (doc: any, item: {
                itemTitle: string | undefined;
                itemDescription: string | undefined;
                photoURL: string | undefined;
                price: number | undefined;
              }) => {
                let id = doc.id;
                item = doc.data();

                console.log("item : " + item.itemTitle);
                console.log("id : " + id);
                return (
                  <>
                    <ListItem key={id}
                    >
                      <Card
                        className={classes.listingCards}
                        sx={{ borderRadius: 5 }}
                        onClick={() =>
                          history.push({
                            pathname: `/marketplace/${id}`,
                            state: { itemUid: id },
                          })
                        }
                      >
                        <CardActionArea
                          sx={{ display: "column", border: `5px solid white` }}
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            width="90"
                            sx={{ borderRadius: 5 }}
                            image={item.photoURL}
                            alt="No Image Available"
                          />
                          <CardContent sx={{ flexDirection: "row" }}>
                            <Grid container justifyContent="space-between">
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                color="#AC5435"
                              >
                                {item.itemTitle}
                              </Typography>
                            </Grid>
                            <Typography variant="body2" color="#AC5435">
                              {item.itemDescription}
                            </Typography>
                            <br />
                            <Typography
                              variant="body2"
                              color="#AC5435"
                              align="left"
                            >
                              Price: ${item.price}
                            </Typography>
                            <CardActions sx={{ justifyContent: "end" }}>
                              <Button
                                size="small"
                                color="secondary"
                                variant="contained"
                                onClick={() =>
                                  history.push({
                                    pathname: `/marketplace/${id}`,
                                    state: { itemId: id },
                                  })
                                }
                                sx={{ borderRadius: 25, maxHeight: 25 }}
                              >
                                BUY
                              </Button>
                            </CardActions>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </ListItem>
                  </>
                );
              }
            )}




          </List>
        </Grid>






        <Footer />
      </Container>
    </>
  );
}

export default Marketplace;
