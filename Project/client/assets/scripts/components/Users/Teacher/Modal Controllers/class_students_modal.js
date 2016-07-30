/**
 * Created by Brandon on 7/9/2016.
 */
ezApp.controller('classStudentsModalController',['$scope','$modalInstance', '$filter', 'classInfo','gradeInfo',
    function ($scope,$modalInstance, $filter, classInfo,gradeInfo) {
        $scope.classInfo = classInfo;
        //SaveChanges
        $scope.gradeInfo = gradeInfo;
        //Close Modal
        $scope.closeModal = function () {
            $modalInstance.close();
        }
    }]);