/**
 * Created by Brandon on 7/10/2016.
 */
ezApp.controller('addPointsController',['$scope','$log','$modalInstance', '$filter', 'classInfo',
    function ($scope,$log,$modalInstance, $filter, classInfo) {
        $scope.classInfo = classInfo;
        //SaveChanges

        //Close Modal
        $scope.closeModal = function () {
            $modalInstance.close();
        }
    }]);