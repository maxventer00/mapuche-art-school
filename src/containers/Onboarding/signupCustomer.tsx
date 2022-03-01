import { Typography, Button, TextField, createTheme } from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import React, { useCallback, useState } from "react";
import customer from "../../images/customer.png"
import { useHistory, withRouter } from "react-router";
import app from "../../base";

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

function SignupCrafter() {

    const classes = useStyles()
    const history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const SignUp = async () => {
        if (password === password2) {
            try {
                // Sign up user
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email, password);

                // Update their display name
                await app
                    .auth()
                    .onAuthStateChanged(function(user) {
                        if (user) {
                        user.updateProfile({
                            displayName: firstName + ' ' + lastName,
                        }).then(function() {
                            history.push("/");
                        });     
                        }
                    });
            } catch (error) {
                alert(error);
            }
        }
        else {
            alert("Passwords don't match");
        }
    }

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
                    id="firstName"
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
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <TextField 
                    id="lastName"
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
                    onChange={(e) => setLastName(e.target.value)}
                />

                <TextField 
                    id="email"
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
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    id="password"
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
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField 
                    id="password2"
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
                    onChange={(e) => setPassword2(e.target.value)}
                />

                <Button
                    size="large"
                    variant="contained"
                    onClick={() => SignUp()}
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

export default withRouter(SignupCrafter);