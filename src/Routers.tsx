export class ClientRouter {
    static login = "/login"
    static message = "/message"
    static call = '/call'
    static group = '/group'
    static live = '/live'
}
export class ServerRouter {
    static register = "/register"
    static login = "/login"
    static getUser = "/get-user"
    static uploadImage = "/image"
    static getBoxChatPersonal = (userId: string):string => `/get-box-chat-personal/:${userId}`

}