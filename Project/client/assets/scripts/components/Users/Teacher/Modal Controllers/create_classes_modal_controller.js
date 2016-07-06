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
        //ClassInstance Function Constructor
        function ClassInstance(className, classPeriod, gradeBreakdown, gradeScale) {
            this.className = className;
            this.classPeriod = classPeriod;
            this.gradeBreakdown = gradeBreakdown;
            this.gradeScale = gradeScale;
  
        }

        //scope Arrays, Objects and Variables Starts
        $scope.newClass = {};
        $scope.potentialComponents = [];
        $scope.defaultComponents = ['Test','Quiz','Homework','Final'];
        $scope.firstTime = false;
        //scope Arrays Ends

        //Data to be sent to DataBase Starts
        var classesInfo = [];
        //Data to be sent to DataBase Ends

        

        //addComponent function
        $scope.addComponent = function (input){
            debugger;
            $scope.potentialComponents = $scope.potentialComponents || [];
            $scope.potentialComponents.push(input.componentName);
            input.componentName = "";
        };

        //resetBreakdown Function
        $scope.resetBreakdown = function () {
            $scope.newClass.gradeBreakdown = {};
            $scope.defaultComponents = ['Test','Quiz','Homework','Final'];
        };

        //component Sum function with Watch
        $scope.$watch('newClass.gradeBreakdown', function (newVal, OldVal) {
            $scope.componentsSum = 0;
            angular.forEach(newVal,function(component){
                if(component) {
                    $scope.componentsSum += component
                }
            });
        },true);


        //addClass Function Starts
        var addClass = function () {
            var className = $scope.newClass.className;
            var classPeriod = $scope.newClass.period.value;
            var gradeBreakdown = $scope.newClass.gradeBreakdown;
            var gradeScale = $scope.newClass.gradeScale;
            var addClass1 = new ClassInstance(className, classPeriod, gradeBreakdown, gradeScale);
            classesInfo.push(addClass1);
            $scope.newClass.className = "";
            $scope.newClass.period = "";
            $scope.addedClasses = classesInfo;
            if ($scope.firstTime === false) {
                alert('You added a class as you can see in the table! Scroll to ' +
                    'the top again to create a new class and don\'t forget to hit the "Add Class" button' );
                $scope.firstTime = true;
            }
        };

        //addClassFunction Ends

        //checkValidity Functions Starts
        $scope.checkValidity = function () {
            if ($scope.componentsSum === 100) {
                addClass();
            }
            else {
                alert('Ops, looks like your the sum of each of your grade components is not equal to 100!')
            }
        };
        //checkValidity Function Ends

        //Remove Class Table Row Function
        $scope.removeRow = function (index, period) {
            $scope.addedClasses.splice(index, 1);
            classesInfo = $scope.addedClasses;
            $log.info(classesInfo);
        };

        //
        $scope.removeComponent = function ($index, name) {
            $scope.potentialComponents.splice($index, 1);
        };

        //Validate on Submit
        $scope.submitForm = function (isValid) {
            if (isValid) {
                $modalInstance.close(classesInfo);
            }
        };
    }]);
//create_classes_modal_controller Ends
