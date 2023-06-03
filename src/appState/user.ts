import { io } from "socket.io-client";
import { toastError, toastSuccess } from "../Component/ToastMessage";
import { UserRole } from "../type";
import { AppState } from "./AppState";
import { befor } from "../lib/reload.app";


export enum UserActionType {
    signin = "user.signin",
    signout = "user.signout",

}

export type UserAction =
    | {
        type: UserActionType.signin;
        isUserCurrent: boolean;
        accessToken: string;
        id: string;
        username: string;
        role: UserRole
    }
    | {
        type: UserActionType.signout;
        accessToken?: string;
        isUserCurrent?: boolean;
        id?: string;
        username?: string;
        role?: UserRole
    }

export const userLocal = (state: AppState, action: UserAction): AppState => {
    if (action.type === UserActionType.signin) {
      
        let listUser: Array<UserAction> = JSON.parse(localStorage.getItem('user') ?? '[]') ?? []
       
        
        if (listUser && listUser.findIndex(x => x.id === action.id) !== -1) {
       
            listUser.forEach((x) => {
                if (x.id === action.id) {
                    x.isUserCurrent = true
                } else {
                    x.isUserCurrent = false
                }
            })
            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(listUser))
            const newApp = new AppState(action,befor(action))
            return newApp
        }
     
       
        localStorage.removeItem('user')
        localStorage.setItem('user',JSON.stringify([...listUser,action]))
        const newAppState = new AppState(action,befor(action))
        return newAppState
    }
    if (action.type === UserActionType.signout) {
        localStorage.setItem('islogin', 'false')
    }

    return {} as any
} 