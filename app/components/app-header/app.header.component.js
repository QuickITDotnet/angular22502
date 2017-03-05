(function(angular)
{
    'use strict'

    var app = angular.module('quick');
    var appHeaderCtrl = function ($scope,$rootScope) {
        $scope.Name = "Shashank"
        this.lastName = "talhar";
        this.salary = 200000;
        $rootScope.SchoolName="Quick"
    }
    app.component('appHeader', {
        templateUrl: 'app/components/app-header/app.header.component.html?v1.1',
        controller: appHeaderCtrl
    })

})(window.angular)