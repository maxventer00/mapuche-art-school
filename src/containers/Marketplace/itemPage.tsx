import { createStyles, makeStyles } from "@mui/styles";
import {
    ReactChild,
    ReactFragment,
    ReactPortal,
    useEffect,
    useState,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import homapageBackground from "../../images/homeBackground.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../../containers/Home/fonts.css";
import { height, textAlign } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Navbar from "../Shared/Navbar";
import { CardActionArea, Grid, List, ListItem, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import profilePlaceholder from "../../images/profilePlaceholder.png";
import app from "../../base";
import { getDocs } from "firebase/firestore";
import Footer from "../Shared/footer";



const useStyles = makeStyles((theme) =>
    createStyles({
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
            flexGrowing: 1,

        },
        content: {
            display: "flex",
            flexDirection: "column",
            //alignItems: "center",
            //justifyContent: "center",
            width: "100%",
            height: "100%",
            //margin: "auto",
            marginTop: "60px",

        },

        information: {
            backgroundColor: "#F7E",
            height: "70%",
            width: "50%",
            float: "right",


        },
        photo: {
            //float: "left",
            backgroundColor: "#FFF",
            height: "60%",
            width: "50%",
            float: "left",
        },
        card: {
            //minHeight: "500",
            //minWidth: "500",
            width: "100%",
            height: "100%",
        },
        name: {
            fontSize: 32,
            color: "#AC5435",
            fontFamily: "Prata",
        },
        infoContainer: {
            fontFamily: "Prata",
            marginTop: "285px",
            width: "100%",
        },
        bio: {
            fontFamily: "Prata",
            color: "#AC5435",
            fontSize: 25,
        },
    }),
);

const theme = createTheme();

function ItemPage() {
    const classes = useStyles();
    const history = useHistory();

    const [itemData, setItemData] = useState<any>([]);
    const location = useLocation<any>();
    const itemId = location.state.itemId;

    const getItemData = async () => {
        const firestore = app.firestore();

        const itemInfo = firestore
            .collection("productData")
            .doc(itemId)
            .get()
            .then((snapshot) => setItemData(snapshot.data()));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getItemData();
    }, []);

    useEffect(() => {
        console.log("Item: " + itemData);
    }, [itemData]);

    return (
        <>
            <Navbar />

            <div className={`${classes.content}`}>

                <div className={`${classes.information}`}>
                    <h1 className={classes.name}>{itemData.itemTitle}</h1>




                </div>
            </div>

        </>
    );


}

export default ItemPage;
