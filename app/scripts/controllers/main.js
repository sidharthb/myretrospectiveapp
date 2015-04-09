'use strict';

angular.module('myRetrospectiveAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://localhost:9002/retrospectives').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
