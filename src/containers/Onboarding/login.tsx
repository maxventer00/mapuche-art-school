import { Typography, Button, createStyles, makeStyles, TextField } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import theme from "../../core/theme";
import loginBackground from "../../images/loginBackground.png"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        tempNav: {
            backgroundColor: '#ffffff',
            height: 50,
            marginBottom: 140,
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
        bgImg: {
            backgroundImage: "url(" + loginBackground + ")",
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
            fontSize: 25,
        },
    }),
);
    
const classes = useStyles()

const history = useHistory()

function Login() {
    return <> 
        <div className={classes.bgImg}>
            <div className={classes.tempNav}>
                navbar
            </div>

            <Typography 
                className={classes.subtitle}
                variant="h4"
            >
                Login
            </Typography>

            <div className={classes.fieldContainer}>
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
                <Typography 
                    className={classes.smallBody}
                    variant="h4"
                >
                    Forgot Password
                </Typography>

                <Button
                    size="large"
                    variant="contained"
                    onClick={() => history.push("/home")}
                >
                    Login
                </Button>

                <Typography 
                    variant="h4"
                    style={{
                        fontSize: 25,
                        marginTop: 100,
                        marginBottom: 30,
                    }}
                >
                    Haven’t made an account yet? 
                </Typography>
            
                <Button
                    size="large"
                    variant="outlined"
                    style={{
                        maxWidth: 300,
                        marginTop: 0,
                    }}
                    onClick={() => history.push("/signup")}
                >
                    Signup
                </Button>
            </div>
        </div>
    </>
}