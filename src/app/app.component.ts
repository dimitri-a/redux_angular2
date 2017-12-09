import { Component } from '@angular/core';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';
import { TodoActions } from './actions';
import { AppState, INITIAL_STATE, rootReducer } from './store';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  template: `    
    <input type="text" #edit />
    <button (click)="actions.add({data:edit,action:'ADD'})">add</button>
    <p>The list is:</p>
    <ul>
      <li *ngFor="let item of (items | async)">
        {{item}}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select() readonly items$: Observable<string[]>;

  constructor(
    ngRedux: NgRedux<AppState>,
    devTools: DevToolsExtension,
    private actions: TodoActions) {

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      null,
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    //console.log('AppState=',this.AppState);
  }
}
