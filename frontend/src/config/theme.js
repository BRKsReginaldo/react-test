import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import * as Colors from '@material-ui/core/colors'
import React from "react";

const theme = createMuiTheme({
    palette: {
        primary: Colors.indigo,
        secondary: Colors.pink,
        error: Colors.red,
        contrastThreshold: 3,
        tonalOffset: 0.2
    }
})

export default ({children}) => <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>