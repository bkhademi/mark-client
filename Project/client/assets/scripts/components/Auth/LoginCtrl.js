angular.module('ezgrade')
.controller('LoginCtrl', ['$scope', 'logger', '$auth', '$location', '$localStorage','$modal',
function($scope, logger, $auth, $location,$localStorage,$modal) {
	$scope.login = function() {
	  $auth.login({ email: $scope.email, password: $scope.password })
		.then(function(response) {
			var data = response.data;
			$localStorage.user = data.user;

			$location.path(data.route);

			logger.logSuccess('You have successfully logged in');
		})
		.catch(function(response) {
		  logger.logError(response.data.msg);

		});
	};
	$scope.authenticate = function(provider) {
	  $auth.authenticate(provider)
		.then(function(response) {
			var data = response.data;
			$localStorage.user = data.user;

			if(data.new_user)
				openSelectUserModal();
			else
				$location.path(data.route);

			logger.logSuccess('You have successfully logged in');
		})
		.catch(function(response) {
			logger.logError(response.data ? response.data.msg : response);

		});
	};

	
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
