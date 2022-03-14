import React, { useState } from "react";
import {
    Button,
    Container,
    createTheme,
    TextField,

} from "@mui/material";
import { useHistory } from "react-router";
import Footer from "../Shared/footer";
import { createStyles, makeStyles } from "@mui/styles";



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
        },
        descriptionContainer: {
            backgroundColor: "#F7ECE1",
            backgroundPosition: "center",

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
            maxWidth: 500,
            display: 'block',
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

    }),
);

const theme = createTheme();

function CreateListingPage() {
    const classes = useStyles();
    const history = useHistory();

    const [itemTitle, setItemTitle] = useState("");
    const [price, setPrice] = useState("");
    const [itemDescription, setItemDescription] = useState("");

    const ListItem = async () => {
 
    }

    return (
        <>
            {/* Header Container */}
            <Container
                disableGutters
                maxWidth={false}
                className={`${classes.container}`}
            >
                <div className={classes.tempNav}>navbar</div>

                <span className={`${classes.description}`}>
                    Create a Listing text placeholder
                </span>



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
                        id="ItemDescription"
                        className={classes.textFld}
                        label="Add an Item Description"
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

                    <Button
                        size="large"
                        variant="contained"
                        onClick={() => ListItem}
                    >
                        List Item
                    </Button>

                </div>




            </Container>

            <Container className={`${classes.footerContainer}`}>
                <Footer />
            </Container>


        </>
    );

}

export default CreateListingPage;
