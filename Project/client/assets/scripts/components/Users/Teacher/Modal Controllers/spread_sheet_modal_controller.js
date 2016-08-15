/**
 * Created by Brandon on 8/14/2016.
 */
ezApp.controller('SpreadSheetCtrl',['$scope','$log', '$filter', '$modalInstance', 'classInfo','gradeInfo',
    function ($scope, $log, $filter, $modalInstance, classInfo, gradeInfo) {
        $scope.classInfo = classInfo;
        $scope.gradeInfo = gradeInfo;
        $scope.closeModal = function () {
            $modalInstance.close();
        };
}]);
