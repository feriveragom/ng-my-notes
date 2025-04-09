import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { CinemaComponent } from "../../components/cinema/cinema.component";

@Component({
  selector: 'app-movie',
  imports: [HeaderComponent, ReactiveFormsModule, CinemaComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(public movieService: MoviesService){
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [Validators.required, Validators.max(300)]);
    this.director = new FormControl('');
    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    })

  }

  handleSubmit(): void {
    console.log(this.movieForm.value);
    this.movieService.addMovie(this.movieForm.value);
    this.movieForm.reset();
  }
}
