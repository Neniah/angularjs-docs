System.register(["../model/movie"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var movie_1;
    var MOVIES;
    return {
        setters:[
            function (movie_1_1) {
                movie_1 = movie_1_1;
            }],
        execute: function() {
            exports_1("MOVIES", MOVIES = [
                new movie_1.Movie(1, "Criminal", "Ariel Vromen", "2016"),
                new movie_1.Movie(2, "Rogue One", "Gareth Edwards", "2016"),
                new movie_1.Movie(3, "Burnt", "Jhon Wells", "2015"),
                new movie_1.Movie(4, "Silence", "Martin Scorsese", "2016"),
                new movie_1.Movie(5, "Kundun", "Martin Scorsese", "1997"),
                new movie_1.Movie(6, "The Shape Of The Things", "Neil LaBute", "2003")
            ]);
        }
    }
});
//# sourceMappingURL=mock.movies.js.map