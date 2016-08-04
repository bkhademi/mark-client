angular.module('ezgrade')
.controller('LoginCtrl', ['$scope', 'logger', '$auth', '$location', '$localStorage','$modal',
function($scope, logger, $auth, $location,$localStorage,$modal) {
	$scope.login = function() {
	  $auth.login({ email: $scope.email, password: $scope.password })
		.then(function(response) {
			var data = response.data;
			$scope.$storage = $localStorage;
			$scope.$storage.user = data.user;
			logger.logSuccess('You have successfully logged in');
			$location.path(data.route);
		})
		.catch(function(response) {
		  logger.logError(response.data.msg);

		});
	};
	$scope.authenticate = function(provider) {
	  $auth.authenticate(provider)
		.then(function(response) {
			var data = response.data;
			$scope.$storage = $localStorage;
			$scope.$storage.user = data.user;
			logger.logSuccess('You have successfully logged in');
			
			if(data.new_user)
				openSelectUserModal();
			else
				$location.path(data.route);
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
