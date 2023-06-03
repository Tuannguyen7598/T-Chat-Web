import { v4 as uuid } from "uuid";
import { UserDto } from "./user.interface"

export enum TypeMessage {
    Text = "Text",
    Image = " Image",
    video = "Video",
    File = "File"

}
export enum TypeReaction {
    Love = "Love",
    Like = "Like",
    HaHa = "HaHa",
    Boring = "Boring"
}
export interface Reaction {
    type: TypeReaction,
    total: number
}
export class BoxChatPersonal {
    id: string = uuid()
    userOne: Pick<UserDto,'id' | 'username'>
    userTwo: Pick<UserDto,'id' | 'username'>
    createAt : Date = new Date()

    static createObj = (src?: Partial<BoxChatPersonal>): BoxChatPersonal => {
        const obj = new BoxChatPersonal();
        return {
              ...obj,
              ...src,
        };
  };
}

export class Message {
    id: string = uuid()
    boxChatId: string
    type: TypeMessage = TypeMessage.Text
    content : string = ''
    reaction: Array<Reaction> = []
    createAt : Date = new Date()
    isDelete: boolean = false

    static createObj = (src?: Partial<Message>): Message => {
        const obj = new Message();
        return {
              ...obj,
              ...src,
        };
  };
}