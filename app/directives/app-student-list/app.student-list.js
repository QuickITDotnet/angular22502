(function(angular){
	'use strict'
	var app = angular.module('quick');

	var appStudentListCtrl = function ($scope,$rootScope) {
        
    }
    app.directive('appStudentListDir', function(){
    	return{
    		//replace: true,
    		scope : {
    			name : '@'
    		},
	        templateUrl: 'app/directives/app-student-list/app.student-list.html',
	        controller: appStudentListCtrl
	        }
    })
})(window.angular)