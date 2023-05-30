import { UserDto } from "./user.interface";

export class Friend {
    id: string = ''
    
    userId: string = ''

    listFriend: Array<Pick<UserDto,'id' | 'username'>> = []
    static createObj = (src?: Partial<Friend>): Friend => {
          const obj = new Friend();
          return {
                ...obj,
                ...src,
          };
    };
}