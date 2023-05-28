import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));

export const DraphonyToast = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box >
            <Box clone minWidth="800px">
                <ToastContainer position="bottom-right" transition={Flip} limit={1} closeButton={false} hideProgressBar autoClose={5000} />
            </Box>
        </Box>
    );
};
