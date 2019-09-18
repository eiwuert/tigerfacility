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
        .when("/anfrage", {
            templateUrl : "pages/anfrage.html"
        })
        .when("/e-book", {
            templateUrl : "pages/e-book.html"
        })
        .when("/co-working", {
            templateUrl : "pages/co-working.html"
        })
        .when("/contact-sales", {
            templateUrl : "pages/contact-sales.html"
        })
    .otherwise({ redirectTo: '/' });
});

app.controller('customDialogCtrl', function ($scope, $uibModalInstance, $rootScope) {
    //-- Variables --//
    $rootScope.$on("CallParentMethod", function () {
      $uibModalInstance.dismiss('Canceled');
  
    });
  
    $scope.user = {
      name: ''
    };
  
    //-- Methods --//
  
    $scope.cancel = function () {
      $uibModalInstance.dismiss('Canceled');
    }; // end cancel
  
    $scope.save = function () {
      $uibModalInstance.close($scope.user.name);
    }; // end save
  
    $scope.hitEnter = function (evt) {
      if (angular.equals(evt.keyCode, 13) && !(angular.equals($scope.user.name, null) || angular.equals($scope.user.name, '')))
        $scope.save();
    };
  })