import { Component, input } from '@angular/core';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-card',
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  note = input<Note>();

  constructor(public noteService: NoteService) { }

  updateTitle(id: any, event: Event) {
    if(!id) return;
    const inputHtml = event.target as HTMLInputElement;
    this.noteService.updateTitle(id, inputHtml.value);
  }

  updateMarked(id: any) {
    if(!id) return;
    this.noteService.updateMarket(id);
  }
}
