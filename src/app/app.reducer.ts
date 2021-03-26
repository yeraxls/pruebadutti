import { Action } from "@ngrx/store"
import * as fromShips  from './actions/ships.action';
export interface appState {
    ships: any[]
}

export const initialState = {
    ships: []
}

export function miReducer(state: appState = initialState, action: fromShips.MensajeActions) {
    console.log(action);
    switch (action.type) {
        case fromShips.LOAD:
            return {
                ...state,
                ships: action.payload
            }
            break;
        default:
            return state;
    }

}