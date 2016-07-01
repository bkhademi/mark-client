/**
 * Created by Brandon on 6/29/2016.
 */
ezApp.controller('headerController', ['$scope', '$log', '$location',
    function ($scope, $log, $location) {
        $scope.pageName = $location.path()
    }]);