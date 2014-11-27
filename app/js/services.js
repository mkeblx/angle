'use strict';

angular.module('angleApp.services', [])
  .factory('todos', ['fbutil', function(fbutil){
    return fbutil.syncArray('todos');
  }])

  .factory('projects', ['fbutil', function(fbutil){
    return fbutil.syncArray('projects');
  }])

  .factory('lists', ['fbutil', function(fbutil){
    return fbutil.syncArray('lists');
  }]);
