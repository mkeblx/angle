'use strict';

app.controller('TodoCtrl',
  ['$scope','$firebase','todos',
  function($scope, $firebase, $todos) {

    $scope.todos = $todos;

    //$todos.$bindTo($scope, '_todos');

    $scope.addTodo = function() {
      var text = $scope.todoText.trim();
      if (!text.length) {
        return;
      }

      var todo = { text: text, done: false };

      $scope.todos.$add(todo);
      $scope.todoText = '';
    };

    $scope.removeTodo = function(id) {
      $scope.todos.$remove(id);
    };

    $scope.editTodo = function(id) {
      var todo = $scope.todos[id];
      var text = todo.text.trim();

      var newText = window.prompt('New todo text: ', text);
      if (!newText.length)
        return;

      todo.text = newText;
      $scope.todos.$save(id);

      return;
      $scope.removeTodo(id);
    };

    $scope.toggleCompleted = function(id) {
      var todo = $scope.todos[id];
      //todo.completed = !todo.completed;
      $scope.todos.$save(id);
    };

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        //if (!todo.done) $scope.todos.$add(todo);
      });
    };
}]);