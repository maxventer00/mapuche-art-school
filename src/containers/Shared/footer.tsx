import React from "react";
import { Container, Link, Grid, Box, } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        footerContainer: {
            backgroundColor: "#F7ECE1",
            // height: "100%",
            // minWidth: "80%",
            marginTop: "50px",
            position: "absolute",
            left: "0",
            bottom: "10px",
            right: "0",
        },
    })
);

// Footer not centred

export default function Footer() {
    const classes = useStyles();

    return <footer>

        <Container
            disableGutters
            maxWidth={"lg"}
            className={`${classes.footerContainer}`}
        >
            <Grid container spacing={10}>
                <Grid item xs={12} sm={4} >
                    <Box borderBottom={1}>
                        Testings</Box>
                    <Box>
                        <Link href="/marketplace" color="inherit">
                            Marketplace
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/createlistingpage" color="inherit">
                            Create a Listing
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/" color="inherit">
                            Contact 3
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                        Account</Box>
                    <Box>
                        <Link href="/login" color="inherit">
                            Sign In
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/signup" color="inherit">
                            Register
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                        About Us</Box>
                    <Box>
                        <Link href="/" color="inherit">
                            Map
                        </Link>
                    </Box>
                </Grid>
            </Grid>

        </Container>

    </footer>;

}