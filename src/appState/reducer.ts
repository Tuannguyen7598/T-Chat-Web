import { Action } from "./Action";
import { AppState } from "./AppState";
import { UserActionType, userLocal } from "./user";

export const reducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case UserActionType.signin,
            UserActionType.signout
            :
            return userLocal(state, action)


        default:
            return userLocal(state, action);
    }
};
