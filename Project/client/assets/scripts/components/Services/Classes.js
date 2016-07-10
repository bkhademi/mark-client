/**
 * Created by AdrianPlusPlus  on 7/7/2016.
 */
ezApp.factory('ClassService', ['$resource', 'logger','$log',function($resource, logger, $log){
	var resource = $resource(api+'/classes/:id');
	
	resource.getForTeacher = function(){
		var promise = resource.query(
			process_teacher_classes,
			cannot_get_classes_error);
		
		return promise;
	}
	
	
	resource.getForStudent = function(student_id){
		var promise = resource.query(
			process_student_classes,
			cannot_get_classes_error)
		return promise;
	}
	
	
	function process_teacher_classes(classes){
		angular.forEach(classes, function(cs){
			delete cs.teacher_class.class_id;
			angular.extend(cs, cs.teacher_class);
			delete cs.teacher_class;
			angular.forEach(cs.grade_breakdown, function(gb){
				delete gb.assignment_category.id;
				delete gb.assignment_category_id;
				angular.extend(gb,gb.assignment_category);
				delete gb.assignment_category;
			})
		})
		$log.info(classes);
	}
	
	function process_student_classes(classes){
		
	}
	
	function cannot_get_classes_error(){
		logger.logError('Error getting classes, please try again');
	}
	
	return resource;
}]);

