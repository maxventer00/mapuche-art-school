import { blue, red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        // Lighter brown
        primary: {
            main: '#F7ECE1',
        },
        // Darker Brown (For accents)
        secondary: {
            main: '#AC5435',
        },
    },
    typography: {
        fontFamily: ['Lato', 'Prata'].join(',')
    },
})

export default theme;