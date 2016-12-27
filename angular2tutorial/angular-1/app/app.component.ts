import { Component } from "angular2/core"
import { Movie } from "./model/movie"
import { MoviesListComponent } from "./components/movies-list.component" 

@Component({
  selector: "my-app",
  templateUrl:"app/view/movies.html",
  styleUrls: ["../assets/css/styles.css"]
})
export class AppComponent{
  public title:string = "Movies on Angular 2";
  public movie:Movie;
  public showdata:boolean;
  public movies;

  constructor(){
    this.showdata = false;
    this.movie = new Movie(1, "Batman vs Superman", "Zack Snider", "2016");

    this.movies = [
      new Movie(1, "Criminal", "Ariel Vromen", "2016"),
      new Movie(2, "Rogue One", "Gareth Edwards", "2016"),
      new Movie(3, "Burnt", "Jhon Wells", ""),
      new Movie(4, "Silence", "Martin Scorsese", "2016"),
      new Movie(5, "Kundun", "Martin Scorsese", "1997")
    ];
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


}
