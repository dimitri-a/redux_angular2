import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';

@Injectable()
export class TodoActions {
  static ADD = 'ADD';
  static REMOVE = 'REMOVE';

  constructor(private ngRedux: NgRedux<AppState>) {}

  add(data) {
    this.ngRedux.dispatch({ type: TodoActions.ADD,data:data });
  }

  remove() {
    this.ngRedux.dispatch({ type: TodoActions.REMOVE });
  }
}
