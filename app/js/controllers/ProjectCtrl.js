'use strict';

app.controller('ProjectCtrl',
  ['$scope','$firebase','todos',
  function($scope, $firebase, $projects) {

    $scope.projects = $projects;
}]);