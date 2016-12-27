System.register(["angular2/core", "../model/movie", "../services/movies.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movie_1, movies_service_1;
    var MoviesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_1_1) {
                movie_1 = movie_1_1;
            },
            function (movies_service_1_1) {
                movies_service_1 = movies_service_1_1;
            }],
        execute: function() {
            MoviesListComponent = (function () {
                function MoviesListComponent() {
                    this.showdata = false;
                    this.movies = [
                        new movie_1.Movie(1, "Criminal", "Ariel Vromen", "2016"),
                        new movie_1.Movie(2, "Rogue One", "Gareth Edwards", "2016"),
                        new movie_1.Movie(3, "Burnt", "Jhon Wells", "2015"),
                        new movie_1.Movie(4, "Silence", "Martin Scorsese", "2016"),
                        new movie_1.Movie(5, "Kundun", "Martin Scorsese", "1997"),
                    ];
                    this.selectedMovie = this.movies[0];
                    this.movie = this.movies[0];
                    this.debug();
                }
                MoviesListComponent.prototype.debug = function () {
                    console.log(this.movie);
                };
                MoviesListComponent.prototype.onSelect = function (value) {
                    this.showdata = value;
                };
                MoviesListComponent.prototype.onLog = function (title) {
                    if (title === void 0) { title = null; }
                    if (title == null) {
                        console.log(this.movie);
                    }
                    else {
                        console.log(this.movie.title);
                    }
                };
                MoviesListComponent.prototype.onChangeMovie = function (movie) {
                    this.movie = movie;
                    this.selectedMovie = movie;
                };
                MoviesListComponent = __decorate([
                    core_1.Component({
                        selector: "movies-list",
                        templateUrl: "app/view/movies-list.html",
                        providers: [movies_service_1.MoviesService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoviesListComponent);
                return MoviesListComponent;
            }());
            exports_1("MoviesListComponent", MoviesListComponent);
        }
    }
});
//# sourceMappingURL=movies-list.component.js.map