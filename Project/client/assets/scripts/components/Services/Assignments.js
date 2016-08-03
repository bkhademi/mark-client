/**
 * Created by AdrianPlusPlus  on 7/3/2016.
 */
ezApp.factory('AssignmentService', ['$resource',function($resource){
	var resource = $resource(api+'/assignments/:id',null,{
		'update': { method:'PUT' }
	});

	resource.getForStudent = function(){
		return resource.query(
			processStudentAssignments
		);
	}

	function processStudentAssignments(assignments){
		angular.forEach(assignments, function(ass){
			ass.name = ass.teacher_assignment.assignment.name;
			ass.type = ass.teacher_assignment.assignment_category.name;
			ass.className = ass.teacher_class.classs.name;
			ass.totalPoints = ass.teacher_assignment.points;
			ass.date = ass.teacher_assignment.due_dt;
		});
	}

	return resource;
}]);
