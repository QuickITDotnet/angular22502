(function (angular) {
    'use strict'
    var app = angular.module('quick');
    app.filter('substr', function () {

        return function (input,count,start) {

            return input.substr(start, count);
        }
    })
   
}
)(window.angular)