'use strict';

angular.module('angleApp.routes', ['ngRoute'])
  .config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
      $routeProvider
        .when('/projects', {
          templateUrl: 'partials/projects.html',
          controller: 'ProjectCtrl'
        })
        .when('/projects/:id', {
          templateUrl: 'partials/project.html',
          controller: 'ProjectViewCtrl'
        })
        .when('/todos', {
          templateUrl: 'partials/todos.html',
          controller: 'TodoCtrl'
        })
        .when('/lists', {
          templateUrl: 'partials/lists.html',
          controller: 'ListCtrl'
        })
        .otherwise({
          redirectTo: '/projects'
        });

        $locationProvider.html5Mode(true);
    }]);