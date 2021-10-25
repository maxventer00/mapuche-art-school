import { Typography, Button, TextField } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import React from "react";
import theme from "../../core/theme";
import cusSignup from "../../images/cusSignup.png"
import craftSignup from "../../images/craftSignup.png"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) =>
    createStyles({
        tempNav: {
            backgroundColor: '#ffffff',
            height: 50,
        },
        topImg: {
            backgroundImage: "url(" + cusSignup + ")",
            maxHeight: '50%',
        },
        bottomImg: {
            backgroundImage: "url(" + craftSignup + ")",
            maxHeight: '50%',
        },
    }),
);
    
const classes = useStyles()

const history = useHistory()

export default function Signup() {
    return <> 
        <div className={classes.tempNav}>
            navbar
        </div>
        
        <div className={classes.topImg}>
            <Button
                size="large"
                variant="outlined"
                style={{
                    maxWidth: 300,
                    marginTop: '20vh',
                    marginBottom: 700,
                }}
                onClick={() => history.push('/signup/customer')}
            >
                Customer Signup
            </Button>
        </div>

        <div className={classes.bottomImg}>
                <Button
                    size="large"
                    variant="outlined"
                    style={{
                        maxWidth: 300,
                        marginTop: '20vh',
                        marginBottom: 700,
                    }}
                    onClick={() => history.push('/signup/crafter')}
                >
                    Crafter Signup
                </Button>
        </div>
    </>
}