import { Action } from '@ngrx/store';
import { ActionTypes } from './drinks.action';
import { Beverage } from '../models/beer';


export const initialState = {
    drinks: [],
};

export function counterReducer(state = initialState, action: ActionTypes.Actions) {
  switch (action.type) {
    case ActionTypes.Add:
      return state.drinks[action.payload.type].push(action.payload.drink);

    case ActionTypes.Remove:
        return state.drinks[action.payload.type].filter((value: Beverage) => {
            return value.id !== action.payload.drink.id;
        });

    case ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}
