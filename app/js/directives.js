'use strict';

angular.module('angleApp.directives', [])
  .directive('todoList', function(){
    return {
      restrict: 'AE',
      replace: true,
      /*scope: {
      	todos: '='
      },*/
      templateUrl: 'partials/todo-list.html'
    };
  });