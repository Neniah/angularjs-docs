import { Injectable } from "angular2/core"
import { MOVIES } from "./mock.movies"
import { Movie } from "../model/movie"

@Injectable()
export class MoviesService{

  getMovies(){
    return MOVIES;
  }

  insertMovie(movie: Movie){
    Promise.resolve(MOVIES).then((movies: Movie[]) => movies.push(movie));
  }
}
