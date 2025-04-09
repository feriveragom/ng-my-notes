import { Routes } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';
import { NotesComponent } from './pages/notes/notes.component';

export const routes: Routes = [
    {path: "", component: MovieComponent},
    {path: "notes", component: NotesComponent}
];
