'use strict';

angular.module('angleApp.filters', [])
  .filter('orderByDone', function(){
    return function(items){
      console.log(items);
      var filtered = [];
      angular.forEach(items, function(item) {
        filtered.push(item);
      });
      filtered.sort(function (a, b) {
        return (a.done > b.done ? 1 : -1);
      });
      return filtered;
    };
  })
  .filter('slugify', function(){
    return function(str){
      var s =
        str.toLowerCase()
          .replace(/[^\w ]+/g,'')
          .replace(/ +/g,'-');
      return s;    
    };
  });
