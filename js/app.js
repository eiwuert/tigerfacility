var app = angular.module('tigerfacility', ['ngAnimate', 'ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/", {
            templateUrl : "pages/main.html"
        })
        .when("/qualitaet", {
            templateUrl : "pages/qualitaet.html"
        })
    .otherwise({ redirectTo: '/' });
});
