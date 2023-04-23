import axios from "axios";
import { AppState } from "./AppState";


export enum UserActionType {
    signin = "user.signin",
    signout = "user.signout",
    trainersFetched = "user.trainerFetched",
    trainerCreate = "user.trainerCreate",
    trainerUpdate = "user.trainerUpdate",
    change = "change",
}

export type UserAction =
    | {
          type: UserActionType.signin;
          accessToken: string;
          id: string;
          name: string;
      }
    | {
          type: UserActionType.signout;
      }
    | {
          type: UserActionType.trainersFetched;
          
      }
    | {
          type: UserActionType.trainerCreate;
         
      }
    | {
          type: UserActionType.trainerUpdate;
        
      }
    | {
          type: UserActionType.change;
      };

export const user = (state: AppState, action: UserAction) => {
    switch (action.type) {
        case UserActionType.signin:
            localStorage.setItem("user.accessToken", action.accessToken);
            return {
                ...state,
            };

}};
