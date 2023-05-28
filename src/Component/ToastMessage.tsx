import { Alert, AlertProps } from "@material-ui/lab";
import React from "react";
import { toast } from "react-toastify";

export const toastInfo = (message: string | undefined, props: Partial<Omit<AlertProps, "severity" & "color">> = {}): React.ReactText =>
    toast(<Alert severity="info" variant="outlined" onClose={() => null} {...props}>{message}</Alert>, {
        position: "top-center",
        autoClose: 3000,
        type: toast.TYPE.DEFAULT,
    });

export const toastSuccess = (message: string | undefined, props: Partial<Omit<AlertProps, "severity" & "color">> = {}): React.ReactText =>
    toast(<Alert severity="success" variant="outlined" onClose={() => null} {...props}>{message}</Alert>, {
        position: "top-center",
        autoClose: 3000,
        type: toast.TYPE.DEFAULT,
    });

export const toastError = (message: string | undefined, props: Partial<Omit<AlertProps, "severity" & "color">> = {}): React.ReactText =>
    toast(<Alert severity="error" variant="outlined" onClose={() => null} {...props}>{message}</Alert>, {
        position: "top-center",
        autoClose: 3000,
        type: toast.TYPE.DEFAULT,
    });

export const toastWarning = (message: string | undefined, props: Partial<Omit<AlertProps, "severity" & "color">> = {}): React.ReactText =>
    toast(<Alert severity="warning" variant="outlined" onClose={() => null} {...props}>{message}</Alert>, {
        position: "top-center",
        autoClose: 3000,
        type: toast.TYPE.DEFAULT,
    });

    export const toastInvalid = (message: string | undefined, props: Partial<Omit<AlertProps, "severity" & "color">> = {}): React.ReactText =>
    toast(<Alert severity="warning" variant="outlined" onClose={() => null} {...props}>{message}</Alert>, {
        position: "top-center",
        autoClose: 3000,
        type: toast.TYPE.DEFAULT,
    });    
