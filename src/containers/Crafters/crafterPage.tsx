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
import { Button, TextField, Typography } from "@mui/material";
import profilePlaceholder from "../../images/profilePlaceholder.png";
import app from "../../base";
import { getDocs } from "firebase/firestore";
import crafterBanner from "../../images/crafterBanner.jpg";

// Way to add EXTRA css values
const useStyles = makeStyles((theme) =>
  createStyles({
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
    location: {
      fontFamily: "Prata",
      color: "#8A7866",
      fontSize: 22,
    },
    background: {
      backgroundColor: "#F7ECE1",
      minHeight: "90%",
    },
    imgContainer: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 400,
      padding: 0,
      maxHeight: 500,
      backgroundImage: "url(" + crafterBanner + ")",
      paddingTop: 20,
      backgroundColor: "rgba(100, 100, 100, 0.5)",
      backgroundBlendMode: "multiply",
    },
    contentContainer: {
      marginTop: 200,
      position: "absolute",
      width: "100%",
    },
    photoContainer: {
      width: "400px",
      height: "450px",
      float: "left",
      textAlign: "center",
      marginRight: "25px",
    },
    productsContainer: {
      fontFamily: "Prata",
      color: "#AC5435",
      fontSize: 25,
      alignContent: "center",
      backgroundColor: "#F7ECE1",
    },
    contained: {
      backgroundColor: "#B8A088",
      color: "white",
      boxShadow: "none",
      borderWidth: "5px",
      borderColor: "white",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "25px",
      lineHeight: "30px",
      width: "500px",
      marginTop: "50px",
      "&:hover": {
        backgroundColor: "#8A7866",
        boxShadow: "none",
      },
    },
    outlined: {
      backgroundColor: "transparent",
      color: "white",
      boxShadow: "none",
      borderWidth: "2px",
      borderColor: "white",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "25px",
      lineHeight: "30px",
      width: "500px",
      marginTop: "20px",
      "&:hover": {
        backgroundColor: "#8A7866",
      },
    },
    listButton: {
      float: "right",
      marginRight: "2%",
      marginTop: "0px",
      marginBottom: "50px",
    },
    blogPostContainer: {
      fontSize: "25px",
      textAlign: "left",
      marginLeft: "3%",
      marginRight: "3%",
      backgroundColor: "white",
      marginTop: "75px",
      paddingTop: "15px",
      paddingBottom: "15px",
      paddingLeft: "35px",
      paddingRight: "15px",
      borderRadius: "5px",
    },
    blogPostTitle: {
      fontSize: "28px",
      fontFamily: "Lato",
      paddingBottom: 0,
      marginBottom: 0,
    },
    blogPostDescription: {
      marginTop: "15px",
      fontSize: "22px",
      fontFamily: "Lato",
      dispay: "block",
    },
    blogPostDate: {
      fontSize: "15px",
      fontFamily: "Lato",
    },
    signoutButtonContainer: {
      float: "right",
      marginRight: "3%",
    },
  })
);

const theme = createTheme();

function CraftersPage() {
  const classes = useStyles();
  const history = useHistory();

  const [crafter, setCrafter] = useState<any>();
  const location = useLocation<any>();
  const crafterID = location.state.crafterID;

  const [loggedIn, setLoggedIn] = useState(true);
  const [userID, setUserID] = useState<any>();

  const [allowBlogPost, setAllowBlogPost] = useState(false);
  const [openBlogPost, setOpenBlogPost] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [blogPosts, setBlogPosts] = useState<any>([]);

  const userCheck = () => {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setUserID(user.uid);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };

  const getCrafterDetails = async () => {
    const firestore = app.firestore();

    const crafterData = firestore
      .collection("userData")
      .doc(crafterID)
      .get()
      .then((snapshot) => setCrafter(snapshot.data()));

    const collectionRef = firestore
      .collection("userData")
      .doc(crafterID)
      .collection("blogPosts");

    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      if (blogPosts.includes(doc.data()) === false) {
        setBlogPosts((blogPosts: any) => [...blogPosts, doc.data()]);
      }
    });
  };

  const submitPost = () => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    const firestore = app.firestore();

    firestore.collection("userData").doc(userID).collection("blogPosts").add({
      title: title,
      description: description,
      date: date,
    });
    setOpenBlogPost(false);
    blogPosts.push({ title: title, description: description, date: date });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    userCheck();
    getCrafterDetails();
  }, []);

  useEffect(() => {
    if (crafterID === userID) {
      setAllowBlogPost(true);
    }
  }, [crafter]);

  return (
    <>
      <Navbar />

      <div className={classes.background}>
        <div className={classes.contentContainer}>
          {crafter ? (
            <>
              <div className={classes.photoContainer}>
                {crafter.photoURL ? (
                  <img
                    src={crafter.photoURL}
                    style={{
                      maxWidth: 300,
                      maxHeight: 300,
                      marginBottom: 20,
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <img
                    src={profilePlaceholder}
                    style={{
                      maxWidth: 300,
                      maxHeight: 300,
                      marginBottom: 20,
                      borderRadius: "50%",
                    }}
                  />
                )}
                <h1 className={classes.name}>{crafter.name}</h1>
                <h1 className={classes.location}>{crafter.userLocation}</h1>
              </div>

              <div className={classes.infoContainer}>
                <h1 className={classes.bio}>"{crafter.userBio}"</h1>
              </div>
            </>
          ) : null}
        </div>
        <div className={classes.imgContainer} />
      </div>

      <div className={classes.productsContainer}>
        <h1
          style={{
            fontSize: "35px",
            marginTop: "0px",
            paddingBottom: "10px",
          }}
        >
          Blog Posts
        </h1>

        {allowBlogPost ? (
          <div className={classes.signoutButtonContainer}>
            <Button
              style={{ maxWidth: "255px" }}
              className={classes.outlined}
              variant="outlined"
              onClick={() => setOpenBlogPost(!openBlogPost)}
            >
              Create New Post
            </Button>
          </div>
        ) : null}

        {openBlogPost ? (
          <div className={classes.blogPostContainer}>
            <p className={classes.blogPostDescription}>New Post</p>

            <TextField
              className={classes.blogPostTitle}
              variant="outlined"
              placeholder="Title"
              required
              size="medium"
              margin="dense"
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              className={classes.blogPostDescription}
              variant="outlined"
              placeholder="Description"
              required
              multiline
              minRows={5}
              size="medium"
              fullWidth
              margin="normal"
              onChange={(e) => setDescription(e.target.value)}
            />

            <Button
              style={{
                maxWidth: "255px",
                marginTop: "25px",
                marginBottom: "25px",
              }}
              className={classes.contained}
              variant="contained"
              onClick={() => submitPost()}
            >
              Create New Post
            </Button>
          </div>
        ) : null}

        {blogPosts
          .slice(0)
          .reverse()
          .map((blogPost: any) => {
            console.log(blogPost);
            return (
              <>
                <div className={classes.blogPostContainer}>
                  <h1 className={classes.blogPostTitle}>{blogPost.title}</h1>
                  <text className={classes.blogPostDate}>{blogPost.date}</text>
                  <p className={classes.blogPostDescription}>
                    {blogPost.description}
                  </p>
                </div>
              </>
            );
          })}

        <h1
          style={{
            fontSize: "35px",
            marginTop: "0px",
            paddingBottom: "115px",
            paddingTop: "85px",
          }}
        >
          Products For Sale
        </h1>
      </div>
    </>
  );
}

export default CraftersPage;
