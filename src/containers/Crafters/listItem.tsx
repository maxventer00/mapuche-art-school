import React, { useEffect, useState } from "react";
import { Box, Button, Container, createTheme, Grid, Paper, TextField } from "@mui/material";
import { useHistory } from "react-router";
import Footer from "../Shared/footer";
import { createStyles, makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
import app from "../../base";
import Navbar from "../Shared/Navbar";
import profilePlaceholder from "../../images/profilePlaceholder.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: "1.5rem",
      fontFamily: "ABeeZee, sans-serif",
      margin: "auto",
      marginTop: "20px",
      marginBottom: "20px",
      textAlign: "center",
      color: "#000000",
      fontWeight: "bold",
    },
    description: {
      fontSize: "1rem",
      fontFamily: "ABeeZee, sans-serif",
      margin: "auto",
      marginTop: "20px",
      marginBottom: "20px",
      textAlign: "center",
      color: "#000000",
    },
    tempNav: {
      backgroundColor: "#ffffff",
      height: 50,
    },
    container: {
      backgroundColor: "#F7ECE1",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      padding: "20px",
      maxHeight: "1200",
      display: "flex",
      flexDirection: "row",
    },
    input: {
      color: "#FFFFFF",
      fontSize: 25,
    },
    label: {
      color: "#767676",
      fontSize: 22,
    },
    input2: {
      height: 200,
      fontSize: "3em",
    },
    boxes: {
      marginBottom: "1%",
      marginTop: "150px",
      margin: "auto",
      width: "80%",
      display: "flex",
    },
    textFld: {
      width: "100%",
      height: 60,
      display: "column",
      margin: "auto",
      fontSize: 35,
    },
    pictures: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: 600,
      width: "75%",
      textAlign: "center",
      margin: "auto",

    },
    inputs: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "57%",
      width: "100%",
      textAlign: "center",
      marginLeft: "auto",
      backgroundColor: "transparent",
    },
    buttons: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "7%",
      width: "50%",
      textAlign: "center",
      margin: "auto",
      marginTop: "110px",
      backgroundColor: "transparent",
    },
  })
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#b8a088',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme();

