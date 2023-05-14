import { Alert, AlertColor, AlertTitle } from '@mui/material';
import { useState } from 'react';
interface Iprop {
    severity: AlertColor;
    children: string

}
export function MyAlert(props: Iprop) {

    return (
        <Alert severity={props.severity}>
            {props.children}
        </Alert>
    );
}