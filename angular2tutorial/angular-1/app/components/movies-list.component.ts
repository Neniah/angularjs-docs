import { Component } from "angular2/core"
import { Movie } from "../model/movie"
import { MoviesService } from "../services/movies.service"

@Component({
  selector: "movies-list",
  templateUrl:"app/view/movies-list.html",
  providers: [MoviesService]
})
export class MoviesListComponent{

  public movie:Movie;
  public selectedMovie:Movie;
  public showdata:boolean;
  public movies;

  public dataService;

  constructor(private _moviesService: MoviesService){

    console.log(this.dataService);
    this.showdata = false;

    this.movies = this._moviesService.getMovies();

    this.selectedMovie = this.movies[0];
    this.movie = this.movies[0];
    this.debug();
  }

  debug(){
    console.log(this.movie);
  }

  onSelect(value){
    this.showdata = value;
  }

  onLog(title = null){
    if (title == null){
      console.log(this.movie);
    } else {
      console.log(this.movie.title);
    }
  }

  onChangeMovie(movie){
    this.movie = movie;
    this.selectedMovie = movie;
  }


}
