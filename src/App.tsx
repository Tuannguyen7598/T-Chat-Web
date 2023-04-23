
import { ThemeProvider } from "@mui/material";
import Axios from "axios";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./AppContext";
import { AppRoutes } from "./AppRoutes";
import { AppTheme } from "./AppTheme";
import { AppState } from "./appState/AppState";
import { reducer } from "./appState/reducer";
import { jsx } from "@emotion/react";

export const App = (props: { baseURL: string; initialState: AppState }):jsx.JSX.Element => {
    Axios.defaults.baseURL = props.baseURL;
    const [appState, dispatch] = React.useReducer(reducer, props.initialState);

    return (
        <BrowserRouter>
            <AppContext.Provider value={{ appState, dispatch }}>
                <ThemeProvider theme={AppTheme}>
                    <AppRoutes />
                </ThemeProvider>
            </AppContext.Provider>
        </BrowserRouter>
    );
};

