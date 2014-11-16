// app 
'use strict';

var app = angular.module('angleApp', ['firebase']);

var url = 'https://boiling-fire-3960.firebaseio.com';

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