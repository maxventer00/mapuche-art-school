import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState, useMemo } from "react";
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
  Input,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useHistory } from "react-router";
import marketplaceBackground from "../../images/marketplaceBackground.jpg";
import Footer from "../Shared/footer";
import Navbar from "../Shared/Navbar";
import MarketplaceBar from "../Shared/MarketplaceBar";
import app from "../../base";
import { doc, getDocs } from "firebase/firestore";
import { Parallax } from "react-parallax";
import { width } from "@mui/system";
import Aos from "aos";
import "aos/dist/aos.css";
import placeholderImage from "../../images/profilePlaceholder.png";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import LoadingAnimation from "../LoadingAnimation";
import { Trans, useTranslation } from "react-i18next";
//import { getUserType } from "./FirebaseQuearys/MarketpalceQuearys";

const useStyles = makeStyles((theme) =>
  createStyles({
    contained: {
      color: "white",
      boxShadow: "none",
      borderWidth: "5px",
      borderColor: "white",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "25px",
      height: "55px",
      marginTop: "20px",
      "&:hover": {
        backgroundColor: "#8A7866",
        boxShadow: "none",
      },
    },
    h1_header: {
      fontSize: "5rem",
      color: "#ffffff",
      padding: 15,
      paddingTop: 120,
      fontFamily: "Prata",
      "text-shadow": "0 0 30px rgba(0,0,0,.99), 0 0 10px rgba(0,0,0,.99)",
      textShadowColor: "0 0 5px rgba(255,255,255,.99)",
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
      "text-shadow": "0px 2px 5px rgba(0,0,0,0.92)",
      textShadowColor: "0 0 5px rgba(255,255,255,.5)",
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
    filterContainer: {
      backgroundColor: "white",
      width: "300px",
      minHeight: "700px",
      borderRadius: "3px",
      float: "left",
      marginLeft: "5%",
      display: "flex",
      flexShrink: "3",
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
      backgroundColor: "#AC5435",
      //color: "white",
      boxShadow: "none",
      borderWidth: "4px",
      borderColor: "white",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "45px",
      lineHeight: "30px",
      width: "500px",
      marginTop: "20px",
      "&:hover": {
        backgroundColor: "#8A7866",
      },
    },
    searchBar: {
      marginBottom: "65px",
      backgroundColor: "white",
      marginLeft: "8%",
      marginRight: "8%",
    },
    silversmithing: {
      display: "none",
    },
    textiles: {
      display: "none",
    },
    basketry: {
      display: "none",
    },
    pottery: {
      display: "none",
    },
    woodcarving: {
      display: "none",
    },
  })
);

const theme = createTheme();

function Marketplace() {
  const { t, i18n } = useTranslation();
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
  const [loggedIn, setLoggedIn] = useState(true);
  const [userInfo, setUserInfo] = useState<any>();
  const [isCrafter, setIsCrafter] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResponse, setSearchResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const firestore = app.firestore();
  const collectionRef = firestore.collection("productData");

  const getData = async () => {
    setIsLoading(true);
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      if (shopData.includes(doc.data()) === false) {
        setShopData((arr: any) => [...arr, doc]);
      }
    });

    setIsLoading(false);
  };

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

  const searchItem = async () => {
    setShopData([]);
    setIsLoading(true);

    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      let productTitle = doc.data().itemTitle;

      if (productTitle.includes(searchKeyword)) {
        if (shopData.includes(doc.data()) === false) {
          setShopData((arr: any) => [...arr, doc]);
        }
      }

      if (shopData.length === 0) {
        setSearchResponse(
          "Sorry no results for this searh keyword were found!"
        );
      }
    });

    setIsLoading(false);
  };

  const memoMap = useMemo(
    () =>
      shopData.map(
        (
          doc: any,
          item: {
            itemTitle: string | undefined;
            itemDescription: string | undefined;
            photoURL: string | undefined;
            price: number | undefined;
            itemID: string | undefined;
          }
        ) => {
          item = doc.data();
          let id = item.itemID;

          return (
            <>
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
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
                      state: { itemID: id },
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

                      <Typography variant="body2" color="#AC5435" align="left">
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
                              state: { itemID: id },
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
              </Grid>
            </>
          );
        }
      ),
    [shopData]
  );

  useEffect(() => {
    if (searchKeyword.length === 0) {
      setShopData([]);
      getData();
    }
  }, [searchKeyword]);

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
      <Navbar />

      <Parallax bgImage={marketplaceBackground} strength={600}>
        <h1 className={classes.h1_header}>Marketplace</h1>
        <MarketplaceBar />

      </Parallax>

      <Container
        //disableGutters
        maxWidth={false}
        className={`${classes.marketContainer}`}
      >
        <h1 className={classes.subtitle}>Marketplace</h1>
        <h2 className={classes.description2}>
          Click on a listing to view more about it and purchase!
        </h2>

        <div className={classes.searchBar}>
          {isCrafter ? (
            <Button
              style={{ maxWidth: "255px", float: "left", height: "55px" }}
              className={classes.outlined}
              variant="outlined"
              onClick={() => {
                history.push("/listitem");
              }}
            >
              List an Item
            </Button>
          ) : null}

          <Button
            className={classes.contained}
            color="secondary"
            variant="contained"
            style={{ float: "right" }}
            onClick={() => searchItem()}
          >
            Search!
          </Button>

          <TextField
            style={{ width: "30%", float: "right", marginBottom: "25px" }}
            placeholder="Search Items"
            onChange={(e) => setSearchKeyword(e.target.value)}
            value={searchKeyword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearchKeyword("")} edge="end">
                    {searchKeyword.length > 0 ? <ClearIcon /> : null}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        {isLoading ? (
          <LoadingAnimation zIndex={1} paddingBottom={40} />
        ) : (
          <Grid
            style={{ marginTop: "40px" }}
            container
            spacing={4}
            columns={{ xs: 4, sm: 10, md: 13, lg: 15, xl: 18 }}
            justifyContent="center"
            alignItems="center"
            direction="row"
            flexShrink={10}
          >
            {memoMap}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default Marketplace;
