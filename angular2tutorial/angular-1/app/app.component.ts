import { Component } from "angular2/core"

@Component({
  selector: "my-app",
  template: "<h1>{{title}} from Angular2</h1>"
})
export class AppComponent{
  public title = "Hello World";
}
