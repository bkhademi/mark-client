'use strict';
var base =   "http://ezgrade-api.ddns.net";
var api = base+ "/api";
var ezApp = angular.module('ezgrade', ['ngRoute', 'ngSanitize', 'ngDropzone', 'localytics.directives', 'mgo-angular-wizard','xeditable','ngAnimate',"chart.js",
    //extend template
    'app',
    // ezgrade specific dependencies
    'satellizer',
    'ngResource',
    'ngStorage'  

]).config(['$routeProvider', '$authProvider',
	function($routeProvider,$authProvider){
		var skipIfLoggedIn = ['$q', '$location', '$auth',function ($q, $location, $auth) {
			var deferred = $q.defer();
			if ($auth.isAuthenticated()) {
				$location.path('/');
				deferred.reject();
			} else {
				deferred.resolve();
			}
			return deferred.promise;
		}];

		var loginRequired = ['$q','$location', '$auth',function ($q, $location, $auth) {
			var deferred = $q.defer();
			if ($auth.isAuthenticated()) {
				deferred.resolve();
			}else {
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
		.when('/404',{
			templateUrl: 'views/pages/404.html'
        })
		
		.otherwise({
                redirectTo: '/404'
         })
		;

		$authProvider.facebook({
			clientId: '819967938136120',
			//redirectUri: "http://ezgrade-api.ddns.net"
		});
		$authProvider.baseUrl = base;
		$authProvider.loginUrl = base+'/auth/login';
		$authProvider.signupUrl = base+'/auth/signup';
		$authProvider.unlinkUrl = base+'/auth/unlink/';


}])
;



