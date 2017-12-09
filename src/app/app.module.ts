import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';
import { TodoActions} from './actions';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgReduxModule
  ],
  providers: [TodoActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
