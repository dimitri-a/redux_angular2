import {Action} from 'redux';
import {TodoActions} from './actions';

export interface AppState {
  items:string["name":"Jojo"];
}

export const INITIAL_STATE: AppState = {items:[]};

export function rootReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case TodoActions.ADD:
      var newstate = state.items;
      debugger
      newstate.push(action.data.data.value);
      return newstate;
  };

default:
  return state;
}
}
