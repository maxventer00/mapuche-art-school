import React from "react";
import {
    Container,
    createTheme,
 
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

    }),
);

const theme = createTheme();

function ItemPage() {
    const classes = useStyles();
    const history = useHistory();

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
                    Item Page text placeholder
                </span>
            </Container>

            <Container className={`${classes.footerContainer}`}>
                <Footer />
            </Container>


        </>
    );

}

export default ItemPage;
