/**
 * Created by Brandon on 7/18/2016.
 */
ezApp.controller('missingAssignmentsController',['$scope','$log','$modalInstance', '$filter', 'missingInfo',
    function ($scope,$log,$modalInstance, $filter, missingInfo) {
        $scope.missingInfo = missingInfo;
        

        //Close Modal
        $scope.closeModal = function () {
            $modalInstance.close();
        }
    }]);