import { createTheme } from '@mui/material'

export const AppTheme = createTheme({
    spacing: 12,
    typography: {
        h1: {
            fontFamily: "Lato",
            fontWeight: 900,
            fontSize: "48px",
            lineHeight: "58px",
            color: "#000000",
        },
        h2: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "29px",
            color: "#000000",
        },
        h3: {
            fontWeight: 600,
            fontSize: "16px",
            color: "#000000",
        },
        h4: {
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "14px",
            color: "#000000",
        },
        h5: {
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "14px",
            color: "#000000",
        },
        body1: {
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "-0.01em",
            color: "#d500f9",
        },
        body2: {
            fontFamily: "Lato",
            fontSize: "18px",
            lineHeight: "24px",
            color: "#494949",
        },
        caption: {
            fontFamily: "Lato",
            fontSize: "18px",
            fontStyle: "italic",
            color: "gray",
        },

    },
    palette: {
        primary: {
            main: "#6a5acd",
            contrastText: "#fff",
        },
        secondary: {
            main: "#EF1515",
            contrastText: "#fff",
        }
    },

});
