/**
 * Created by Brandon on 7/18/2016.
 */
ezApp.controller('overAllGradesController',['$scope','$log', '$modalInstance','$filter','avgInfo',
    function ($scope, $log, $modalInstance, $filter, avgInfo) {
        $scope.avgGradesData = avgInfo;


        $scope.closeModal = function () {
            $modalInstance.close();
        }
        
    }
]);