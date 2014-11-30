'use strict';

angular.module('angleApp.controllers', ['firebase.utils'])

  //
  .controller('ProjectCtrl', ['$scope','fbutil','projects','COLORS',
    function($scope, fbutil, projects, colors) {

    $scope.projects = projects;

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

  }])

  //
  .controller('ProjectViewCtrl', ['$scope','$routeParams','fbutil','projects', 'todos',
    function($scope, $routeParams, fbutil, projects, todos) {

    $scope.projectId = $routeParams.id;

    $scope.projects = projects;

    $scope.project = projects[$scope.projectId];

    $scope.todos = todos; // tmp, limit to project

    $scope.editProject = function() {
      var project = $scope.project;
      var text = project.name;

      var newName = window.prompt('New project name: ', text);
      if (!newName.length)
        return;

      project.name = newName;
      $scope.projects.$save($scope.projectId);
    };

  }])

  //
  .controller('ListCtrl', ['$scope','fbutil','lists',
    function($scope, fbutil, $lists) {

    $scope.lists = $lists;

    $scope.addList = function() {
      var name = $scope.listName.trim();
      var desc = $scope.listDesc.trim();
      if (!name.length) {
        return;
      }

      var list = { name: name, desc: desc };

      $scope.lists.$add(list);

      $scope.listName = '';
      $scope.listDesc = '';
    };

    $scope.removeList = function(id) {
      $scope.list.$remove(id);
    };

    $scope.editList = function(id) {
      var list = $scope.lists[id];
      var text = list.name.trim();

      var newName = window.prompt('List name: ', text);
      if (!newName || !newName.length)
        return;

      list.name = newName;
      $scope.lists.$save(id);
    };

  }])

  //
  .controller('TodoCtrl', ['$scope','fbutil','todos',
    function($scope, fbutil, todos) {

    $scope.todos = todos;

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
      if (newText && !newText.length)
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
