(function(angular){
	'use strict'
	var app = angular.module('quick');

	var appStudentAddCtrl = function ($scope,$rootScope) {

    }
    app.directive('appStudentAddDir', function(){
    	return{
    		//replace: true,
    		scope : {
    			name : '@'
    		},
	        templateUrl: 'app/directives/app-student-add/app.student-add.html',
	        controller: appStudentAddCtrl
	    }
    })
})(window.angular)