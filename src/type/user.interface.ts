import { v4 as uuid } from "uuid";
export enum UserRole {
      admin = "admin",
      user = "user",
}

export class Credentials {
      password: string
      salt: string
      static createObj = (src?: Partial<Credentials>): Credentials => {
            const obj = new Credentials();
            return {
                  ...obj,
                  ...src,
            };
      };
};

export class UserDto {
      id: string = uuid()
      username: string = ""
      credentials: Credentials // ??????
      role: UserRole = UserRole.user;
      createAt: Date = new Date()
      deleteAt: Date = new Date()
      updateAt: Date = new Date()

      static createObj = (src?: Partial<UserDto>): UserDto => {
            const obj = new UserDto();
            return {
                  ...obj,
                  ...src,
            };
      };
}

export class Message {
      id: string
}