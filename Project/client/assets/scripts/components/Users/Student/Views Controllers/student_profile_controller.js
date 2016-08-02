/**
 * Created by Brandon on 8/1/2016.
 */
ezApp.controller('StudentProfileCtrl', ['$scope', '$log', '$modal',
    function ($scope, $log, $modal) {
        $scope.myClassesInfo = [
            {
                period: 1,
                name: "Fake Class 1",
                gradeP: 86,
                gradeL: 'B',
                myAssignments: [
                    {
                        name: "Limits",
                        type: 'Quiz',
                        pointsP: 20,
                        pointsR: 20,
                        gradeP: 100,
                        gradeL: 'A',
                        impact: 3
                    },
                    {
                        name: "Derivatives",
                        type: 'Test',
                        pointsP: 50,
                        pointsR: 40,
                        gradeP: 80,
                        gradeL: 'B',
                        impact: -1
                    },
                    {
                        name: "Integrals",
                        type: 'Homework',
                        pointsP: 10,
                        pointsR: 9,
                        gradeP: 90,
                        gradeL: 'A',
                        impact: 1
                    }
                ],
                componentAvg: {
                    Test: 85,
                    Homework: 78,
                    Quiz: 91,
                    Final: 0
                }
            },
            {
                period: 2,
                name: "Fake Class 2",
                gradeP: 76,
                gradeL: 'C',
                myAssignments: [
                    {
                        name: "Limits",
                        type: 'Quiz',
                        pointsP: 20,
                        pointsR: 20,
                        gradeP: 100,
                        gradeL: 'A',
                        impact: 3
                    },
                    {
                        name: "Derivatives",
                        type: 'Test',
                        pointsP: 50,
                        pointsR: 40,
                        gradeP: 80,
                        gradeL: 'B',
                        impact: -1
                    },
                    {
                        name: "Integrals",
                        type: 'Homework',
                        pointsP: 10,
                        pointsR: 9,
                        gradeP: 90,
                        gradeL: 'A',
                        impact: 1
                    }
                ],
                componentAvg: {
                    Test: 85,
                    Homework: 78,
                    Quiz: 91,
                    Final: 0
                }
            },
            {
                period: 3,
                name: "Fake Class 3",
                gradeP: 92,
                gradeL: 'A',
                myAssignments: [
                    {
                        name: "Limits",
                        type: 'Quiz',
                        pointsP: 20,
                        pointsR: 20,
                        gradeP: 100,
                        gradeL: 'A',
                        impact: 3
                    },
                    {
                        name: "Derivatives",
                        type: 'Test',
                        pointsP: 50,
                        pointsR: 40,
                        gradeP: 80,
                        gradeL: 'B',
                        impact: -1
                    },
                    {
                        name: "Integrals",
                        type: 'Homework',
                        pointsP: 10,
                        pointsR: 9,
                        gradeP: 90,
                        gradeL: 'A',
                        impact: 1
                    }
                ],
                componentAvg: {
                    Test: 85,
                    Homework: 78,
                    Quiz: 91,
                    Final: 0
                }
            }
        ];
        $scope.openClass = function (classs) {
            var modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/student/modals/my_class.html",
                controller: "MyClassCtl",
                resolve: {
                    classInfo: function () {
                        return classs;
                    }
                }
            })
        };
        $scope.whatIf = function (doc) {
            var gradeInfo = $scope.gradeInfo;
            var modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/student/modals/what_if.html",
                controller: 'whatIfCtrl',
                resolve : {
                    docInfo : function () {
                        return doc
                    },
                    gradeInfo : function () {
                      return gradeInfo
                    }
                }
            })
        };
        $scope.gradeInfo = [
            {
                compName: 'Test',
                pointsAccu: 180,
                maxPoints: 200,
                weight: 40,
                accuWeight: 36
            },
            {
                compName: 'Quiz',
                pointsAccu: 100,
                maxPoints: 200,
                weight: 40,
                accuWeight: 20
            },
            {
                compName: 'Homework',
                pointsAccu: 150,
                maxPoints: 200,
                weight: 20,
                accuWeight: 15
            }
        ];
        $scope.comingUp = [
            {
                className: 'FakeClass 1',
                name: 'Limits Quiz',
                type: 'Quiz',
                totalPoints: 30,
                date: 'Monday August 8'
            },
            {
                className: 'FakeClass 1',
                name: 'Derivatives',
                type: 'Test',
                totalPoints: 60,
                date: 'Tuesday August 9'
            },
            {
                className: 'FakeClass 1',
                name: 'Integrals Practice',
                type: 'Homework',
                totalPoints: 30,
                date: 'Tuesday August 10'
            }
        ];
    }]);
