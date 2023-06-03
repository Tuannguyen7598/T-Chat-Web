import io, { Socket } from "socket.io-client";
import { toastError, toastSuccess } from "../Component/ToastMessage";
import { UserAction } from "./user";
import { befor } from "../lib/reload.app";
export class AppState {
    listUserLocal: Array<UserAction> = JSON.parse(localStorage.getItem('user') ?? '[]') ?? []
    userCurrent: UserAction
    socket: Socket
    onConect: any
    beforUnload: any
    onDisconect: any
    constructor(userLogin?: UserAction, beforUnload?: any) {
        const listUser = this.listUserLocal
        const userCurrecnt = listUser.find(x=> x.isUserCurrent === true)
        
        if (listUser &&  userCurrecnt !== undefined && userCurrecnt !== null) {
            this.socket = io("http://localhost:3003", { query: { token: userCurrecnt?.accessToken ?? '' } })
            this.onConect = this.socket.on('connect', () => {
                toastSuccess('Connect success')
            })
            this.onDisconect = this.socket.on('disconnect', () => {
                toastError('Disconnected')

            })
            this.userCurrent = userCurrecnt
        }

        if (userLogin !== null && userLogin !== undefined) {
            this.userCurrent = userLogin
        }
        if (beforUnload !== null && beforUnload !== undefined) {
            this.beforUnload = beforUnload
            return
        }
      
        this.beforUnload = befor(this.userCurrent)


    }

}
