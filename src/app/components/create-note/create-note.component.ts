import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import Note from '../../../models/Note';

@Component({
  selector: 'app-create-note',
  imports: [FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent {
  noteTitle: string = '';

  constructor(public noteService: NoteService){}

  handleSubmit = () => {
    if (!this.noteTitle) return;

    const newNote: Note = {
      id: this.noteService.createdId(),
      title: this.noteTitle,
      marked: false
    }
    
    this.createNote(newNote);
  }

  createNote(newNote: Note) {
    this.noteService.createNote(newNote).subscribe({
      next: () => {
        this.noteTitle = '';
        this.getNotes();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  getNotes(){
    this.noteService.getNotes().subscribe({
      next: (data) => {
        this.noteService.notes = data.reverse()
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
}
