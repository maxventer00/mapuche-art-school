import { createStyles, makeStyles } from '@mui/styles';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import homapageBackground from "../../images/homeBackground.png"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../../containers/Home/fonts.css';
import { height } from "@mui/system";
import IconButton from '@mui/material/IconButton';

// Way to add EXTRA css values
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
        height:1180,
        padding:0,
        maxHeight:1180,
        
       
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

function Home() {

    const classes = useStyles()

    const history = useHistory()

    return <>
    
    <Container disableGutters maxWidth={false}  className={`${classes.container}`}>
    <div className={classes.tempNav}>
                navbar
    </div>
    <h1 className={ `${classes.h1_header}`}>Mapuche Art School</h1>
    
    <span className={ `${classes.description}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
    


    


        
  
 
        
    </Container>
     
    </>
}

export default Home;