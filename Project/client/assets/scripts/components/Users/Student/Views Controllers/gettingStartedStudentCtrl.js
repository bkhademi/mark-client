/**
 * Created by adrian-chan on 8/3/16.
 */
ezApp.controller('gettingStartedStudentCtrl',
    ['$scope', '$log', '$modal', 'StudentClass', '$localStorage', 'logger', '$location','$http',
        function ($scope, $log, $modal, StudentClass, $localStorage, logger, $location, $http) {
            $scope.studentClasses = [];
            $scope.user = $localStorage.user;
            $scope.data = {};
            $scope.studentInfo = {};

            $scope.submitStudentInfo = function () {
                $http.post(api+'/students/', $scope.studentInfo).then(
                    function(response){
						debugger;
                        logger.logSuccess('Info Successfully saved');
                        $localStorage.user = response.data.user;
                        $scope.studentSubmitted = true;
                    },
                    function(response){
                        logger.logError("Incorrect Information, Please Try Again");
                    }
                );

            }

            $scope.addClasss = function () {
                StudentClass.save($scope.data, function (data) {
                    if (data.repeated)
                        logger.logWarning(data.msg);
                    else
                        logger.logSuccess(data.msg + ' ' + data.student_class.teacher_class.classs.name);
                    console.log('data', data)
                    $scope.data.teacher_class_id = null;
                    $scope.studentClasses.push(data.student_class);
                }, function (data) {
                    logger.logError("Error. Please try again");
                    console.log(data);
                })
            }

            $scope.finish = function () {
                $location.path('/student-profile');
            }

        }]);
