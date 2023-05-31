import io, { Socket } from "socket.io-client";
import { toastError, toastSuccess } from "../Component/ToastMessage";
import { UserAction } from "./user";
export class AppState {
    isLogin = JSON.parse(localStorage.getItem('islogin') ?? '{}') ?? 'false';
    user: UserAction = JSON.parse(localStorage.getItem('user') ?? '{}').action ?? {}
    socket: Socket
    onConect: any
    onDisconect: any
    constructor() {
        const user = this.user
       
            this.socket = io("http://localhost:3003", { query: { token: user.accessToken ?? '' } })
            this.onConect = this.socket.on('connect', () => {
                toastSuccess('Connect success')
            })
            this.onDisconect = this.socket.on('disconnect', () => {
                toastError('Disconnected')

            })
        


    }

}
