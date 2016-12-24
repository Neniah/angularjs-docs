import { Component } from "angular2/core"

@Component({
  selector: "my-app",
  templateUrl:"app/view/movies.html"
})
export class AppComponent{
  public title:string = "MOVIES : ANGULAR 2";
  public movie:string =  "Batman vs Superman";
  public director:string = "Zack Snider";
  public year:number = 2016;
}
