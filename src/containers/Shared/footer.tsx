import React from "react";
import { Container, Link, Grid, Box } from "@mui/material";

// Footer not centred

export default function Footer() {
    return <footer>
        <Box bgcolor="fff" maxWidth={1000}>
            <Container maxWidth="lg">
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            Contact Us</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact 1
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact 2
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
                            <Link href="/" color="inherit">
                                Sign In
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
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
        </Box>
    </footer>;

}