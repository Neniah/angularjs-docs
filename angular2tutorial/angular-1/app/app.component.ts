import { Component } from "angular2/core"

@Component({
  selector: "my-app",
  template: "<h1>{{title}}</h1><p>{{movie}}</p>"
})
export class AppComponent{
  public title = "MOVIES : ANGULAR 2";
  public movie =  "Batman vs Superman";
}
