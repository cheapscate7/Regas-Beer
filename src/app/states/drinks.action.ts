import { Action } from '@ngrx/store';
import { Beverage } from '../models/beer';
import { BeverageOptions } from '../types/beverageOptions';

export enum ActionTypes {
  Add = '[Drinks] Add',
  Remove = '[Drinks] Remove',
  Update = '[Drinks] Update',
  Reset = '[Drinks] Reset',
}

export class Add implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: {type: BeverageOptions, drink: Beverage}) {}
}

export class Remove implements Action {
    readonly type = ActionTypes.Remove;

    constructor(public payload: {type: BeverageOptions, drink: Beverage}) {}
}


export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}

export type Actions = Add | Remove | Reset;
