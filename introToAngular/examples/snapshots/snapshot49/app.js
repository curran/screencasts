var countryApp = angular.module('countryApp', ['ngRoute', 'countryControllers']);

countryApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'country-list.html',
      controller: 'CountryListCtrl'
    }).
    when('/:countryId', {
      templateUrl: 'country-detail.html',
      controller: 'CountryDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});

countryApp.factory('countries', function($http){
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: 'countries.json',
        cache: true
      }).success(callback);
    },
    find: function(id, callback){
      $http({
        method: 'GET',
        url: 'country_' + id + '.json',
        cache: true
      }).success(callback);
    }
  };
});

countryApp.directive('country', function(){
  return {
    scope: {
      country: '='
    },
    restrict: 'A',
    templateUrl: 'country.html',
    controller: function($scope, countries){
      countries.find($scope.country.id, function(country) {
        $scope.flagURL = country.flagURL;
      });
    }
  };
});
