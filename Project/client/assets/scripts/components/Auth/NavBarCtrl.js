angular.module('ezgrade')
	.controller('NavbarCtrl', ['$scope','$auth','$localStorage','$log',
	function($scope, $auth, $localStorage, $log) {
		$scope.isAuthenticated = function() {
			return $auth.isAuthenticated();
		};
		$scope.$storage = $localStorage
		
		$log.info($scope.user);
		$scope.logout = function(){
			debugger;
			if (!$auth.isAuthenticated()) { return; }
			$auth.logout()
				.then(function() {
					logger.info('You have been logged out');
					$location.path('/');
				});
		};
		
		
	}]);
