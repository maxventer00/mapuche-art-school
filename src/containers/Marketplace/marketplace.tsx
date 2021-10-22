import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import theme from "../../core/theme";

// Way to add EXTRA css values
const useStyles = makeStyles((theme) => ({
  '@global':{
    body:{
      backgroundColor:"#F7ECE1"
    }
},
otherstyles:{
  //  other styles ....
},

}))

function Marketplace() {

  const classes = useStyles()

  return <>
      <Typography
          variant="h2"
          color="secondary"
      >
          Marketplace
      </Typography>

      <Typography
          variant="h4"
          color="secondary"
      >
          Body Text Secondary
      </Typography>

      <div>
          <Button variant="outlined" size="large">
              Contact Us
          </Button>
      </div>
  </>
}

export default Marketplace;