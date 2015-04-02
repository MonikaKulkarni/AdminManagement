angular.module('AdminManagementApp', [
  'AdminManagementApp.services',
  'AdminManagementApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/inventorylist", {templateUrl: "partials/inventorylist.html", controller: "inventorylistController"}).
	when("/inventorylist/:id", {templateUrl: "partials/inventoryitem.html", controller: "inventoryitemController"}).

	otherwise({redirectTo: '/inventorylist'});
}]);