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
import searchOption from "./searchOptions";
import Navbar from "../Shared/Navbar";
import app from "../../base";
import { getDocs } from "firebase/firestore";

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
      height: 800,
      padding: 0,
      maxHeight: 800,
    },
    marketContainer: {
      position: "absolute",
      width: "100%",
      //height: 1500,
      backgroundColor: "#F7ECE1",
      display: "flex",
      flexGrowing: 1,
    },
    footerContainer: {
      backgroundSize: "cover",
      height: 100,
      marginTop: 300,
      backgroundColor: "#F7ECE1",
      display: "flex",
      flexGrowing: 1,
    },
    searchOptions: {
      width: "100%",
      height: 50,
      fontFamily: "ABeeZee, sans-serif",
      textTransform: "none",
      marginTop: 30,
      justifyItems: "center",
    },
    signoutButtonContainer: {
      float: "right",
      marginRight: "2%",
      marginTop: "0px",
      marginBottom: "50px",
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

// Shop Item Data
// ADD MORE TAGS TO THE ITEM

const shopData1 = [
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
];

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
      setShopData((arr: any) => [...arr, doc.data()]);
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

        {isCrafter ? (
          <>
            <h1 style={{ color: "white" }}>This user is a crafter!</h1>
          </>
        ) : (
          <h1 style={{ color: "white" }}>This user is NOT a crafter!</h1>
        )}
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
        <Container>
          {loggedIn ? (
            <div className={classes.signoutButtonContainer}>
              <Button
                style={{ maxWidth: "155px" }}
                className={classes.outlined}
                variant="outlined"
                onClick={() => history.push("/marketplace/createlistingpage")}
              >
                List an Item
              </Button>
            </div>
          ) : null}
          <Grid container justifyContent="center" alignItems="center">
            <List sx={{ columns: 4, gap: 8 }}>
              {shopData.map(
                (item: {
                  itemTitle: string | undefined;
                  itemDescription: string | undefined;
                  photoURL: string | undefined;
                  //itemStock: number | undefined;
                  price: number | undefined;
                }) => (
                  <ListItem key={item.itemTitle}>
                    <Card
                      sx={{ maxWidth: 400, maxHeight: 400, borderRadius: 5 }}
                    >
                      <CardActionArea
                        sx={{ display: "column", border: `10px solid white` }}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          width="100"
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
                            Price: {item.price}
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
                )
              )}
            </List>
          </Grid>
        </Container>
        {/* Footer Container */}
        <Container className={`${classes.footerContainer}`}>
          <Footer />
        </Container>
      </Container>
    </>
  );
}

export default Marketplace;
