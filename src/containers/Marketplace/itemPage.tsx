import { createStyles, makeStyles } from "@mui/styles";
import {
    ReactChild,
    ReactFragment,
    ReactPortal,
    useEffect,
    useState,
} from "react";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import homapageBackground from "../../images/homeBackground.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../../containers/Home/fonts.css";
import { height, textAlign } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Navbar from "../Shared/Navbar";
import { Typography } from "@mui/material";
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
        },
    }),
);

const theme = createTheme();

function ItemPage() {
    const classes = useStyles();
    const history = useHistory();


    const [item, setItem] = useState<any>([]);

    const getItemData = async () => {
      const firestore = app.firestore();
  
      const collectionRef = firestore.collection("productData");
      const querySnapshot = await getDocs(collectionRef);
  
      querySnapshot.forEach((doc) => {
        setItem((arr: any) => [...arr, doc.data()]);
      });
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

                <Footer />
            </Container>




        </>
    );

}

export default ItemPage;
