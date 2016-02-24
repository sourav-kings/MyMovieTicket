angular.module('myMovieTicketApp')
    .config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/movies', {
                templateUrl: '../Views/Movies.html',
                controller: 'moviesController'
            }).
            when('/theaters', {
                templateUrl: '../Views/Theaters.html',
                controller: 'theatersController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);