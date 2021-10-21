import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import theme from "../../core/theme";

// Way to add EXTRA css values
const useStyles = makeStyles((theme) => ({

}))

function Home() {

    const classes = useStyles()

    const history = useHistory()

    return <>
        <Typography
            variant="h2"
            color="secondary"
        >
            Title Text Secondary
        </Typography>

        <Typography
            variant="h4"
            color="secondary"
        >
            Body Text Secondary
        </Typography>

        <div>
            <Button 
                variant="contained" 
                size="large"
                onClick={() => history.push("/login")}
            >
                Login Page
            </Button>
        </div>

        <div>
            <Button variant="outlined" size="large">
                Outlined Button
            </Button>
        </div>
    </>
}

export default Home;