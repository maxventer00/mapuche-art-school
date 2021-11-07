import { createStyles, makeStyles } from '@mui/styles';
import { useEffect } from "react";
import { Typography, Button, Container, createTheme, TextField, Paper } from "@mui/material";
import { useHistory } from 'react-router';
import homapageBackground from "../../images/homeBackground.png"
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) =>
  createStyles({
    tempNav: {
        backgroundColor: '#ffffff',
        height: 50,
    },
    h1_header:
    {
      fontSize:50,
      color:'#ffffff',
      padding:15,
      paddingTop:70,
      fontFamily: 'Beth Ellen, cursive'
    },
    description:
    {
      color:'#ffffff',
      margin:'auto',
      textAlign:"center",
      marginTop:20,
      fontSize:18,
      display:"inline-block",
      width: 600,
      padding:15,
      overflow: "hidden",
      textOverflow:"ellipsis",
      wordWrap: "break-word",
      fontFamily: 'ABeeZee, sans-serif',
    },

    contactUs:{
      width: 200,
      height:50,
      fontFamily: 'ABeeZee, sans-serif',
      textTransform: 'none',
      marginTop:30,
    },

    container: {
        backgroundImage: "url(" + homapageBackground + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:800,
        padding:0,
        maxHeight:1180,
        
      },
      marketContainer: {
        position: 'relative',
        width: '100%',
        height: 2000,
        backgroundColor: '#F7ECE1',
        
      },
      tint:
      {
        maxHeight:1180,
        padding:0,
        height:1180,
        backgroundColor: "rgba(0,0,0,.6)",
      }
  }),
);

const theme = createTheme()

function Marketplace() {

    const classes = useStyles()

    const history = useHistory()

    return <>
    
    <Container disableGutters maxWidth={false} className={`${classes.container}`}>
    <div className={classes.tempNav}>
                navbar
    </div>
    <h1 className={ `${classes.h1_header}`}>Marketplace</h1>
    
    <span className={ `${classes.description}`}>marketplace text placeholder</span>
    
    
    </Container>
    <div className={ `${classes.contactUs}`}>
       <Button 
         size="large"
         variant="outlined"
         style={{
             maxWidth: 700,
             marginTop: 0,
             marginLeft:  900,
             marginRight: 'auto',
             marginBottom: 500,
         }}
        >
            Contact Us
            
        </Button>
         
    </div>



<Container disableGutters maxWidth={false} className={`${classes.marketContainer}`}>
<h1 className={ `${classes.h1_header}`}>Marketplace</h1>

<Paper elevation={5}>
<Box
      sx={{
        position: 'absolute',
        height: 900,
        width: '20%',
        marginLeft: '5%',  
        backgroundColor: '#ffffff',
        '&:hover': {
          backgroundColor: '#ffffff',
        },
      }}
    />
</Paper>
</Container>

//TRY MAKE MARKETPLACE BOX FIT BETTER AND NOT WHOLE SCREEN WIDTH


    </>
}


export default Marketplace;