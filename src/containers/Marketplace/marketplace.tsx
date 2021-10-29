import { createStyles, makeStyles } from '@mui/styles';
import { useEffect } from "react";
import theme from "../../core/theme";
import { Typography, Button } from "@mui/material";

function Marketplace() {

    return <>
        <Typography
            variant="h2"
            color="secondary"
        >
            test Title Text Secondary
        </Typography>

        <Typography
            variant="h4"
            color="secondary"
        >
          test   Body Text Secondary
        </Typography>

        <div>
            <Button variant="contained" size="large">
                2nd Contained Button
            </Button>
        </div>

        <div>
            <Button variant="outlined" size="large">
                2nd Outlined Button
            </Button>
        </div>
    </>
}

export default Marketplace;