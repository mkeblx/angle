'use strict';

app.controller('ProjectViewCtrl',
  ['$scope','$routeParams','$firebase','projects',
  function($scope, $routeParams, $firebase, $projects) {

    $scope.projectId = $routeParams.id;

    $scope.project = $projects[$scope.projectId];

    $scope.editProject = function() {
      var project = $scope.project;
      var text = project.name;

      var newName = window.prompt('New project name: ', text);
      if (!newName.length)
        return;

      project.name = newName;
      $scope.projects.$save($scope.projectId);
    };

}]);