/**
 * Created by Brandon on 7/7/2016.
 */
ezApp.controller('manageClassesController', ['$scope', '$modal', '$log', '$filter',
    function ($scope, $modal, $log, $filter) {
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
        $scope.classesInfo = [
            {
                period: 1,
                name: 'AP Calculus A',
                classSize: 27,
                avgGrade: 'B',
                avgTestScore: '82',
                avgQuizScore: '93',
                gradeBreakdown: [
                    {name: 'Test', value: 25},
                    {name: 'Quiz', value: 25},
                    {name: 'Essay', value: 25},
                    {name: 'Final', value: 25}
                ],
                gradeScale: [
                    {name: 'aScale', min: 90, max: 100},
                    {name: 'bScale', min: 80, max: 89},
                    {name: 'cScale', min: 70, max: 79},
                    {name: 'aScale', min: 60, max: 69}
                ],
                studentInfo: [
                    {
                        name: 'Brandon Hernandez',
                        gradeLevel: '10th',
                        id: '350036',
                        classGrade: 'A'
                    },
                    {
                        name: 'Adrian Galicia',
                        gradeLevel: '10th',
                        id: '0721579',
                        classGrade: 'B'
                    },
                    {
                        name: 'David Winter',
                        gradeLevel: '10th',
                        id: '100478',
                        classGrade: 'B'
                    },
                    {
                        name: 'Jose Mireles',
                        gradeLevel: '11th',
                        id: '458973',
                        classGrade: 'C'
                    },
                    {
                        name: 'Zlatan Ibrahomovich',
                        gradeLevel: '11th',
                        id: '582411',
                        classGrade: 'A'
                    }
                ]
            },
            {
                period: 2,
                name: 'AP Calculus B',
                classSize: 35,
                avgGrade: 'C',
                avgTestScore: '72',
                avgQuizScore: '75',
                gradeBreakdown: [
                    {name: 'Test', value: 25},
                    {name: 'Quiz', value: 25},
                    {name: 'Homework', value: 25},
                    {name: 'Final', value: 25}
                ],
                gradeScale: [
                    {name: 'aScale', min: 90, max: 100},
                    {name: 'bScale', min: 80, max: 89},
                    {name: 'cScale', min: 70, max: 79},
                    {name: 'aScale', min: 60, max: 69}
                ],
                studentInfo: [
                    {
                        name: 'Brandon Hernandez',
                        gradeLevel: '10th',
                        id: '350036',
                        classGrade: 'A'
                    },
                    {
                        name: 'Adrian Galicia',
                        gradeLevel: '10th',
                        id: '0721579',
                        classGrade: 'B'
                    },
                    {
                        name: 'David Winter',
                        gradeLevel: '10th',
                        id: '100478',
                        classGrade: 'B'
                    },
                    {
                        name: 'Jose Mireles',
                        gradeLevel: '11th',
                        id: '458973',
                        classGrade: 'C'
                    },
                    {
                        name: 'Zlatan Ibrahomovich',
                        gradeLevel: '11th',
                        id: '582411',
                        classGrade: 'A'
                    }
                ]

            },
            {
                period: 3,
                name: 'AP Statistics 01',
                classSize: 35,
                avgGrade: 'A',
                avgTestScore: '95',
                avgQuizScore: '95',
                gradeBreakdown: [
                    {name: 'Test', value: 25},
                    {name: 'Quiz', value: 25},
                    {name: 'Homework', value: 25},
                    {name: 'Final', value: 25}
                ],
                gradeScale: [
                    {name: 'aScale', min: 90, max: 100},
                    {name: 'bScale', min: 80, max: 89},
                    {name: 'cScale', min: 70, max: 79},
                    {name: 'aScale', min: 60, max: 69}
                ],
                studentInfo: [
                    {
                        name: 'Brandon Hernandez',
                        gradeLevel: '10th',
                        id: '350036',
                        classGrade: 'A'
                    },
                    {
                        name: 'Adrian Galicia',
                        gradeLevel: '10th',
                        id: '0721579',
                        classGrade: 'B'
                    },
                    {
                        name: 'David Winter',
                        gradeLevel: '10th',
                        id: '100478',
                        classGrade: 'B'
                    },
                    {
                        name: 'Jose Mireles',
                        gradeLevel: '11th',
                        id: '458973',
                        classGrade: 'C'
                    },
                    {
                        name: 'Zlatan Ibrahomovich',
                        gradeLevel: '11th',
                        id: '582411',
                        classGrade: 'A'
                    }
                ]
            },
            {
                period: 4,
                name: 'AP Statistics 02',
                classSize: 35,
                avgGrade: 'B',
                avgTestScore: '78',
                avgQuizScore: '66',
                gradeBreakdown: [
                    {name: 'Test', value: 25},
                    {name: 'Quiz', value: 25},
                    {name: 'Homework', value: 25},
                    {name: 'Final', value: 25}
                ],
                gradeScale: [
                    {name: 'aScale', min: 90, max: 100},
                    {name: 'bScale', min: 80, max: 89},
                    {name: 'cScale', min: 70, max: 79},
                    {name: 'aScale', min: 60, max: 69}
                ],
                studentInfo: [
                    {
                        name: 'Brandon Hernandez',
                        gradeLevel: '10th',
                        id: '350036',
                        classGrade: 'A'
                    },
                    {
                        name: 'Adrian Galicia',
                        gradeLevel: '10th',
                        id: '0721579',
                        classGrade: 'B'
                    },
                    {
                        name: 'David Winter',
                        gradeLevel: '10th',
                        id: '100478',
                        classGrade: 'B'
                    },
                    {
                        name: 'Jose Mireles',
                        gradeLevel: '11th',
                        id: '458973',
                        classGrade: 'C'
                    },
                    {
                        name: 'Zlatan Ibrahomovich',
                        gradeLevel: '11th',
                        id: '582411',
                        classGrade: 'A'
                    }
                ]
            }
        ];
        $scope.pointAssign = {
            classId: null,
            directly : false,
            allStudents : false,
            selectedDocs: [],
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
            if ($scope.selected == classs) {
                $scope.selected = null;
            }
            else {
                $scope.selected = classs;
            }
        };

        $scope.openClassSetUp = function (classs) {
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
            // modalInstance.result.then(function (classesInfo) {
            //     $scope.notify('success');
            //     $scope.createClassSuccess = true;
            //     $scope.createClassHtml = '<del>Create Classes</del>';
            //     wizardData.classesInfo = classesInfo;
            //     $scope.stepTwoCompleted = true;
            //     $scope.stepTwo = true;
            // });
        };
        $scope.openClassStudents = function (classs) {
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/teacher/modals/class_students.html",
                controller: "classStudentsModalController",
                resolve: {
                    classInfo: function () {
                        return classs;
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

    }]);

