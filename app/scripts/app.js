'use strict';

angular.module('myRetrospectiveAppApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise("/");
        $stateProvider.state('index',{
            views:{
                "header":{
                  templateUrl: "view/header_bar.html",
                  controller:'HeaderBarCtrl'
                },
                "navBar":{
                  templateUrl: "views/nav_bar.html",
                  controller:'NavBarCtrl'

                },
                "mainViewport":{
                  templateUrl: "views/main_viewport.html",
                  controller:'MainViewportCtrl'

                }
            }
           })
        });
  //  $routeProvider
  //    .when('/', {
  //      templateUrl: 'views/main.html',
  //      controller: 'MainCtrl'
  //    })
  //    .when('/headerBar', {
  //      templateUrl: 'views/header_bar.html',
  //      controller: 'HeaderBarCtrl'
  //    })
  //    .when('/mainViewport',{
  //        templateUrl: 'views/main_viewport.html',
  //        controller: 'MainViewportCtrl'
  //    })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  //});
