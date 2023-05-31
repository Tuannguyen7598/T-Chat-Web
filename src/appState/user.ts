import axios from "axios";
import { AppState } from "./AppState";
import { UserRole } from "../type";
import { io } from "socket.io-client";
import { toastError, toastSuccess } from "../Component/ToastMessage";


export enum UserActionType {
    signin = "user.signin",
    signout = "user.signout",

}

export type UserAction =
    | {
        type: UserActionType.signin;
        accessToken: string;
        id: string;
        username: string;
        role: UserRole
    }
    | {
        type: UserActionType.signout;
        accessToken?: string;
        id?: string;
        username?: string;
        role?: UserRole
    }

export const userLocal = (state: AppState, action: UserAction): AppState => {
    if (action.type === UserActionType.signin) {
        localStorage.setItem('islogin', 'true')
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify({
            action
        }))
        let newAppState:AppState  = {} as any
        newAppState ={
            ...state,
            user: action
        }
     
        
        return newAppState
    }
    if (action.type === UserActionType.signout) {
        localStorage.setItem('islogin', 'false')
    }

    return {} as any
} 