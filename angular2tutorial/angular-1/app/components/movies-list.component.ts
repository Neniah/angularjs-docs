import { Component } from "angular2/core"
import { Movie } from "../model/movie"
import { MoviesService} from "../services/movies.service"

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

  constructor(){
    this.showdata = false;

    this.movies = [
      new Movie(1, "Criminal", "Ariel Vromen", "2016"),
      new Movie(2, "Rogue One", "Gareth Edwards", "2016"),
      new Movie(3, "Burnt", "Jhon Wells", "2015"),
      new Movie(4, "Silence", "Martin Scorsese", "2016"),
      new Movie(5, "Kundun", "Martin Scorsese", "1997"),
    ];
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
