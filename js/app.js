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
        .when("/uber-uns", {
            templateUrl : "pages/uber-uns.html"
        })
        .when("/vorteile", {
            templateUrl : "pages/vorteile.html"
        })
        .when("/preise", {
            templateUrl : "pages/preise.html"
        })
        .when("/so-funktionierts", {
            templateUrl : "pages/so-funktionierts.html"
        })
        .when("/startup", {
            templateUrl : "pages/startup.html"
        })
        .when("/grossraumbuero", {
            templateUrl : "pages/grossraumbuero.html"
        })
        .when("/kanzlei", {
            templateUrl : "pages/kanzlei.html"
        })
        .when("/praxis", {
            templateUrl : "pages/praxis.html"
        })
        .when("/zahnarztpraxis", {
            templateUrl : "pages/zahnarztpraxis.html"
        })
        .when("/behandlungsraeume", {
            templateUrl : "pages/behandlungsraeume.html"
        })
        .when("/cafe", {
            templateUrl : "pages/cafe.html"
        })
        .when("/verkaufsflaechen", {
            templateUrl : "pages/verkaufsflaechen.html"
        })
        .when("/oeffentliche-einrichtungen", {
            templateUrl : "pages/oeffentliche-einrichtungen.html"
        })
    .otherwise({ redirectTo: '/' });
});
