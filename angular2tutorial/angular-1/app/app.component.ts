import { Component } from "angular2/core"
import { Movie } from "./model/movie"

@Component({
  selector: "my-app",
  templateUrl:"app/view/movies.html"
})
export class AppComponent{
  public title:string;
  public movie:Movie;


  constructor(){
    this.movie = new Movie(1, "Batman vs Superman", "Zack Snider", 2016);
    this.debug();
  }

  debug(){
    console.log(this.movie);
  }
}
