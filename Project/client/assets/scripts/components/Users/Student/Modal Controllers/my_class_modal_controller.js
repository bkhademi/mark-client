/**
 * Created by Brandon on 8/2/2016.
 */
ezApp.controller('MyClassCtl', ['$scope', '$log', '$modalInstance' ,'classInfo',
    function ($scope, $log, $modalInstance, classInfo) {
        $scope.classInfo = classInfo;
        $scope.closeModal = function () {
            $modalInstance.close();
        };
    }]);