function ListItem() {
  const classes = useStyles();
  const history = useHistory();

  const [itemTitle, setItemTitle] = useState("");
  const [price, setPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemStock, setItemStock] = useState("");
  const [listingUser, setListingUser] = useState<any>();
  const [listButton, setListButton] = useState(false);
  const [progresspercent, setProgresspercent] = useState(0);

  const userCheck = async () => {
    app.auth().onAuthStateChanged(async function (user) {
      if (user) {
        // Get user type
        const firestore = app.firestore();
        await firestore
          .collection("userData")
          .doc(user.uid)
          .get()
          .then((snapshot) => setListingUser(snapshot.data()));
      } else {
        history.push("/marketplace");
      }
    });
  };

  useEffect(() => {
    userCheck();
  }, []);

  useEffect(() => {
    if (listingUser) {
      if (listingUser.crafterApproved === false) {
        alert(
          "Your crafter account has not been approved! This action is restricted to approved crafters!"
        );
        history.push("/marketplace");
      }
    }
  }, [listingUser]);

  {
    /* Make sure they are a crafter */
  }
  const ListItemToFireBase = async () => {
    try {
      const firestore = app.firestore();
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const res = await firestore.collection("productData").add({
          itemTitle: itemTitle,
          price: price,
          itemDescription: itemDescription,
          itemStock: itemStock,
          photoURL: photoURLs,
          listingUser: user.uid,
        });
        console.log(res.id);
        firestore
          .collection("userData")
          .doc(user.uid)
          .update({
            itemsListed: listingUser.itemsListed + 1,
            itemsListedId: listingUser.itemsListedId + "," + res.id,
          });
      } else {
        // No user is signed in.
      }
    } catch (error) {
      alert(error);
    }
  };

  const [photoURLs, setPhotoURLs] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const imageTarget = images.length - 1;

  const uploadPhoto = async () => {
    if (images.length === 0) return;

    // Boom now we are loading
    console.log("Images to upload...");
    console.log(images);
    const firestore = app.firestore();
    const auth = getAuth();
    const user = auth.currentUser;

    const storage = getStorage();
    const tempArray: any = [];

    if (user != null) {
      images.map((image: File) => {
        const imageRef = ref(storage, "images/" + user.uid + "/" + image.name);

        uploadBytesResumable(imageRef, image)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              console.log("Uploaded " + image.name);
              tempArray.push(url);
              if (tempArray.length === images.length) {
                setListButton(true);
              }
            });
          })
          .catch((error) => {
            console.error("Upload failed", error);
          });
      });
    } else {
      alert("You must be logged in to upload photos");
    }

    setPhotoURLs(tempArray);
    // Now we have finished loading!
  };

  // OLD ATTEMPT
  // const storage = getStorage();
  // const imageRef = ref(storage, "images/" + image.name);

  // uploadBytesResumable(imageRef, image)
  //     .then((snapshot) => {
  //         getDownloadURL(snapshot.ref).then((url) => {
  //             setPhotoURL(url);
  //         });
  //     })
  //     .catch((error) => {
  //         console.error("Upload failed", error);
  //     });

  useEffect(() => {
    uploadPhoto();
  }, [images]);

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        className={`${classes.container}`}
      >
        <Navbar />

        <Box sx={{ flexGrow: 1 }} className={`${classes.boxes}`}>
          <Grid container spacing={5}>
            <Grid item xs={6} md={7}>
              <Item>

                <Paper square={true} elevation={24} className={`${classes.pictures}`}>
                  <img
                    src={photoURLs[0]}
                    style={{
                      maxHeight: 600,
                      maxWidth: "50%",
                      marginTop: "10%",
                    }}
                  />
                </Paper>



              </Item>
            </Grid>
            <Grid item xs={6} md={5}>
              <Item className={`${classes.inputs}`}>
                <TextField
                  id="ItemTitle"
                  className={classes.textFld}
                  label="Enter Item's Title"
                  value={itemTitle}
                  variant="filled"
                  InputProps={{
                    classes: {
                      input: classes.input,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                    },
                  }}
                  onChange={(e) => setItemTitle(e.target.value)}
                />

                <TextField
                  id="Price"
                  className={classes.textFld}
                  label="Enter a price"
                  variant="filled"
                  value={price}
                  InputProps={{
                    classes: {
                      input: classes.label,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                    },
                  }}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <TextField
                  id="Stock"
                  className={classes.textFld}
                  label="Enter amount of Stock"
                  variant="filled"
                  value={itemStock}
                  InputProps={{
                    classes: {
                      input: classes.label,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                    },
                  }}
                  onChange={(e) => setItemStock(e.target.value)}
                />
                <TextField
                  id="ItemDescription"
                  className={classes.textFld}
                  multiline
                  maxRows={6}
                  rows={6}
                  label="Add an Item Description"
                  value={itemDescription}
                  variant="filled"
                  InputProps={{
                    classes: {
                      input: classes.input2,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                    },
                  }}
                  onChange={(e) => setItemDescription(e.target.value)}
                />

              </Item>
              <Item className={`${classes.buttons}`}>
                <Button
                  size="large"
                  variant="contained"
                  component="label"
                  style={{
                    marginRight: "20px",
                    maxWidth: "50%",
                  }}
                >
                  #Browse File
                  <input
                    type="file"
                    multiple
                    hidden
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => {
                      if (e.target.files !== null) {
                        if (e.target.files.length > 0) {
                          const tempArray = [];
                          for (var i = 0; i < e.target.files.length; i++) {
                            tempArray.push(e.target.files[i]);
                            console.log("Added image " + e.target.files[i].name);
                          }
                          setImages(tempArray);
                        }
                      }
                    }}
                  />
                </Button>

                {listButton ? (
                  <Button
                    size="large"
                    variant="contained"
                    style={{
                      
                      maxWidth: "50%",
                      
                    }}
                    onClick={() => ListItemToFireBase()}
                  >
                    List Item
                  </Button>
                ) : null}

              </Item>
            </Grid>



          </Grid>
        </Box>

      </Container>
    </>
  );
}

export default ListItem;
