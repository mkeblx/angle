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
  }])

  .factory('httpInterceptor', function($q, $window){
    return {
      'response': function(response){
        $('.loading').fadeOut({duration: 1000});
        return response;
      },
      'responseError': function(rejection){
        $('.loading').fadeOut({duration: 1000});
        return $q.reject(rejection);
      }
    };
  });
