import { Action } from '@ngrx/store'
import { modAppPlanets } from '../class/modAppPlanets';
import { modAppShips } from '../class/modAppShips';

export const  LOADSHIPS = "[Ships] load";
export const  LOADPLANETS = "[Planets] load";

export class saveShips implements Action{
    readonly type = LOADSHIPS;

    constructor(public payload : modAppShips[]){}
}

export class savePlanets implements Action{
    readonly type = LOADPLANETS;

    constructor(public payload : modAppPlanets[]){}
}


export type MensajeActions = saveShips | savePlanets;