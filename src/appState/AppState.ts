import Axios from "axios"
import { UserDto } from "../type"
export class AppState {
    isLogin = localStorage.getItem('islogin') ?? 'false';
    user = {
        id: localStorage.getItem('user.id') ?? "",
        username: localStorage.getItem('user.username') ?? "",
        passWord: localStorage.getItem('user.passWord') ?? "",
        role: localStorage.getItem('user.role')
    }
  

    constructor() {
       
    }
}
