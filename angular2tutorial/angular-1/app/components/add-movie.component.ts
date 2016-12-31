import { Component } from "angular2/core"
import { Movie } from "../model/movie"
import { Router } from "angular2/router"

@Component({
  templateUrl:"app/view/add-movie.html",
})

export class AddMovieComponent{

  onAddMovie(title, director, year){
    let movie: Movie = new Movie(77, title, director, year);

    console.log(movie);
  }

}
