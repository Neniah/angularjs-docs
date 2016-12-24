import { Component } from "angular2/core"

@Component({
  selector: "my-app",
  template: "<h1>{{title}}</h1><p>Title : {{movie}} <br> Director: {{director}} <br> Year: {{year}}</p>"
})
export class AppComponent{
  public title:string = "MOVIES : ANGULAR 2";
  public movie:string =  "Batman vs Superman";
  public director:string = "Zack Snider";
  public year:number = 2016;
}
