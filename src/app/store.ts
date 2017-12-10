import {Action} from 'redux';
import {TodoActions} from './actions';

export interface AppState {
  items:string[];
}

export const INITIAL_STATE: AppState = {items:[]};

export function rootReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case TodoActions.ADD:
    return {...state,items:[...state.items,action.data.data.value]};
  };

default:
  return state;
}
}
