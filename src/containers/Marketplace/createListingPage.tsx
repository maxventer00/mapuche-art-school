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
            <Navbar />
            <Container
                disableGutters
                maxWidth={false}
                className={`${classes.container}`}
            >



                <div className={classes.formContainer}>

                    {photoURL ? (
                        <div className={classes.photoContainer}>
                            <img
                                src={photoURL}
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
                            style={{
                                marginRight: "20px",

                                maxWidth: "60%",

                            }}
                            onClick={() => ListItem}
                        >
                            Upload file
                        </Button>


                        <Button
                            size="large"
                            variant="contained"
                            style={{
                                marginRight: "20px",
                                maxWidth: "60%",

                            }}
                            onClick={() => ListItem()}
                        >
                            List Item
                        </Button>
                    </div>
                </Container>



                <Footer />
            </Container>

            
                
            


        </>
    );

}

export default CreateListingPage;
function calc(arg0: number, px: any): import("csstype").Property.Height<string | number> | import("@mui/styles").PropsFunc<{}, import("csstype").Property.Height<string | number> | undefined> | undefined {
    throw new Error("Function not implemented.");
}

