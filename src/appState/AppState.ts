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
        if (JSON.parse(localStorage.getItem('islogin') ?? '{}') === true) {
            const user = JSON.parse(localStorage.getItem('user')?? '{}').action
            this.socket = io("http://localhost:3003",{query:{userId: user.id}})
            this.onConect = this.socket.on('connect', () => {
                
                toastSuccess('Connect success')
            })
            this.onDisconect= this.socket.on('disconnect', () => {
                toastSuccess('Disconnected')

            })
        }
    }
    
}
