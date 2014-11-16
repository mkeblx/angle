// app 
'use strict';

var app = angular.module('angleApp', ['firebase']);

app.factory('todos', ['$firebase', function($firebase){
  var url = 'https://boiling-fire-3960.firebaseio.com/';
  var fireRef = new Firebase(url);

  var sync = $firebase(fireRef);
  return sync.$asArray();
}]);
