import { createTheme } from '@mui/material'

const primaryMain = '#B8A088'
const primaryDark = '#8A7866'
const secondaryLight = '#8A7866'
const secondaryMain = '#AC5435'

const theme = createTheme({
    palette: {
        // Lighter brown
        primary: {
            main: '#AC5435',
            dark: '#B59474',
        },
        // Darker Brown (For accents)
        secondary: {
            light: '#B59474',
            main: '#AC5435',
        },
    },
    typography: {
        fontFamily: ['Lato', 'Prata'].join(',')
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    h2: {
                        color: "white",
                        fontFamily: "Prata",
                        fontSize: "48px",
                        marginBottom: "55px",
                    },
                    h4: {
                        color: "white",
                        fontFamily: "Lato",
                        fontSize: "32px",
                        marginBottom: "70px",
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    contained: {
                        backgroundColor: primaryMain,
                        color: "white",
                        boxShadow: "none",
                        borderWidth: "5px",
                        borderColor: "white",
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "25px",
                        lineHeight: "30px",
                        width: "500px",
                        marginTop: "20px",
                        '&:hover': {
                            backgroundColor: primaryDark,
                            boxShadow: "none",
                        }
                    },
                    outlined: {
                        backgroundColor: "transparent",
                        color: "white",
                        boxShadow: "none",
                        borderWidth: "2px",
                        borderColor: "white",
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "25px",
                        lineHeight: "30px",
                        width: "500px",
                        marginTop: "20px",
                        '&:hover': {
                            backgroundColor: secondaryLight,
                        }
                    }
                },
            }
        }
    }
})

export default theme;