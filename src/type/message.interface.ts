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
    userOneId: string = ''
    userTwoId: string = ''
    createAt : Date = new Date()

    static createObj = (src?: Partial<BoxChatPersonal>): BoxChatPersonal => {
        const obj = new BoxChatPersonal();
        return {
              ...obj,
              ...src,
        };
  };
}

export class MessageDetail {
    id: string = uuid()
    boxChatId: string
    from:string
    to:string
    type: TypeMessage = TypeMessage.Text
    pathImg:Array<string> = []
    content : string = ''
    reaction: Array<Reaction> = []
    createAt : Date = new Date()
    isDelete: boolean = false
    isSeen: boolean = false

    static createObj = (src?: Partial<MessageDetail>): MessageDetail => {
        const obj = new MessageDetail();
        return {
              ...obj,
              ...src,
        };
  };
}