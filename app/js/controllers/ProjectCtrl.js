'use strict';

angular.module('angleApp', ['angleApp.config'])
  .controller('ProjectCtrl',
  ['$scope','$firebase','projects', 'colors',
  function($scope, $firebase, $projects, colors) {

    $scope.projects = $projects;

    $scope.color = function(n){ return colors[n % colors.length]; };

    $scope.addProject = function() {
      var name = $scope.projectName.trim();
      var desc = $scope.projectDesc.trim();
      if (!name.length) {
        return;
      }

      var project = { name: name, desc: desc };

      $scope.projects.$add(project);

      $scope.projectName = '';
      $scope.projectDesc = '';
    };

    $scope.removeProject = function(id) {
      $scope.projects.$remove(id);
    };

    $scope.editProject = function(id) {
      var project = $scope.projects[id];
      var text = project.name.trim();

      var newName = window.prompt('New project name: ', text);
      if (!newName || !newName.length)
        return;

      project.name = newName;
      $scope.projects.$save(id);
    };

}]);