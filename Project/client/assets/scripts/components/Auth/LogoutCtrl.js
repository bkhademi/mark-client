angular.module('ezgrade')
	.controller('LogoutCtrl', function($location, $auth, logger) {
	if (!$auth.isAuthenticated()) { $location.path('/'); return; }
	$auth.logout()
		.then(function() {
			logger.logSuccess('You have successfully logged Out');
			$location.path('/');
		}, function(){
			logger.logSuccess("error logging out");
		});
	});
