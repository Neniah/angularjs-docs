import { Component } from "angular2/core"
import { Movie } from "../model/movie"
import { Router } from "angular2/router"
import { MoviesService } from "../services/movies.service"


@Component({
  templateUrl:"app/view/add-movie.html",
})

export class AddMovieComponent{

  constructor(private _moviesService, private _router: Router){

  }

  onAddMovie(title, director, year){
    let movie: Movie = new Movie(77, title, director, year);
    this._moviesService.insertMovie(movie);


  }

}
