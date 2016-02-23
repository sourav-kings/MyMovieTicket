angular.module('myMovieTicketApp')
    .service('sharedProperties', function () {
        var theaters = [
            { TheaterId: 1, TheaterName: 'PVR' },
            { TheaterId: 2, TheaterName: 'INOX' },
            { TheaterId: 3, TheaterName: 'CINEMAX' }
        ]

        return {
            getTheaters: function () {
                return theaters;
            },
            setTheaters: function (value) {
                theaters = value;
            }
        };
    });