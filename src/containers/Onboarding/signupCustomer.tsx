import { Typography, Button, TextField, createTheme } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import React from "react";
import customer from "../../images/customer.png"
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) =>
    createStyles({
        tempNav: {
            backgroundColor: '#ffffff',
            height: 50,
            marginBottom: 140,
        },
        backgroundImg: {
            backgroundImage: "url(" + customer + ")",
        },
        subtitle: {
            fontSize: 48
        },
        smallBody: {
            fontSize: 22,
            float: 'left',
            textDecoration: 'underline',
        },
        fieldContainer: {
            maxWidth: 500,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 80,
        },
        textFld: {
            width: 500, 
            height: 60,
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 30,
            fontSize: 35,
        },
        input: {
            color: '#FFFFFF',
            fontSize: 25,
        },
        label: {
            color: '#767676',
            fontSize: 22,
        },
    }),
);

const theme = createTheme()

export default function SignupCrafter() {

    const classes = useStyles()

    const history = useHistory()

    return <>
        <div className={classes.backgroundImg}>
            <div className={classes.tempNav}>
                navbar
            </div>  

            <Typography 
                className={classes.subtitle}
                variant="h4"
            >
                Customer Signup
            </Typography>

            <div className={classes.fieldContainer}>
                <TextField 
                    className={classes.textFld}
                    label="First Name" 
                    variant="filled" 
                    InputProps={{
                        classes: {
                        input: classes.input,
                        }
                    }}
                    InputLabelProps={{
                        classes: {
                        root: classes.label,
                        },
                    }}
                />

                <TextField 
                    className={classes.textFld}
                    label="Last Name" 
                    variant="filled" 
                    InputProps={{
                        classes: {
                        input: classes.input,
                        }
                    }}
                    InputLabelProps={{
                        classes: {
                        root: classes.label,
                        },
                    }}
                />

                <TextField 
                    className={classes.textFld}
                    label="Email Address" 
                    variant="filled" 
                    InputProps={{
                        classes: {
                        input: classes.input,
                        }
                    }}
                    InputLabelProps={{
                        classes: {
                        root: classes.label,
                        },
                    }}
                />
                <TextField 
                    className={classes.textFld}
                    label="Password" 
                    variant="filled" 
                    InputProps={{
                        classes: {
                        input: classes.label,
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
                    label="Re-Enter Password" 
                    variant="filled" 
                    InputProps={{
                        classes: {
                        input: classes.label,
                        },
                    }}
                    InputLabelProps={{
                        classes: {
                        root: classes.label,
                        },
                    }}
                />

                <Button
                    size="large"
                    variant="contained"
                    onClick={() => history.push("/home")}
                >
                    Signup
                </Button>

                <Button
                    size="large"
                    variant="outlined"
                    onClick={() => history.push("/signup")}
                >
                    Back
                </Button>
            </div>
        </div>
    </>
}
