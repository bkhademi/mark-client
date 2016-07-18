/**
 * Created by Brandon on 7/12/2016.
 */
ezApp.controller('userBoardController', ['$scope', '$log', '$timeout', '$modal',
    function ($scope, $log, $timeout, $modal) {

        $scope.avgGradesData = [
            {
                period: '1',
                className: 'AP Calculus 01',
                avgGrade: 'B',
                averages: [
                    {
                        name: 'Test',
                        avgScore: 77
                    },
                    {
                        name: 'Participation',
                        avgScore: 0
                    },
                    {
                        name: 'Quiz',
                        avgScore: 91
                    }
                ]

            },
            {
                period: '2',
                className: 'AP Calculus 02',
                avgGrade: 'C',
                averages: [
                    {
                        name: 'Exam',
                        avgScore: 71
                    },
                    {
                        name: 'Homework',
                        avgScore: 90
                    },
                    {
                        name: 'Quiz',
                        avgScore: 77
                    }
                ]

            },
            {
                period: '3',
                className: 'AP Statistics 01',
                avgGrade: 'A',
                averages: [
                    {
                        name: 'Test',
                        avgScore: 90
                    },
                    {
                        name: 'Homework',
                        avgScore: 92
                    },
                    {
                        name: 'Quiz',
                        avgScore: 95
                    }
                ]

            },
            {
                period: '4',
                className: 'AP Statistics 02',
                avgGrade: 'B',
                averages: [
                    {
                        name: 'Projects',
                        avgScore: 66
                    },
                    {
                        name: 'Homework',
                        avgScore: 55
                    },
                    {
                        name: 'Quiz',
                        avgScore: 70
                    }
                ]

            }
        ];

        $scope.missingInfo = [
            {
                docName: 'Limits Quiz',
                type: 'Quiz',
                stuList: [
                    {
                        stuName: 'Brandon Hernandez',
                        className: 'AP Calculus,'
                    },
                    {
                        stuName: 'Adrian Galicia',
                        className: 'AP Calculus,'
                    },
                    {
                        stuName:'Micheal Govea',
                        className: 'AP Calculus,'
                    }
                ]
            },
            {
                docName: 'Derivatives',
                type: 'Test',
                stuList: [
                    {
                        stuName: 'Brandon Hernandez',
                        className: 'AP Calculus,'
                    },
                    {
                        stuName: 'Adrian Galicia',
                        className: 'AP Calculus,'
                    },
                    {
                        stuName:'Micheal Govea',
                        className: 'AP Calculus,'
                    }
                ]
            },
            {
                docName: 'Related Rates',
                type: 'Homework',
                stuList: [
                    {
                        stuName: 'Brandon Hernandez',
                        className: 'AP Calculus,'
                    },
                    {
                        stuName: 'Adrian Galicia',
                        className: 'AP Calculus,'
                    },
                    {
                        stuName:'Micheal Govea',
                        className: 'AP Calculus,'
                    }
                ]
            }
        ];


        $scope.openOverallGrades = function () {
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: 'views/teacher/modals/over_all_grades.html',
                controller: 'overAllGradesController',
                resolve: {
                    avgInfo: function () {
                        return $scope.avgGradesData
                    }
                }
            })
        };

        $scope.missingAssignments = function () {
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: 'views/teacher/modals/missing_assignments.html',
                controller: 'missingAssignmentsController',
                resolve: {
                    missingInfo: function () {
                        return $scope.missingInfo
                    }
                }

            })
        };
        
        $scope.reportCardCountdown = function () {
            var modalInstance;
            modalInstance = $modal.open({
                size: 'lg',
                templateUrl: 'views/teacher/modals/reportCard_countDown.html',
                controller: 'reportCardCountdownController'
            })
        };


        $scope.growthStudents = ['Brandon', 'Adrian', 'Karla', 'Ana', 'Thomas'];
        $scope.growthData = [
            [10, 5, 12, 6, 7]
        ];
        $scope.colorsG = ['#ABCD39'];
        $scope.colorsD = ['#F79023'];
        $scope.decayStudents = ['Ramiro', 'Ivan', 'Ino', 'Ana', 'Thomas'];

        $scope.decayData = [
            [-5, -7, -1, -3, -6]
        ];

        $scope.options = {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true
                    }

                }]
            }
        }

    }]);