import { Injectable } from "angular2/core"

@Injectable()
export class MoviesService{
  getMovies(){
    return "Hello World from a service";
  }
}
