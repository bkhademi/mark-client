angular.module('ezgrade')
	.controller('NavbarCtrl', function($scope, $auth) {
		$scope.isAuthenticated = function() {
			return $auth.isAuthenticated();
		};
		$scope.logout = function(){
			debugger;
			if (!$auth.isAuthenticated()) { return; }
			$auth.logout()
				.then(function() {
					logger.info('You have been logged out');
					$location.path('/');
				});
		}
	});
