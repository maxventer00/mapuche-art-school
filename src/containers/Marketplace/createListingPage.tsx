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
import { fileURLToPath } from "url";
import { getDownloadURL, ref, uploadBytesResumable, getStorage } from "firebase/storage";
import app from "../../base";
import Navbar from "../Shared/Navbar";
import profilePlaceholder from "../../images/profilePlaceholder.png";




const useStyles = makeStyles((theme) =>
    createStyles({
        filterContainer: {
            position: "absolute",
            height: 900,
            maxWidth: 300,
            backgroundColor: "#FFFFFF",
        },
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
            height: 800,
            padding: 0,
            maxHeight: 800,
            display: "flex",
            flexDirection: "row",
        },
        descriptionContainer: {
            color: "#ffffff",
            margin: "auto",
            textAlign: "center",
            marginTop: 20,
            fontSize: 18,
            display: "inline-block",
            width: 600,
            padding: 15,
            paddingBottom: 55,
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            fontFamily: "ABeeZee, sans-serif",

        },
        footerContainer:
        {
            backgroundColor: "#F7ECE1",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: 0,

        },
        fieldContainer: {
            maxWidth: "100%",
            display: 'column',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 80,
            paddingTop: 80,

        },
        textFld: {
            width: 500,
            height: 60,
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
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
        photoContainer: {
            width: "230px",
            height: "230px",
            float: "left",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#B8A000",
            marginBottom: 35,
        },
        profileConatiner: {
            maxWidth: 500,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 70,
        },
        formContainer: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
        }

    }),
);

const theme = createTheme();

function CreateListingPage() {
    const classes = useStyles();
    const history = useHistory();

    const [itemTitle, setItemTitle] = useState("");
    const [price, setPrice] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemStock, setItemStock] = useState("");


    {/* Make sure they are a crafter */ }
    const ListItem = async () => {
        try {

            const firestore = app.firestore();

            firestore.collection("productData").doc().set({
                itemTitle: itemTitle,
                price: price,
                itemDescription: itemDescription,
                itemStock: itemStock,
                photoURL: photoURL,

            });

        }
        catch (error) {
            alert(error);
        }

    }


    const [photoURL, setPhotoURL] = useState("");
    const [image, setImage] = useState<File | undefined>();

    const uploadPhoto = async () => {
        if (image == null) return;

        const storage = getStorage();
        const imageRef = ref(storage, "images/" + image.name);

        uploadBytesResumable(imageRef, image)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setPhotoURL(url);
                });
            })
            .catch((error) => {
                console.error("Upload failed", error);
            });
    };

    useEffect(() => {
        uploadPhoto();
    }, [image]);


    return (
        <>
            {/* Header Container */}
            <Container
                disableGutters
                maxWidth={false}
                className={`${classes.container}`}
            >
                <Navbar />



                <div className={`${classes.description}`}>

                    Create a Listing text placeholder
                    Create a Listing text placeholder
                    Create a Listing text placeholder
                    Create a Listing text placeholder
                    Create a Listing text placeholder
                </div>


                <div className={classes.formContainer}>
                    <div className={classes.fieldContainer}>
                        {photoURL ? (
                            <div className={classes.photoContainer}>
                                <img
                                    src={photoURL}
                                    style={{
                                        maxWidth: 260,
                                        maxHeight: 230,
                                        marginBottom: 50,
                                        float: "left",
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        ) : (
                            <div className={classes.photoContainer}>
                                <img
                                    src={profilePlaceholder}
                                    style={{
                                        maxWidth: 260,
                                        maxHeight: 230,
                                        marginBottom: 50,
                                    }}
                                />
                            </div>
                        )}
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
                            id="ItemDescription"
                            className={classes.textFld}
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

                        <Button
                            variant="contained"
                            component="label"
                        >
                            #Browse File
                            <input
                                type="file"
                                hidden
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={(e) => {
                                    if (e.target.files !== null) {
                                        setImage(e.target.files[0]);
                                    }
                                }}
                            />

                        </Button>

                        {/* push photo to firebase */}


                        <Button
                            size="large"
                            variant="contained"
                            onClick={() => ListItem}
                        >
                            Upload file
                        </Button>


                        <Button
                            size="large"
                            variant="contained"
                            onClick={() => ListItem()}
                        >
                            List Item
                        </Button>

                    </div>
                </div>




            </Container>

            <Container className={`${classes.footerContainer}`}>
                <Footer />
            </Container>


        </>
    );

}

export default CreateListingPage;
