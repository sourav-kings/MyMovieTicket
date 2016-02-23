angular.module('myMovieTicketApp')
    .controller('myMovieTicketController', function ($scope) {
        $scope.welcomeMessage = "Welcome to My Movie Ticket ! ";
    });

//myMovieTicketApp.config(['$routeProvider',
//    function ($routeProvider) {
//        $routeProvider.
//            when('/movies', {
//                templateUrl: 'Movies.html',
//                controller: 'moviesController',
//                controllerAs: 'vm'
//            }).
//            when('/theaters', {
//                templateUrl: 'Theaters.html',
//                controller: 'theatersController'
//            }).
//            otherwise({
//                redirectTo: '/'
//            });
//    }]);

//myMovieTicketApp.controller('moviesController', function ($scope, $routeParams) {
//    $scope.welcomeMessageMovie = "Welcome to Movies page ! ";
//});

//myMovieTicketApp.controller('theatersController', function ($scope, $routeParams) {
//    $scope.welcomeMessageTheater = "Welcome to Theaters Page ! ";
//});