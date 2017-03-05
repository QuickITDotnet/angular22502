(function(angular)
{
    'use strict'

    var app = angular.module('quick');
    var appStudentAddCtrl = function ($scope,$rootScope) {
        //$scope.name = 'Jayant1'
    }
    app.component('appStudentAdd', {
        templateUrl: 'app/components/app-student-add/app.student-add.component.html?v1.1',
        controller: appStudentAddCtrl
    })

})(window.angular)