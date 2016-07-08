angular.module('ezgrade')
.controller('SignupCtrl', function($scope,logger, $auth) {
	$scope.signup = function() {
	  $auth.signup({
		user_name: $scope.user_name,
		email: $scope.email,
		password: $scope.password
	  }).catch(function(response) {
		if (typeof response.data.message === 'object') {
		  angular.forEach(response.data.message, function(message) {
		  	logger.log(message[0]);
		  });
		} else 
		  logger.log(response.data.message);
		
	  });
	};
})
