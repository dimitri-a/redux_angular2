import {Action} from 'redux';
import {TodoActions} from './actions';

export interface AppState {
  items:string[];
}

export const INITIAL_STATE: AppState = {items:[]};

export function rootReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case TodoActions.ADD:
      var newstate = state;
      //todo remove
      debugger;
      newstate.items.push(action.data.data.value);
      return newstate;
  };

default:
  return state;
}
}
