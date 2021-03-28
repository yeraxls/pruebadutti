import { Action } from "@ngrx/store"
import * as fromGeneral  from './actions/general.action';
import { modAppPlanets } from "./class/modAppPlanets";
import { modAppShips } from "./class/modAppShips";
export interface appState {
    ships: modAppShips[],
    planets: modAppPlanets[]
}

export const initialState = {
    ships: [],
    planets:[]
}

export function miReducer(state: appState = initialState, action: fromGeneral.MensajeActions) {
    console.log(action);
    switch (action.type) {
        case fromGeneral.LOADSHIPS:
            return {
                ...state,
                ships: action.payload
            }
            break;
            case fromGeneral.LOADPLANETS:
            return {
                ...state,
                planets: action.payload
            }
            break;
        default:
            return state;
    }

}