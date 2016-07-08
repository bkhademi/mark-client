/**
 * Created by Brandon on 6/25/2016.
 */
//ROUTES
ezApp.config(function ($routeProvider) {
    $routeProvider
        .when('/getting_started', {
            templateUrl: 'views/teacher/getting_started.html',
            controller: 'getStartedController'
        })
        .when('/easy_box', {
            templateUrl: 'views/teacher/easy_box.html',
            controller: 'easyBoxController'
        })
        .when('/manage_classes',{
            templateUrl: 'views/teacher/manage_classes.html',
            controller: 'manageClassesController'
        })
});
