import { Action } from '@ngrx/store'
import { modAppShips } from '../class/modAppShips';

export const  LOAD = "[Ships] load";

export class saveShips implements Action{
    readonly type = LOAD;

    constructor(public payload : modAppShips[]){}
}


export type MensajeActions = saveShips;