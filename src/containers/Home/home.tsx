import { Box, Button, Typography, makeStyles } from "@material-ui/core";
import react from "react";

// Way to add EXTRA css values
const useStyles = makeStyles({
    body: {
        fontSize: 55,
    }
})

function Home() {

    const classes = useStyles()

    return <>
        <Typography
            variant="h1"
            color="secondary"
            className={classes.body}
        >
            Example Text
        </Typography>

        <Button variant="contained" color="primary" size="large">
            Submit
        </Button>

        <Button variant="outlined" size="large">
            Back
        </Button>
    </>
}

export default Home;