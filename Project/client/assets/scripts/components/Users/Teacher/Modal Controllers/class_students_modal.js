/**
 * Created by Brandon on 7/9/2016.
 */
ezApp.controller('classStudentsModalController',['$scope','$log','$modalInstance', '$filter', 'classInfo',
    function ($scope,$log,$modalInstance, $filter, classInfo) {
        $scope.classInfo = classInfo;
        //SaveChanges

        //Close Modal
        $scope.closeModal = function () {
            $modalInstance.close();
        }
    }]);