angular.module('ezgrade')
    .controller('SignupCtrl', ['$scope', 'logger', '$auth','$location','$modal','$localStorage',
        function ($scope, logger, $auth, $location, $modal, $localStorage) {
            $scope.signup = function () {
                $auth.signup($scope.user).then(function (response) {
                    $localStorage.user = response.data.user;
                    $auth.setToken(response.data.token);
                    logger.logSuccess('signup success')
                    openSelectUserModal()
                }).catch(function (response) {
                    if (typeof response.data.message === 'object') {
                        angular.forEach(response.data.message, function (message) {
                            logger.logError(message[0]);
                        });
                    } else
                        logger.logError(response.data.message);

                });
            };

            $scope.selectUserType = openSelectUserModal;

            function openSelectUserModal(){
                $modal.open({
                    templateUrl:'views/modals/selectUserModal.html',
                    size:'md'
                }).result.then(function(route){
                        if(!route) {
                            openSelectUserModal();
                            return;
                        }
                        $location.path(route);
                }, function(){
                    openSelectUserModal();
                });
            }
        }]);
