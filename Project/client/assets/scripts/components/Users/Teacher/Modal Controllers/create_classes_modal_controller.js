/**
 * Created by Brandon on 6/25/2016.
 */
//create_classes_modal_controller Starts
ezApp.controller('createClassesController', ['$scope', '$modalInstance', '$log',
    function ($scope, $modalInstance, $log) {
        //Periods Array
        $scope.periods = [
            {value: 1},
            {value: 2},
            {value: 3},
            {value: 4},
            {value: 5},
            {value: 6},
            {value: 7},
            {value: 8},
            {value: 9},
            {value: 10}
        ];
        //Data From Form
        function Adding(className, classPeriod, gradeBrakedown, gradeScale) {
            this.className = className;
            this.classPeriod = classPeriod;
            this.gradeBreakdown = gradeBrakedown;
            this.gradeScale = gradeScale

        }
        var x = 1;
        $scope.newClass = {};
        var classesInfo = [];

        function rangeToInt() {
            var x = $scope.newClass.gradeBreakdown.final[0] || 0;
            parseInt(x);
            $scope.newClass.gradeBreakdown.final = x;
            $log.info($scope.newClass.gradeBreakdown.final);
        }

        $log.info(classesInfo);
        $scope.firstTime = false;
        //AddClass Functions Starts
        $scope.addClass = function () {
            var className = $scope.newClass.className;
            var classPeriod = $scope.newClass.period.value;
            debugger;
            var gradeBreakDown = $scope.newClass.gradeBreakdown;
            var gradeScale = $scope.newClass.gradeScale;
            var addClass1 = new Adding(className, classPeriod, gradeBreakDown, gradeScale);
            classesInfo.push(addClass1);
            $scope.newClass.className = "";
            $scope.newClass.period = "";

            $scope.addedClasses = classesInfo;
            if($scope.firstTime === false) {
                alert('scroll up to add a new class');
                $scope.firstTime = true;
            }
            $log.info(classesInfo);
        };
        //AddClass Function Ends

        //Remove Table Row Function
        $scope.removeRow = function(index,period){
            $scope.addedClasses.splice(index,1);
            $log.info($scope.addedClasses)
        };

        //Validate on Submit
        $scope.submitForm = function (isValid) {
            if (isValid) {
                $modalInstance.close(classesInfo);
            }
        };
    }]);
//create_classes_modal_controller Ends