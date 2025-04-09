import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import Movie from '../../../models/Movie';

@Component({
  selector: 'app-cinema',
  imports: [],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent implements OnInit {
  movies: Movie[] = [];

  constructor(public moviesService : MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }

  eliminar(name: string) {
    this.movies = this.moviesService.deleteMovies(name);
  }
}
