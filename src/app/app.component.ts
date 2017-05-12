import { Component } from '@angular/core';

export class Note{
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'note-app',
  template: `<h1>{{title}}</h1>
            <h2>{{note1.title}}</h2>
            <h3>{{note1.content}}</h3>
        `,
})
export class NoteAppComponent  { 
  title = "Chris's Notes";
  note1 : Note = {
    id:1,
    title: "Chris's First Note",
    content: "The Content of Chris's First Note."
  };
 }
