'use strict'
var api = "";
var ezApp = angular.module('ezgrade', ['ngRoute', 'ngSanitize','ngDropzone',
    //extend template
    'app',
    // ezgrade specific dependencies
    'satellizer'
]);


//ROUTES
ezApp.config(function ($routeProvider) {
    $routeProvider
        .when('/getting_started', {
            templateUrl: 'views/teacher/getting_started.html',
            controller: 'getStartedController'
        })
});


//GetStarted Controller
ezApp.controller('getStartedController', ['$scope', '$modal', '$log', 'logger',
    function ($scope, $modal, $log, logger) {

        $scope.dzAddedFile = function( file ) {
            $log.log( file );
        };

        $scope.dzError = function( file, errorMessage ) {
            $log.log(errorMessage);
        };

        $scope.dropzoneConfig = {
            parallelUploads: 1,
            maxFileSize: 10,
            url:api+'/files'
        };
        $scope.notify = function (type) {
            switch (type) {
                case "info":
                    return logger.log("Heads up! This alert needs your attention, but it's not super important.");
                case "success":
                    return logger.logSuccess("Well done! Info successfully submitted");
                case "warning":
                    return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
                case "error":
                    return logger.logError("Oh snap! Change a few things up and try submitting again.")
            }
        };
        var wizardData = {};
        $scope.aboutYouHtml = 'About Me';
        $scope.createClassHtml = 'Create Classes';
        $scope.openAboutYou = function () {
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/teacher/modals/about_me_modal.html",
                controller: "aboutMeController"
            });
            modalInstance.result.then(function (aboutYouInfo) {
                $scope.notify('success');
                $scope.aboutYouSuccess = true;
                $scope.aboutYouHtml = '<del>About Me </del>';
                aboutYouInfo.deptSelection = aboutYouInfo.deptSelection.type;
                wizardData.aboutYouInfo = aboutYouInfo;
                $log.info(wizardData);
            });
        };
        $scope.openCreateClass = function () {
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/teacher/modals/create_classes.html",
                controller: "createClassesController"
            });
            modalInstance.result.then(function (classesInfo) {
                $scope.notify('success');
                $scope.createClassSuccess = true;
                $scope.createClassHtml = '<del>Create Classes</del>'
                wizardData.classesInfo = classesInfo;
                $scope.stepTwoCompleted = true;
                $log.info(wizardData);
            });
        };
        $scope.awesome = function(){
            $scope.awesomeClicked = true;
        }

    }]);

//Modals Controller
//about_me_controller
ezApp.controller('aboutMeController', ['$scope', '$modalInstance', '$log',
    function ($scope, $modalInstance, $log) {
        $scope.departments = [
            {type: 'Math'},
            {type: 'English'},
            {type: 'Science'},
            {type: 'Social Science'},
            {type: 'Computer Science'},
            {type: 'Engineering'},
            {type: 'Art'}
        ];

        //Data From Form
        $scope.aboutYouInfo = {};

        //Validate on Submit
        $scope.submitForm = function (isValid) {
            if (isValid) {
                $modalInstance.close($scope.aboutYouInfo);
            }
        };
    }]);

//create_classes_controller
ezApp.controller('createClassesController', ['$scope', '$modalInstance', '$log',
    function ($scope, $modalInstance, $log) {
        //Periods Array
        $scope.periods = [
            {value: 1},
            {value: 2},
            {value: 3},
            {value: 4},
            {value: 5},
            {value: 6},
            {value: 7},
            {value: 8},
            {value: 9},
            {value: 10}
        ];
        //Data From Form
        function Adding(className, classPeriod, gradeBrakedown, gradeScale) {
            this.className = className;
            this.classPeriod = classPeriod;
            this.gradeBreakdown = gradeBrakedown;
            this.gradeScale = gradeScale

        }

        $scope.newClass = {};
        var classesInfo = [];

        function rangeToInt() {
            var x = $scope.newClass.gradeBreakdown.final[0] || 0;
            parseInt(x);
            $scope.newClass.gradeBreakdown.final = x;
            $log.info($scope.newClass.gradeBreakdown.final);
        }

        $log.info(classesInfo);
        $scope.addClass = function () {
            var className = $scope.newClass.className;
            var classPeriod = $scope.newClass.period.value;
            debugger;
            var gradeBreakDown = $scope.newClass.gradeBreakdown;
            var gradeScale = $scope.newClass.gradeScale;
            var addClass1 = new Adding(className, classPeriod, gradeBreakDown, gradeScale);
            classesInfo.push(addClass1);
            $scope.newClass.className = "";
            $scope.newClass.period = "";
            $scope.firstTime = true;
            $scope.addedClasses = classesInfo;
            $log.info(classesInfo);
        };

        //Validate on Submit
        $scope.submitForm = function (isValid) {
            if (isValid) {
                $modalInstance.close(classesInfo);
            }
        };
    }]);