/**
 * Created by Brandon on 7/18/2016.
 */
ezApp.controller('reportCardCountdownController',['$scope','$log','$modalInstance', '$filter',
    function ($scope,$log,$modalInstance, $filter) {
        //Close Modal
        $scope.closeModal = function () {
            $modalInstance.close();
        }
    }]);