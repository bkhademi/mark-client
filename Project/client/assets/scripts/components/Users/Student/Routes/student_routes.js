/**
 * Created by Brandon on 8/1/2016.
 */
ezApp.config(['$routeProvider','$authProvider',
    function ($routeProvider, $authProvider) {
    $routeProvider
        .when('/student-profile',{
            templateUrl: 'views/student/student_profile.html',
            controller: 'StudentProfileCtrl',
            AccessRoles : ['Student'],
        })
        .when('/getting-started-student', {
            templateUrl:'views/student/getting_started.html',
            controller: "gettingStartedStudentCtrl",
            AccessRoles : ['Student'],
        })
}]);
