(function(angular)
{
    'use strict'

    var app = angular.module('quick');
    var appStudentListCtrl = function ($scope,$rootScope) {
        $scope.name = 'Jayant1'
    }
    app.component('appStudentList', {
        templateUrl: 'app/components/app-student-list/app.student-list.component.html?v1.1',
        controller: appStudentListCtrl
    })

})(window.angular)