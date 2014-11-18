'use strict'

angular.module('annuityApp')
  .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    //$locationProvider.html5Mode(true);
  }])
  .run(['$rootScope','$location',function($rootScope,$location){
    // do something when annuityApp run
  }]);