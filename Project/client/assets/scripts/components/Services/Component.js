ezApp.factory('Component', ['$resource',function($resource){
	var resource = $resource(api+'/grade_breakdowns/:id',null,{
		'update': { method:'PUT' }
	});
	
	resource.remove = function(grade_breakdown){
		return resource.delete({id:grade_breakdown.id});
	};
	
	resource.edited = function(grade_breakdown){
		return resource.update({id:grade_breakdown.id}, {grade_breakdown:grade_breakdown});
	}
	
	resource.created = function(points, classs){
		return resource.store({});
	} 
	
	return resource;
}]);
