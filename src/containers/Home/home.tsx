import { Typography, useTheme } from "@material-ui/core";
import react from "react";

function Home() {

    const theme = useTheme();

    return <>
        <header className="App-header">
            <Typography color="primary">Home</Typography>
        </header>
    </>
}

export default Home;