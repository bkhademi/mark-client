/**
 * Created by Brandon on 6/25/2016.
 */
//ROUTES
ezApp.config(['$routeProvider', '$authProvider',
    function ($routeProvider, $authProvider) {
        var skipIfLoggedIn = ['q', '$auth', function ($q, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }];

        var loginRequired = ['$q', '$location', '$auth', '$log', function ($q, $location, $auth, $log) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $location.path('/login');
            }
            return deferred.promise;
        }];
        $routeProvider
            .when('/teacher-dashboard', {
                templateUrl: 'views/teacher/userboard.html',
                controller: 'userBoardController',
                AccessRoles : ['Teacher'],
                resolve: {
                    loginRequired: loginRequired
                }
            })
            .when('/getting-started', {
                templateUrl: 'views/teacher/getting_started.html',
                controller: 'getStartedController',
                AccessRoles : ['Teacher'],
                //,
                // resolve: {
                //   loginRequired: loginRequired
                // }
            })
            .when('/marks-box', {
                templateUrl: 'views/teacher/easy_box.html',
                controller: 'easyBoxController',
                AccessRoles : ['Teacher'],
                resolve: {
                    loginRequired: loginRequired
                }
            })
            .when('/manage-classes', {
                templateUrl: 'views/teacher/manage_classes.html',
                controller: 'manageClassesController',
                AccessRoles : ['Teacher'],
            })
        ;

    }]);
