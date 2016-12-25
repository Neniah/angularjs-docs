System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Movie;
    return {
        setters:[],
        execute: function() {
            Movie = (function () {
                function Movie(id, title, director, year) {
                    this.id = id;
                    this.title = title;
                    this.director = director;
                    this.year = year;
                }
                return Movie;
            }());
            exports_1("Movie", Movie);
        }
    }
});
//# sourceMappingURL=movie.js.map