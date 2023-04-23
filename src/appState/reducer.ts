import { Action } from "./Action";
import { AppState } from "./AppState";
import { UserActionType, user } from "./user";

export const reducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        default:
            return state;
    }
};
