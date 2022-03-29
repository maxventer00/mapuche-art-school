import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Container,
  createTheme,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { useHistory } from "react-router";
import marketplaceBackground from "../../images/marketplaceBackground.png";
import Footer from "../Shared/footer";
import Navbar from "../Shared/Navbar";
import app from "../../base";
import { doc, getDocs } from "firebase/firestore";
import { Parallax } from "react-parallax";

//import { getUserType } from "./FirebaseQuearys/MarketpalceQuearys";

const useStyles = makeStyles((theme) =>
  createStyles({
    h1_header: {
      fontSize: 50,
      fontBold: true,
      color: "#e7c6a5",
      padding: 15,
      paddingTop: 30,
      fontFamily: "Prata",
      marginTop: 0,
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
    container: {

      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
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
      marginRight: "8%",
      marginTop: "25px",
      marginBottom: "0px",
    },
    listingCards: {
      minHeight: 380,
      minWidth: 250,
      maxWidth: 250,
      margin: "auto",
    },
    outlined: {
      backgroundColor: "#f2dfcd",
      //color: "white",
      boxShadow: "none",
      borderWidth: "4px",
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
        await firestore
          .collection("userData")
          .doc(user.uid)
          .get()
          .then((snapshot) => setUserInfo(snapshot.data()));
      } else {
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    userCheck();
  }, []);

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


      <Navbar />

      <Parallax bgImage={marketplaceBackground} strength={600} >
        <div style={{ height: 1000 }}>
        </div>
      </Parallax>

      {/* Marketplace Container */}

      {/* ADD SEACH OPTIONS HERE SOMEHOW */}

      <Container
        disableGutters
        maxWidth={false}
        className={`${classes.marketContainer}`}
      >
        <div className={classes.h1_header}>
          <Typography variant="h1">Marketplace</Typography>
        </div>
        {isCrafter ? (
          <div className={classes.listButton}>
            <Button
              style={{ maxWidth: "155px" }}
              className={classes.outlined}
              variant="outlined"
              onClick={() => {
                history.push("/listitem");
              }}
            >
              List an Item
            </Button>
          </div>
        ) : null}
        <Grid container justifyContent="center" alignItems="center">
          <List sx={{ columns: 3, width: 1200, margin: "auto" }}>
            {shopData.map(
              (
                doc: any,
                item: {
                  itemTitle: string | undefined;
                  itemDescription: string | undefined;
                  photoURL: string | undefined;
                  price: number | undefined;
                }
              ) => {
                let id = doc.id;
                item = doc.data();

                console.log("item : " + item.itemTitle);
                console.log("id : " + id);
                return (
                  <>
                    <ListItem key={id}>
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
                                sx={{ borderRadius: 5, maxHeight: 25 }}
                              >
                                VIEW
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
