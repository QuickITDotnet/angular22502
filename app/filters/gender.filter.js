(function (angular) {
    'use strict'
    var app = angular.module('quick');
    app.filter('gender', function () {

        return function (input) {

            if(input=='M')
            {
                return 'Male:';
            }
            else {
                return 'Female:';
            }
        }
    })
   
}
)(window.angular)