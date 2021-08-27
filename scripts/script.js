var myApp = angular.module("myModule",[]);
var myController = function($scope){
    $scope.message= "AngulatJS tutorial";
}

myApp.controller("myController",myController);