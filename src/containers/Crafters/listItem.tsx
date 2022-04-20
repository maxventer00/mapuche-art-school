import React, { useEffect, useState } from "react";
import {
    Button,
    Container,
    createTheme,
    TextField,

} from "@mui/material";
import { useHistory } from "react-router";
import Footer from "../Shared/footer";
import { createStyles, makeStyles } from "@mui/styles";
import { getDownloadURL, ref, uploadBytesResumable, getStorage } from "firebase/storage";
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

        footerContainer:
        {
            backgroundColor: "#F7ECE1",
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
        },
        textFld: {
            width: 500,
            height: 60,
            display: 'column',
            //marginRight: 'auto',
            marginBottom: 30,
            fontSize: 35,
        },
        input: {
            color: '#FFFFFF',
            fontSize: 25,
        },
        label: {
            color: '#767676',
            fontSize: 22,
        },
        input2: {
            height: 200,
            fontSize: "3em"
        },
        formContainer: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "auto",
            //marginTop: "60px",
        },
        photoContainer: {
            maxWidth: "400px",
            maxHeight: "600px",
            margin: "auto",
            marginLeft: "10%",
            borderWidth: "2px",
            display: 'flex',
            flex: 1,
            marginTop: "60px",

        },
        fieldContainer: {

            display: 'column',
            marginLeft: 'auto',
            paddingBottom: 80,
            alignItems: 'center',
            paddingTop: 80,
            flex: 1,

        },
        descriptionContainer: {

            display: 'column',
            marginLeft: 'auto',
            paddingBottom: 80,
            alignItems: 'center',
            paddingTop: 80,
            flex: 1,

        },
        profileConatiner: {
            maxWidth: 400,
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 70,
        },

        buttonsContainer: {
            display: "flex",
            flexDirection: "row",
            width: "50%",
            margin: "auto",


        },
        photoButtons: {
            display: "flex",
            flexDirection: "row",
            width: "50%",
            margin: "auto",
            paddingLeft: "12%",
            paddingTop: "5%",

        },


    }),
);

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
                await firestore.collection("userData").doc(user.uid).get().then((snapshot) => setListingUser(snapshot.data()));
            } else {

            }
        });
    };

    useEffect(() => {
        userCheck();
    }, []);


    {/* Make sure they are a crafter */ }
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
                firestore.collection("userData").doc(user.uid).update({
                    itemsListed: listingUser.itemsListed + 1,
                    itemsListedId: listingUser.itemsListedId + "," + res.id,
                });
            } else {
                // No user is signed in.
            }
        }
        catch (error) {
            alert(error);
        }
    }

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
        const tempArray: any = []

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
                    })
            });
        }
        else {
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
            <Navbar />
            <Container
                disableGutters
                maxWidth={false}
                className={`${classes.container}`}
            >



                <div className={classes.formContainer}>

                    {photoURLs ? (
                        <div className={classes.photoContainer}>
                            <img
                                src={photoURLs[0]}
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                }}

                            />
                        </div>
                    ) : (
                        <div className={classes.photoContainer}>
                            <img
                                src={profilePlaceholder}
                            />
                        </div>
                    )}
                    <div className={classes.fieldContainer}>
                        <TextField
                            id="ItemTitle"
                            className={classes.textFld}
                            label="Enter Item's Title"
                            value={itemTitle}
                            variant="filled"
                            InputProps={{
                                classes: {
                                    input: classes.input,
                                }
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



                    </div>
                    <div className={classes.descriptionContainer}>
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
                                }
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                },
                            }}
                            onChange={(e) => setItemDescription(e.target.value)}
                        />


                    </div>
                </div>

                <Container justify-content="center" align-items="center">
                    <div className={classes.photoButtons}>
                        <Button

                            variant="contained"
                            component="label"
                            style={{
                                marginRight: "20px",
                                maxWidth: "60%",
                                paddingLeft: "20px",

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
                                            const tempArray = []
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
                                    marginRight: "20px",
                                    maxWidth: "60%",

                                }}
                                onClick={() => ListItemToFireBase()}
                            >
                                List Item
                            </Button>
                        ) : null}

                    </div>
                </Container>



                <Footer />
            </Container>






        </>
    );

}

export default ListItem;