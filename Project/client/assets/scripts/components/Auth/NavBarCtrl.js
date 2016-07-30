angular.module('ezgrade')
	.controller('NavbarCtrl', ['$scope','$auth','$localStorage',
	function($scope, $auth, $localStorage) {
		$scope.isAuthenticated = function() {
			return $auth.isAuthenticated();
		};
		$scope.$storage = $localStorage;

		console.info('localStorage.user',$scope.$storage.user);
		$scope.logout = function(){
			if (!$auth.isAuthenticated()) { return; }
			$auth.logout()
				.then(function() {
					logger.info('You have been logged out');
					$location.path('/');
				});
		};
		
		
	}]);
