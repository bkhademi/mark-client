/**
 * Created by Brandon on 7/9/2016.
 */
ezApp.controller('classStudentsModalController',['$scope','$modalInstance', '$filter', 'classInfo','gradeInfo',
    function ($scope,$modalInstance, $filter, classInfo,gradeInfo) {
        $scope.classInfo = classInfo;
        //SaveChanges
        $scope.gradeInfo = gradeInfo;
        //Close Modal
        $scope.closeModal = function () {
            $modalInstance.close();
        }

        $scope.toLetter = function(score){
            score = Math.floor(score);
            var letter_ranges = classInfo.grade_scale;
            var letter = false;
            angular.forEach(letter_ranges, function(range){
                var lo  = parseInt(range.lower_bound);
                var hi  = parseInt(range.upper_bound);
                if(score <= hi && score >= lo)
                    letter = range.letter;
            })
            if(!letter)
                letter = 'F';
            return letter;
        }
    }]);