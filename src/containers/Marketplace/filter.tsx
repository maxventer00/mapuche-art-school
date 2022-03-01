import { createStyles, makeStyles } from "@mui/styles";
import { useEffect } from "react";
import {
  Typography,
  Button,
  Container,
  createTheme,
  TextField,
  Paper,
  Card,
  CardContent,
  CardMedia,
  autocompleteClasses,
  Grid,
} from "@mui/material";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) =>
    createStyles({
        filterContainer: {
            position: "absolute",
            height: 900,
            maxWidth: 300,
            backgroundColor: "#FFFFFF",
        },
    }),
);


export default function Filter() {
    const classes = useStyles()
    const history = useHistory()

    return <>
    <div className={classes.filterContainer}>  
    Filters Bar HERE
    </div>
    </>






}