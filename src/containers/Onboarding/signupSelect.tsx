import { Typography, Button, TextField, createTheme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import cusSignup from "../../images/cusSignup.jpg";
import craftSignup from "../../images/craftSignup.png";
import { useHistory } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import app from "../../base";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      maxHeight: "100vh",
    },
    topImg: {
      backgroundImage: "url(" + cusSignup + ")",
      height: "50vh",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top, bottom",
      backgroundSize: "cover",
    },
    bottomImg: {
      backgroundImage: "url(" + craftSignup + ")",
      height: "50vh",
      backgroundRepeat: "no-repeat",
    },
    footer: {
      height: "100vh",
      backgroundColor: "black",
    },
  })
);

const theme = createTheme();

export default function Signup() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.topImg}>
          <Button
            size="large"
            variant="outlined"
            style={{
              maxWidth: 300,
              marginTop: "20vh",
              marginBottom: 700,
            }}
            onClick={() => history.push("/signup/customer")}
          >
            Registro de clientes
          </Button>
        </div>
        <div className={classes.bottomImg}>
          <Button
            size="large"
            variant="outlined"
            style={{
              maxWidth: 300,
              marginTop: "20vh",
              marginBottom: 700,
            }}
            onClick={() => history.push("/signup/crafter")}
          >
            registro de crafters
          </Button>
        </div>
      </div>
      <div className={classes.footer}></div>{" "}
    </>
  );
}
