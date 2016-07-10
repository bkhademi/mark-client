/**
 * Created by Brandon on 7/7/2016.
 */
ezApp.controller('classSetUpModalController',['$scope','$log','$modalInstance','classInfo',
    function ($scope,$log,$modalInstance, classInfo) {
        $scope.classInfo = classInfo;
        //SaveChanges

        

        //Close Modal
        $scope.closeModal = function () {
            $modalInstance.close();
        }
}]);