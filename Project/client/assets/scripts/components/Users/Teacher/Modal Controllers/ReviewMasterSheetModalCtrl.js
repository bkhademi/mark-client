/**
 * Created by adrian-chan on 7/29/16.
 */
ezApp.controller('ReviewMasterSheetModalCtrl', ['$scope', 'StudentAssignment','graded',
    function ($scope, StudentAssignment, graded) {

        $scope.gradedStudentAssignments = graded;

        $scope.changeAssignmentScore =StudentAssignment.updateScore

    }]);