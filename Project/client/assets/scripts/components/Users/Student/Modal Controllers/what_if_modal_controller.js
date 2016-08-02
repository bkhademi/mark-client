/**
 * Created by Brandon on 8/2/2016.
 */
ezApp.controller('whatIfCtrl', ['$scope', '$log', '$modalInstance', 'docInfo', 'gradeInfo',
    function ($scope, $log, $modalInstance, docInfo, gradeInfo) {
        $scope.docInfo = docInfo;
        $scope.gradeInfo = gradeInfo;
        $scope.closeModal = function () {
            $modalInstance.close();
        };
        $scope.myGrade = 0;
        var gradePercent = angular.forEach($scope.gradeInfo, function (component) {
            $log.info(component);
            $log.info(component.accuWeight);
            $log.info($scope.myGrade);
            $scope.myGrade += component.accuWeight;
        })
    }]);
