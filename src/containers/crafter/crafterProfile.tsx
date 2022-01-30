import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, createTheme, Grid, List, ListItem, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";
import { useHistory } from "react-router-dom";
// import { cre}
// const theme = createTheme()
// Way to add EXTRA css values

const useStyles = makeStyles((theme) =>
  createStyles({
    tempNav: {
      backgroundColor: '#ffffff',
      height: 50,
    },
    h1_header:
    {
      fontSize: 50,
      color: '#ffffff',
      padding: 15,
      paddingTop: 70,
      fontFamily: 'Beth Ellen, cursive'
    },
    description:
    {
      color: '#ffffff',
      margin: 'auto',
      textAlign: "center",
      marginTop: 20,
      fontSize: 18,
      display: "inline-block",
      width: 600,
      padding: 15,
      overflow: "hidden",
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      fontFamily: 'ABeeZee, sans-serif',
    },

    contactUs: {
      width: 200,
      height: 50,
      fontFamily: 'ABeeZee, sans-serif',
      textTransform: 'none',
      marginTop: 30,
    },

    container: {
      //  backgroundImage: "url(" + homapageBackground + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 1180,
      padding: 0,
      maxHeight: 1180,


    },
    tint:
    {
      maxHeight: 1180,
      padding: 0,
      height: 1180,
      backgroundColor: "rgba(0,0,0,.6)",
    },
  }),
);

const productData = [
  {
    title: 'Clava',
    img: 'https://i.pinimg.com/originals/4a/35/a1/4a35a15960205fb7680af1aced111ca6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, eu est viverra nulla dictumst interdum faucibus in.',
    material: 'x2',
    weight: '15 kg',
    measurements: '23x45x23',
    price: '15.000',
  },
  {
    title: 'Clava 2',
    img: 'https://i.pinimg.com/originals/4a/35/a1/4a35a15960205fb7680af1aced111ca6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, eu est viverra nulla dictumst interdum faucibus in.',
    material: 'x2',
    weight: '15 kg',
    measurements: '23x45x23',
    price: '25.000',
  },
  {
    title: 'Clava 3',
    img: 'https://i.pinimg.com/originals/4a/35/a1/4a35a15960205fb7680af1aced111ca6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, eu est viverra nulla dictumst interdum faucibus in.',
    material: 'x2',
    weight: '15 kg',
    measurements: '23x45x23',
    price: '35.000',
  },
  {
    title: 'Clava 4',
    img: 'https://i.pinimg.com/originals/4a/35/a1/4a35a15960205fb7680af1aced111ca6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, eu est viverra nulla dictumst interdum faucibus in.',
    material: 'x2',
    weight: '15 kg',
    measurements: '23x45x23',
    price: '45.000',
  },
]

function CrafterProfile() {

  const classes = useStyles()

  const history = useHistory()

  return (
    <>
      <Container disableGutters maxWidth={false} className={`${classes.container}`}>
        <div className={classes.tempNav}>
          navbar
        </div>
        {/* <h1 className={`${classes.h1_header}`}>Mapuche Art School</h1> */}
        <Grid container item xs={12} justifyContent="space-evenly" alignItems="center">
          {/* <Grid item xs={2} style={{ textAlign: "center" }}> */}
          <Grid item>
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
                maxHeight: { xs: 250, md: 150 },
                maxWidth: { xs: 250, md: 150 },
              }}
              borderRadius="50%"
              alt="Mapa"
              src="https://e7.pngegg.com/pngimages/161/468/png-clipart-perquenco-galvarino-chile-curarrehue-map-lonquimay-economico-map-location.png"
            />
          </Grid>
          <Grid item xs={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, eu est viverra nulla dictumst interdum faucibus in.
            Justo molestie ullamcorper viverra mi auctor ultricies.
          </Grid>
          <Grid item>
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
                maxHeight: { xs: 250, md: 150 },
                maxWidth: { xs: 250, md: 150 },
              }}
              borderRadius="50%"
              alt="Avatar"
              src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?k=20&m=1300972574&s=612x612&w=0&h=kndUxGzi4W9gD_s-3Jq2vd9wxv2Qn2EEtZ7qjce1nhY="
            />
            <Typography gutterBottom variant="h5" component="div" color="#AC5435">
              Victor daf3w
            </Typography>
          </Grid>

        </Grid>
        <br />
        <Grid container justifyContent="center" alignItems="center" >
          <List sx={{ columns: 2, gap:5}}>
            {productData.map((item => (
              <ListItem key={item.title}>
                <Card sx={{ maxWidth: 410, borderRadius: 4 }}>
                  <CardActionArea sx={{ display: 'flex' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.img}
                      alt="green iguana"
                    />
                    <CardContent sx={{ flexDirection: "column" }}>
                      <Grid container justifyContent="space-between">
                        <Typography gutterBottom variant="h5" component="div" color="#AC5435">
                          {item.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color="#AC5435">
                          {item.price}
                        </Typography>
                      </Grid>
                      <Typography variant="body2" color="#AC5435">
                        {item.description}
                      </Typography>
                      <br />
                      <Typography variant="body2" color="#AC5435" align="left">
                        Material: {item.material}
                      </Typography>
                      <Typography variant="body2" color="#AC5435" align="left">
                        Weight: {item.weight}, Measurements: {item.measurements}
                      </Typography>
                      <CardActions sx={{ justifyContent: 'end' }} >
                        <Button size="small" color="secondary" variant="contained"  sx={ { borderRadius: 28 } } >
                          Add to Bag
                        </Button>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ListItem>
            )))}
          </List>
        </Grid>
      </Container>

    </>);
}

export default CrafterProfile;