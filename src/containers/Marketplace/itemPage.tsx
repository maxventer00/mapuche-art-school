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
        }
    }),
);

const theme = createTheme();

function ItemPage() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation<any>();
    const [itemId, setItemId] = location.state.itemId;

    const [itemData, setItemData] = useState<any>([]);

    const getItemData = () => {
        const firestore = app.firestore();

        const itemData = firestore
            .collection("productData")
            .doc(itemId)
            .get()
            .then((snapshot) => setItemId(snapshot.data()));
    };

    useEffect(() => {
        getItemData();
    }, []);

    return (
        <>
            {/* Header Container */}
            <Container
                disableGutters
                maxWidth={false}
                className={`${classes.container}`}
            >
                <Navbar />

                <Container className={`${classes.content}`}>

                    <div className={`${classes.information}`}>
                        <List>
                            {itemData.map((item: {
                                itemTitle: string | undefined;
                                itemDescription: string | undefined;
                                price: number | undefined;
                                itemStock: number | undefined;
                                photoURL: string | undefined;
                            }) => (
                                <ListItem key={item.itemTitle}
                                >
                                    <Card
                                        className={classes.card}
                                        sx={{ borderRadius: 5 }}
                                    >
                                        <CardActionArea
                                            sx={{ display: "column", border: `5px solid white` }}
                                        >

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
                                                    Price: ${item.price}
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

                            ))}
                        </List>
                    </div>

                    <div className={`${classes.photo}`}>
                        <List
                            sx={{ columns: 1, gap: 3 }}>
                            {itemData.map(
                                (item: {
                                    itemTitle: string | undefined;
                                    itemDescription: string | undefined;
                                    photoURL: string | undefined;
                                    //itemStock: number | undefined;
                                    price: number | undefined;
                                }) => (
                                    <ListItem key={item.itemTitle}
                                    >
                                        <Card
                                            className={classes.card}
                                            sx={{ borderRadius: 5 }}
                                        >
                                            <CardActionArea
                                                sx={{ display: "column", border: `5px solid white` }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    height="100%"
                                                    width="100%"
                                                    sx={{ borderRadius: 5 }}
                                                    image={item.photoURL}
                                                    alt="No Image Available"
                                                />





                                            </CardActionArea>
                                        </Card>
                                    </ListItem>
                                )
                            )}
                        </List>

                    </div>

                </Container>



                <Footer />
            </Container>




        </>
    );

}

export default ItemPage;
