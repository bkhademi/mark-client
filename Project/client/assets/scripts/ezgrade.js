'use strict';
var base = "http://52.87.172.119";
var api = base + "/api";
var ezApp = angular.module('ezgrade',
    ['ngRoute', 'ngSanitize', 'ngDropzone', 'localytics.directives', 'mgo-angular-wizard', 'xeditable', 'ngAnimate', "chart.js",
        //extend template
        'app',
        // ezgrade specific dependencies
        'satellizer',
        'ngResource',
        'ngStorage',
        'file-model'
    ])
        .config(['$routeProvider', '$authProvider',
            function ($routeProvider, $authProvider) {
                var skipIfLoggedIn = ['$q', '$location', '$auth', function ($q, $location, $auth) {
                    var deferred = $q.defer();
                    if ($auth.isAuthenticated()) {
                        $location.path('/');
                        deferred.reject();
                    } else {
                        deferred.resolve();
                    }
                    return deferred.promise;
                }];

                var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
                    var deferred = $q.defer();
                    if ($auth.isAuthenticated()) {
                        deferred.resolve();
                    } else {
                        $location.path('/login');
                    }
                    return deferred.promise;
                }];

                $routeProvider
                    .when('/login', {
                        templateUrl: 'views/pages/signin.html',
                        controller: 'LoginCtrl',
                        resolve: {
                            skipIfLoggedIn: skipIfLoggedIn
                        }
                    })
                    .when('/logout', {
                        template: '<div></div>',
                        controller: 'LogoutCtrl',
                    })
                    .when('/signup', {
                        templateUrl: 'views/pages/signup.html',
                        controller: 'SignupCtrl',
                        resolve: {
                            skipIfLoggedIn: skipIfLoggedIn
                        }
                    })
                    .when('/', {
                        template: '<div></div>',
                        controller: 'HomePageCtrl'
                    })
                    .when('/401',{
                        templateUrl:'views/pages/401.html'
                    })
                    .when('/404', {
                        templateUrl: 'views/pages/404.html'
                    })
                    .when('/500',{
                        templateUrl:'views/pages/500.html'
                    })

                    .otherwise({
                        redirectTo: '/404'
                    })

                ;

                /****************  SATELLIZER CONFIG *******************/
                $authProvider.facebook({
                    clientId: '819967938136120',
                    //redirectUri: "http://ezgrade-api.ddns.net"
                });
                $authProvider.google({
                    clientId: "619323911129-po6s6o0ohrm25pbd4ttrkeluoa6l8c0l.apps.googleusercontent.com"
                });
                $authProvider.twitter({
                    clientId: 'kBls1IDCAm8F9HVPNJEqIbhxH'
                });

                $authProvider.baseUrl = base;
                $authProvider.loginUrl = base + '/auth/login';
                $authProvider.signupUrl = base + '/auth/signup';
                $authProvider.unlinkUrl = base + '/auth/unlink/';


            }])
        .run([ '$http', '$rootScope', '$location','$auth','$localStorage',
            function ( $http, $rootScope, $location, $auth, $localStorage) {
                if(!($localStorage.user && $localStorage.user.role &&  $localStorage.user.role.name)) {
                    $http.get(api + '/me').then(function (response) {
                        $localStorage.user = response.data;
                    });
                }

                $rootScope.$on('$routeChangeStart', function (scope, next, current) {
                    var acceptedRoles = next.$$route.AccessRoles;
                    if(!acceptedRoles) return; //  probably login, or singup or logout
                    var thisUserRole = $localStorage.user.role.name;
                    var allowed = false;
                    angular.forEach(acceptedRoles, function(role){
                        if(role == thisUserRole)
                            allowed = true;
                    });

                    if(!allowed)
                        $location.path('/401');
                });

                $rootScope.$on('$routeChangeError', function (event, current, prev, rejection) {

                });
            }])
        .controller('AppCtrl',
            ['$scope', '$localStorage', '$location',
                function ($scope, $localStorage, $location) {
                    // for pages that take full screen (hides header and nav bar
                    $scope.isSpecificPage = function () {
                        var path = $location.path();
                        return _.contains([
                            '/login', '/signup', '/getting-started', '/getting-started-student','/404','/401', '/500', '/'
                        ], path);
                    }
                    $scope.isStudent = function () {
                        if ($localStorage.user && $localStorage.user.role_id == 3)
                            return true;
                        return false;
                    }
                }])
        .controller('HomePageCtrl', ['$location', '$localStorage','$auth','$modal','$http','logger',
            function ($location, $localStorage, $auth, $modal, $http, logger) {
                //debugger;
                if(!$auth.isAuthenticated() || !$localStorage.user){
                    $location.path('/login');
                    return;
                };

                var local = $localStorage;
                if (local.user.role.name == 'Student') {
                    if (local.user.first_time_login)
                        $location.path('/student-profile');
                    else
                        $location.path('/getting-started-student');
                }
                else if (local.user.role.name  == 'Teacher') {
                    if (local.user.first_time_login)
                        $location.path('/teacher-dashboard');
                    else
                        $location.path('/getting-started');
                }
                else if(local.user.role.name == 'N/A'){
                    openSelectUserModal()
                }
                else {
                    $location.path('/login')
                }

                function openSelectUserModal(){
                    $modal.open({
                        templateUrl:'views/modals/selectUserModal.html',
                        size:'md'
                    }).result.then(function(route){
                        if(!route) {
                            openSelectUserModal();
                            return;
                        }
                        debugger;
                        var role = route == '/getting-started-student'? "Student":"Teacher";
                        $http.put(api+'/users/'+local.user.id, {role:role}).then(
                            function(response){
                                debugger;
                                local.user.role = response.data.user.role;
                                $location.path(route);
                            },function(response){
                                logger.logError("Unable to proceed. \n Did you select the correct role?");
                            }


                        );

                    }, function(){
                        openSelectUserModal();
                    });
                }

            }])
    ;



