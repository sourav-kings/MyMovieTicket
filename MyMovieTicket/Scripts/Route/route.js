angular.module('myMovieTicketApp')
    .config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/movies', {
                templateUrl: 'Movies.html',
                controller: 'moviesController'
            }).
            when('/theaters', {
                templateUrl: 'Theaters.html',
                controller: 'theatersController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);