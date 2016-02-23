angular.module('myMovieTicketApp')
    .controller('theatersController', function ($scope, $routeParams, $location, sharedProperties) {
        $scope.welcomeMessageTheater = "Welcome to Theaters Page ! ";

        //$scope.theaters = [
        //    { TheaterId: 1, TheaterName: 'PVR', ImgUrl: '../Content/Images/1.jpeg' },
        //    { TheaterId: 2, TheaterName: 'INOX', ImgUrl: '../Content/Images/2.jpg' },
        //    { TheaterId: 3, TheaterName: 'CINEMAX', ImgUrl: '../Content/Images/3.jpg' }
        //]
        $scope.availableTheaters = sharedProperties.getTheaters();
        $scope.findMovies = function () {
            $location.path("/movies");
        }
});