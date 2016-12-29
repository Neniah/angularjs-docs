import { Injectable } from "angular2/core"
import { MOVIES} from "./mock.movies"

@Injectable()
export class MoviesService{

  getMovies(){
    return MOVIES;
  }
}
