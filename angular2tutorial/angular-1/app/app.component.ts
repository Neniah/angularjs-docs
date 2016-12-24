import { Component } from "angular2/core"

@Component({
  selector: "my-app",
  templateUrl:"app/view/movies.html"
})
export class AppComponent{
  public title:string;
  public movie:string;
  public director:string;
  public year:number;

  constructor(){
    this.title = "Movies with Angular 2"
    this.movie = "The Revenant";
    this.director = "Alejandro Gonzalez";
    this.year = 2015;
  }
}
