/**
 * Created by Brandon on 6/25/2016.
 */
//GetStarted Controller Starts
ezApp.controller('getStartedController', ['$scope', '$modal', '$log', 'logger',
    function ($scope, $modal, $log, logger) {

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
                templateUrl: "views/teacher/modals/create_classes_modal.html",
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
        $scope.awesome = function () {
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/teacher/modals/addedDocsModal.html",
                controller: "addedDocsController"
            });
            modalInstance.result.then(function (hwDocuments) {
                $scope.notify('success');
                wizardData.homeworkDocsInfo = hwDocuments;
                $log.info(wizardData);
            });
        }

    }]);
//GetStarted Controller Ends