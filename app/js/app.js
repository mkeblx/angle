// app
'use strict';

var url = 'https://boiling-fire-3960.firebaseio.com';

var app = angular.module('angleApp', ['ngRoute','firebase']);


app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectCtrl'
      }).
      when('/projects/:projectId', {
        templateUrl: 'partials/project.html',
        controller: 'ProjectViewCtrl'
      }).
      when('/todos', {
        templateUrl: 'partials/todos.html',
        controller: 'TodoCtrl'
      }).
      otherwise({
        redirectTo: '/projects'
      });

      $locationProvider.html5Mode(true);
  }]);



app.factory('todos', ['$firebase', function($firebase){
  var fireRef = new Firebase(url);

  var sync = $firebase(fireRef);
  return sync.$asArray();
}]);

app.factory('projects', ['$firebase', function($firebase){
  var fireRef = new Firebase(url+'/projects');

  var sync = $firebase(fireRef);
  return sync.$asArray();
}]);
