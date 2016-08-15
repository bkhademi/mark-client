/**
 * Created by Brandon on 8/14/2016.
 */
ezApp.controller('SpreadSheetCtrl',['$scope', 'StudentAssignment', 'classInfo','gradeInfo',
    function ($scope, StudentAssignment, classInfo, gradeInfo) {
        $scope.classInfo = classInfo;
        $scope.gradeInfo = gradeInfo;
        $scope.changeAssignmentScore = StudentAssignment.updateScore;
}]);
