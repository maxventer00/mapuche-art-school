import {
  Typography,
  Button,
  TextField,
  createTheme,
  Input,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import crafter from "../../images/crafter.png";
import profilePlaceholder from "../../images/profilePlaceholder.png";
import { useHistory, withRouter, useLocation } from "react-router";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../base";
import Navbar from "../Shared/Navbar";

const useStyles = makeStyles((theme) =>
  createStyles({
    backgroundImg: {
      backgroundImage: "url(" + crafter + ")",
    },
    subtitle: {
      fontSize: 48,
      paddingTop: "250px",
    },
    smallBody: {
      fontSize: 22,
      float: "left",
      textDecoration: "underline",
    },
    fieldContainer: {
      maxWidth: 500,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 80,
    },
    profileConatiner: {
      maxWidth: 500,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    buttonContainer: {
      maxWidth: 500,
      display: "flex",
    },
    textFld: {
      width: 500,
      height: 60,
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 30,
      fontSize: 28,
    },
    textFldAbout: {
      width: 500,
      height: 60,
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 30,
      fontSize: 28,
    },
    input: {
      color: "#FFFFFF",
      fontSize: 25,
    },
    label: {
      color: "#767676",
      fontSize: 22,
    },
    photoContainer: {
      width: "230px",
      height: "230px",
      float: "left",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#B8A088",
    },
  })
);

const theme = createTheme();

interface LocationState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export default function SignupCrafterProfile() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation<LocationState>();

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

  const SignUp = async () => {
    try {
      // Update their profile pic url, location, bio
      await app.auth().onAuthStateChanged(function (user) {
        if (user) {
          user
            .updateProfile({
              photoURL: photoURL,
            })
            .then(function () {
              history.push("/");
            });
        }
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    uploadPhoto();
  }, [image]);

  return (
    <>
      <div className={classes.backgroundImg}>
        <Navbar />

        <Typography className={classes.subtitle} variant="h4">
          Crafter Signup
        </Typography>

        <div className={classes.profileConatiner}>
          {photoURL ? (
            <div className={classes.photoContainer}>
              <img
                src={photoURL}
                style={{
                  maxWidth: 230,
                  maxHeight: 230,
                  marginBottom: 50,
                }}
              />
            </div>
          ) : (
            <div className={classes.photoContainer}>
              <img
                src={profilePlaceholder}
                style={{
                  maxWidth: 230,
                  maxHeight: 230,
                  marginBottom: 50,
                }}
              />
            </div>
          )}

          <Typography
            variant="h4"
            style={{
              fontSize: 22,
              float: "left",
              marginLeft: 20,
            }}
          >
            Profile Picture
          </Typography>

          <Button
            size="large"
            variant="outlined"
            style={{
              marginTop: 90,
              maxWidth: 250,
              maxHeight: 40,
              display: "flex",
              float: "left",
              marginLeft: 20,
            }}
            component="label"
          >
            Choose Image
            <input
              type="file"
              hidden
              onChange={(e) => {
                if (e.target.files !== null) {
                  setImage(e.target.files[0]);
                }
              }}
            />
          </Button>
        </div>

        <div className={classes.fieldContainer}>
          <TextField
            className={classes.textFldAbout}
            label="About Yourself"
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
          />

          <TextField
            className={classes.textFld}
            label="Location"
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
          />

          <div className={classes.buttonContainer}>
            <Button
              size="large"
              variant="outlined"
              onClick={() => history.push("/signup")}
              style={{
                marginTop: 50,
                maxWidth: 300,
                display: "flex",
                float: "left",
                marginRight: 10,
              }}
            >
              Back
            </Button>

            <Button
              size="large"
              variant="contained"
              onClick={() => SignUp()}
              style={{
                marginTop: 50,
                maxWidth: 300,
                display: "flex",
                float: "right",
                marginLeft: 10,
              }}
            >
              Submit details
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
