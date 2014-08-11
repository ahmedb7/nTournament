 var module = angular.module( 'my.resource', [ 'ngResource' ] );

  module.factory( 'Resource', [ '$resource', function( $resource ) {
   return function( url, params, methods ) {
      var defaults = {
       update: { method: 'put', isArray: false },
       create: { method: 'post' }
     };

     methods = angular.extend( defaults, methods );

     var resource = $resource( url, params, methods );

     resource.prototype.$save = function() {
       if ( !this.id ) {
         return this.$create();
       }
       else {
         return this.$update();
       }
     };

     return resource;
   };
 }]);﻿



var nTournamentServices = angular.module('nTournamentServices', ['my.resource']);

nTournamentServices.factory('Tournament',['$resource',
function ($resource) {
  return $resource('/api/tourData/:id',{id: "@id"});
}]);

nTournamentServices.service('News',['$resource',
function ($resource){
  var newslist = [];
  var newsData = $resource('/data/news.json');
  newslist = newsData.query();

  this.news = function () {
    return newslist;
  }
  this.addnewsdata = function (news) {
      newslist.push(news);
  }
}
]);

nTournamentServices.factory('RandomShortGuid',[function()
{
    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
}
}]);
