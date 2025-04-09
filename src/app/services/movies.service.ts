import { Injectable } from '@angular/core';
import Movie from '../../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] = [];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  deleteMovies(name: string): Movie[] {
    this.movies = this.movies.filter(movie => movie.name !== name);
    return this.movies;
  }

}
