import { Component } from "angular2/core"
import { Movie } from "./model/movie"

@Component({
  selector: "my-app",
  templateUrl:"app/view/movies.html",
  styleUrls: ["../assets/css/styles.css"]
})
export class AppComponent{
  public title:string = "Movies on Angular 2";
  public movie:Movie;
  public showdata:boolean;

  constructor(){
    this.showdata = false;
    this.movie = new Movie(1, "Batman vs Superman", "Zack Snider", 2016);
    this.debug();
  }

  debug(){
    console.log(this.movie);
  }

  showData(){
    this.showdata = true;
  }

  hideData(){
    this.showdata = false;
  }
}
