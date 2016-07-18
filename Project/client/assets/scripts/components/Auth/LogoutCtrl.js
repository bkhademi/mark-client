angular.module('ezgrade')
	.controller('LogoutCtrl', ['$scope','$location', '$auth', 'logger','$localStorage',
	function($scope, $location, $auth, logger, $localStorage) {
	if (!$auth.isAuthenticated()) { $location.path('/'); return; }
	$auth.logout()
		.then(function() {
			$scope.$storage = $localStorage;
			$scope.$storage.user  = null;
			logger.logSuccess('You have successfully logged Out');
			$location.path('/');
		}, function(){
			logger.logSuccess("error logging out");
		});
	}]);
