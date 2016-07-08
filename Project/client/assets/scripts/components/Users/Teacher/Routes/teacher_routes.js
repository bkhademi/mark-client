/**
 * Created by Brandon on 6/25/2016.
 */
//ROUTES
ezApp.config(['$routeProvider','$authProvider',
function ($routeProvider,$authProvider) {
    $routeProvider
    .when('/dashboard',{
        templateUrl: 'views/dashboard.html',
            resolve: {
              loginRequired: loginRequired
            }
    })
    .when('/getting_started', {
            templateUrl: 'views/teacher/getting_started.html',
            controller: 'getStartedController',
            resolve: {
              loginRequired: loginRequired
            }
        })
        .when('/easy_box', {
            templateUrl: 'views/teacher/easy_box.html',
            controller: 'easyBoxController',
            resolve: {
              loginRequired: loginRequired
            }
        })


    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $auth,$log) {
       $log.info('required');
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }
}]);
