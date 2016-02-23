
angular.module('myMovieTicketApp')
.controller('moviesController', ['$scope', '$routeParams', 'sharedProperties', function ($scope, $routeParams, sharedProperties) {
    $scope.welcomeMessageMovie = "Welcome to Movies page ! ";

    $scope.showSeatSelectionForm = false;
    $scope.movies = [
        { MovieId: 1, MovieName: 'The NoteBook', ImgUrl:  '../Content/Images/1.jpeg', Selected: false},
        { MovieId: 2, MovieName: '300', ImgUrl: '../Content/Images/2.jpg', Selected: false },
        { MovieId: 3, MovieName: 'The Dark Knight', ImgUrl: '../Content/Images/3.jpg', Selected: false },
        { MovieId: 4, MovieName: 'A Beautiful Mind', ImgUrl: '../Content/Images/4.jpg', Selected: false },
        { MovieId: 5, MovieName: 'The Pursuit of Happyness', ImgUrl: '../Content/Images/5.jpg', Selected: false }
    ]

    $scope.bookTicket = function (movieId) {

        $scope.showBookingForm = true;
        var result = $scope.movies.filter(function (obj) {
            return obj.MovieId == movieId;
        });
        result[0].Selected = true;

        $scope.selectedMovie = { MovieId: movieId, Theater: 1, ShowDay: new Date(), ShowTime: 1, Quantity: 1};
        //alert('Thanks for booking:- ' + movieId)
    }

    $scope.availableTheaters = sharedProperties.getTheaters();

    $scope.showTimings = [
        { ShowTimeId: 1, ShowTimeHour: '10:00 AM' },
        { ShowTimeId: 2, ShowTimeHour: '01:00 PM' },
        { ShowTimeId: 3, ShowTimeHour: '04:00 PM' },
        { ShowTimeId: 4, ShowTimeHour: '07:00 PM' },
        { ShowTimeId: 5, ShowTimeHour: '10:00 PM' }
    ]

    $scope.proceedSeatSelection = function () {
        console.log('$scope.selectedMovie:- ', $scope.selectedMovie);
        //$scope.showBookingForm = false;
        $scope.showSeatSelectionForm = true;
    }

    $scope.reset = function (movieId) {
        $scope.showSeatSelectionForm = false;
        $scope.showBookingForm = false;
        var result = $scope.movies.filter(function (obj) {
            return obj.MovieId == movieId;
        });
        result[0].Selected = false;

        $scope.totalSeats.filter(
            function (obj) {
                if (obj.AlreadyBooked) {
                    obj.AlreadyBooked = false;
                    obj.ImgUrl = '../Content/Images/seat_available.png';
                }
        });
    }

    $scope.totalSeats = generateTotalSeats(28)
    function generateTotalSeats(count) {
        var totalSeats = []
        var i = 1;
        while (i < count+1) {
            totalSeats.push({ SeatId: i, AlreadyBooked: false, ImgUrl: '../Content/Images/seat_available.png' });
            i++;
        }
        return totalSeats;
    }

    var selectedSeats = [];
    $scope.seatChoiceSelection = function (seatId) {
        if (selectedSeats.length+1 > $scope.selectedMovie.Quantity) {
            toggleSeats(selectedSeats[0].SeatId);
            selectedSeats.splice(0, 1);
        }
        toggleSeats(seatId);

    }
    function toggleSeats(seatId) {
        var result = $scope.totalSeats.filter(function (obj) {
            return obj.SeatId == seatId;
        });
        if (result[0].AlreadyBooked) {
            result[0].AlreadyBooked = false;
            result[0].ImgUrl = '../Content/Images/seat_available.png';
        }
        else {
            result[0].AlreadyBooked = true;
            result[0].ImgUrl = '../Content/Images/seat_booked.png';
            selectedSeats.push(result[0]);
        }
    }
   
    $scope.cancelSeatSelection = function () {
        $scope.showSeatSelectionForm = false;
        $scope.showBookingForm = true;
    };

    $scope.confirmBooking = function () {
        alert('Congratulations, your tickets have been booked !')
    }
    
}]);