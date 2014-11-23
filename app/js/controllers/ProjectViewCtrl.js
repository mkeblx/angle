'use strict';

app.controller('ProjectViewCtrl',
  ['$scope','$routeParams','$firebase','projects',
  function($scope, $routeParams, $firebase, $projects) {

    $scope.projectId = $routeParams.projectId;

    $scope.project = $projects[$scope.projectId];

    $scope.editProject = function(id) {
      var project = $scope.projects[id];
      var text = project.name.trim();

      var newName = window.prompt('New project name: ', text);
      if (!newName.length)
        return;

      project.name = newName;
      $scope.projects.$save(id);
    };

}]);