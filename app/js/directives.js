'use strict';

angular.module('angleApp.directives', [])
  .directive('todoList', function(){
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'partials/todo-list.html'
    };
  });