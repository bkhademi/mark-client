angular.module('ezgrade')
.controller('LoginCtrl', ['$scope', 'logger', '$auth', '$location', function($scope, logger, $auth, $location) {
	$scope.login = function() {
	  $auth.login({ email: $scope.email, password: $scope.password })
		.then(function(response) {
			var data = response.data;
			logger.logSuccess('You have successfully logged in');
	 		$location.path(data.route);
		})
		.catch(function(response) {
		  logger.log(response.data.message);

		});
	};
	$scope.authenticate = function(provider) {
	  $auth.authenticate(provider)
		.then(function(response) {
			var data = response.data;
			logger.logSuccess('You have successfully logged in');
			$location.path(data.route);
		})
		.catch(function(response) {
			logger.log(response.data ? response.data.message : response);

		});
	};
}]);
