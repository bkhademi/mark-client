/**
 * Created by Brandon on 7/7/2016.
 */
ezApp.controller('manageClassesController', ['$scope', '$modal',  '$filter','ClassService',
    function ($scope, $modal, $filter, classs) {
        $scope.getClasses = function(){
            classs.getForTeacher().$promise.then(function(data){
                $scope.classesInfo = data.classes;
                $scope.classesGrades = data.classes_breakdowns;
            });
        };
		$scope.getClasses();

        //Data to pull from DB
        $scope.documents = [
            {
                name: 'Introduction to Limits',
                type: 'Homework',
                id: '1234'
            },
            {
                name: 'Limits Quiz',
                type: 'Quiz',
                id: '4567'
            },
            {
                name: 'Exam 1',
                type: 'Test',
                id: '7897'
            },
            {
                name: 'Limits to Infinity',
                type: 'Homework',
                id: '3574'
            },
            {
                name: 'Derivatives',
                type: 'Quiz',
                id: '1596'
            },
            {
                name: 'Integrals',
                type: 'Quiz',
                id: '9874'
            },
            {
                name: 'Standard Deviation',
                type: 'Quiz',
                id: '5566'
            }
        ];

        $scope.pointAssign = {
            classId: null,
            directly : false,
            allStudents : false,
            selectedDoc: null,
            selectedStudents:[],
            component: null,
            points: null
        };
        $scope.setDirectly = function(){
            $scope.pointAssign.directly = true;
        };
        
        $scope.addPoints = function(selected){
            selected.pointAssign = $scope.pointAssign;
            var modalInstance;
            modalInstance = $modal.open({
                size:'lg',
                templateUrl:'views/teacher/modals/add_points.html',
                controller: 'addPointsController',
                resolve:{
                    classInfo: function () {
                        return selected
                    }
                }
            })
        };
        
        $scope.classSelected = function (classs) {
            $scope.selectedClassComponents = classs.gradeBreakdown;
            $scope.selected = $scope.selected== classs?null:classs;
        };

        $scope.openClassSetUp = function (classs,$event) {
            cancelEventPropagation($event);
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/teacher/modals/class_setup_modal.html",
                controller: "classSetUpModalController",
                resolve: {
                    classInfo: function () {
                        return classs;
                    }
                }
            });
        };

        $scope.openClassStudents = function (classs,$index,$event) {
            cancelEventPropagation($event);
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/teacher/modals/class_students.html",
                controller: "classStudentsModalController",
                resolve: {
                    classInfo: function () {
                        return classs;
                    },
                    gradeInfo: function(){
                        return $scope.classesGrades[$index];
                    }
                }
            });
            // modalInstance.result.then(function (classesInfo) {
            //     $scope.notify('success');
            //     $scope.createClassSuccess = true;
            //     $scope.createClassHtml = '<del>Create Classes</del>';
            //     wizardData.classesInfo = classesInfo;
            //     $scope.stepTwoCompleted = true;
            //     $scope.stepTwo = true;
            // });
        };

        $scope.toLetter = function(score,classs){
            debugger;
            score = Math.ceil(score);
            var letter_ranges = classs.grade_scale;
            var letter = false;
            angular.forEach(letter_ranges, function(range){
                var lo  = parseInt(range.lower_bound);
                var hi  = parseInt(range.upper_bound);
                if(score <= hi && score >= lo)
                    letter = range.letter;
            });
            if(!letter)
                letter = 'F';
            return letter;
        }

        function cancelEventPropagation($event){
            $event.stopPropagation && $event.stopPropagation();
            $event.preventDefault && $event.preventDefault();
            $event.cancelBubble = true;
            $event.returnValue = false;
        }

    }]);

