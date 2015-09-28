/// <reference path="../bower_components/angular/angular.js" />
/// <reference path="../multipleviews/filter.html" />


var xchange = angular.module('xchange', ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise("/", "/home");
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'templates/settings.html'
        }).state('home.contact', {
            url: '/contact',
            parent: 'home',
            templateUrl:'templates/contacts.tpl.html'
        }).state('home.about', {
            url: '/about',
            parent: 'home',
            templateUrl: 'templates/about.tpl.html'
        })
            .state('multipleview', {
                url:'/multipleview',
                //templateUrl: 'templates/multipleviews.html',
                views: {
                    'filters@': {
                        templateUrl: 'multipleviews/filter.html',
                        controller: function ($scope) {
                            $scope.filter = '';
                        }
                    },
                    'griddata@': {
                        templateUrl: 'multipleviews/griddata.html',
                        controller: function ($scope) {
                            $scope.raw = '';
                        }
                    },
                    'footer@': {
                        templateUrl: 'multipleviews/footer.html',
                        controller: function ($scope) {
                            $scope.info = '';
                        }
                    }



                }
            });

        
    })
    .controller('indexController', function ($scope, $window) {
        $scope.onActivateClick = function () {
            alert('Some coding require');
        }
    });