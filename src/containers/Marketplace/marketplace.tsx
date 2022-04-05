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
import marketplaceBackground from "../../images/marketplaceBackground.jpg";
import Footer from "../Shared/footer";
import Navbar from "../Shared/Navbar";
import app from "../../base";
import { doc, getDocs } from "firebase/firestore";
import { Parallax } from "react-parallax";
import { width } from "@mui/system";
import Aos from "aos";
import "aos/dist/aos.css";
import placeholderImage from "../../images/profilePlaceholder.png";
//import { getUserType } from "./FirebaseQuearys/MarketpalceQuearys";

const useStyles = makeStyles((theme) =>
  createStyles({
    h1_header: {
      fontSize: 48,
      color: "#ffffff",
      padding: 15,
      paddingTop: 150,
      fontFamily: "Prata",
      marginTop: 0,
    },
    subtitle: {
      fontSize: 35,
      color: "#AC5435",
      paddingTop: 80,
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
      paddingBottom: 100,
      overflow: "hidden",
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      fontFamily: "ABeeZee, sans-serif",
    },
    description2: {
      fontSize: 18,
      color: "#AC5435",
      fontFamily: "Lato",
      fontWeight: 500,
      marginBottom: 65,
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
  {
    /* */
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, []);

  const classes = useStyles();

  const history = useHistory();

  const [shopData, setShopData] = useState<any>([]);

  const getData = async () => {
    const firestore = app.firestore();

    const collectionRef = firestore.collection("productData");
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      if (shopData.includes(doc.data()) === false) {
        setShopData((arr: any) => [...arr, doc]);
      }
    });
  };

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
    getData();
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
      <Navbar />

      <Parallax bgImage={marketplaceBackground} strength={600}>
        <h1 className={classes.h1_header}>Marketplace</h1>

        <span className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </Parallax>

      {/* ADD SEACH OPTIONS HERE SOMEHOW */}

      <Container
        //disableGutters
        maxWidth={false}
        className={`${classes.marketContainer}`}
      >
        <h1 className={classes.subtitle}>Marketplace</h1>
        <h2 className={classes.description2}>
          Click on a listing to view more about it and purchase!
        </h2>
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
          <List
            data-aos="fade-up"
            sx={{
              columns: 3,
              width: 1000,
              margin: "auto",
              marginBottom: "60px",
            }}
          >
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
                    <ListItem
                      key={id}
                      style={{
                        marginBottom: "60px",
                      }}
                    >
                      <Card
                        className={classes.listingCards}
                        sx={{ borderRadius: 2 }}
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
                          {item.photoURL ? (
                            <CardMedia
                              component="img"
                              height="200"
                              width="90"
                              sx={{ borderRadius: 2 }}
                              image={item.photoURL}
                              alt="No Image Available"
                            />
                          ) : (
                            <CardMedia
                              component="img"
                              height="200"
                              width="90"
                              sx={{
                                borderRadius: 2,
                                minHeight: 200,
                                minWidth: 90,
                              }}
                              image={placeholderImage}
                              alt="No Image Available"
                            />
                          )}

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
