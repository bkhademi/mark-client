/**
 * Created by AdrianPlusPlus  on 7/3/2016.
 */
ezApp.factory('AssignmentService', ['$resource',function($resource){
	var resource = $resource(api+'/assignments/:id',null,{
		'update': { method:'PUT' }
	});
	
	
	return resource;
}]);
