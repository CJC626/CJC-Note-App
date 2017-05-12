import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoteAppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ NoteAppComponent ],
  bootstrap:    [ NoteAppComponent ]
})
export class NoteAppModule { }
