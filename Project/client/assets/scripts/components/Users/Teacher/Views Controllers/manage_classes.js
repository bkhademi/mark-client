/**
 * Created by Brandon on 7/7/2016.
 */
ezApp.controller('manageClassesController', ['$scope', '$modal', '$log', '$filter','ClassService',
    function ($scope, $modal, $log, $filter, classs) {
		$scope.classesInfo = classs.getForTeacher();
        //Data to pull from DB
        $scope.classesInfo = [
            {
                period: 1,
                name: 'AP Calculus A',
                classSize: 27,
                avgGrade: 'B',
                avgTestScore: '82',
                avgQuizScore: '93',
                gradeBreakdown: {
                    Test: 25,
                    Homework: 25,
                    Quizzes: 25,
                    Final: 25
                },
                gradeScale: {
                    aScale: '[90-100]',
                    bScale: '[80-89]',
                    cScale: '[70-79]',
                    dScale: '[60-69]'
                }
            },
            {
                period: 2,
                name: 'AP Calculus B',
                classSize: 35,
                avgGrade: 'C',
                avgTestScore: '72',
                avgQuizScore: '75',
                gradeBreakdown: {
                    Test: 25,
                    Homework: 25,
                    Quizzes: 25,
                    Final: 25
                },
                gradeScale: {
                    aScale: '[90-100]',
                    bScale: '[80-89]',
                    cScale: '[70-79]',
                    dScale: '[60-69]'
                }

            },
            {
                period: 3,
                name: 'AP Statistics 01',
                classSize: 35,
                avgGrade: 'A',
                avgTestScore: '95',
                avgQuizScore: '95',
                gradeBreakdown: {
                    Test: 25,
                    Homework: 25,
                    Quizzes: 25,
                    Final: 25
                },
                gradeScale: {
                    aScale: '[90-100]',
                    bScale: '[80-89]',
                    cScale: '[70-79]',
                    dScale: '[60-69]'
                }
            },
            {
                period: 4,
                name: 'AP Statistics 02',
                classSize: 35,
                avgGrade: 'B',
                avgTestScore: '78',
                avgQuizScore: '66',
                gradeBreakdown: {
                    Test: 25,
                    Homework: 25,
                    Quizzes: 25,
                    Final: 25
                },
                gradeScale: {
                    aScale: '[90-100]',
                    bScale: '[80-89]',
                    cScale: '[70-79]',
                    dScale: '[60-69]'
                }
            }
        ];
        $scope.openClass = function (classs) {
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/teacher/modals/class_modal.html",
                controller: "classModalController",
                backdrop:'static',
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

