/**
 * Created by AdrianPlusPlus  on 7/7/2016.
 */
ezApp.factory('ClassService', ['$resource', 'logger',  function ($resource, logger) {
    var resource = $resource(api + '/classes/:id');

    resource.getForTeacher = function () {
        var promise = resource.get(
            function (data) {// data is data received from the blackend
                processTeacherClasses(data.classes); // remove unused data, prettify
                //processTeacherGrades(data.classes_breakdowns);// remove unused data, prettify
                //computeStudentsGrades(data.classes, data.classes_breakdowns); // computes grades, averages, etc..
            },
            cannot_get_classes_error);

        return promise;
    }

    resource.getForTeacherLight = function(){
            return resource.query({light:true});
    }

    resource.getForStudent = function (student_id) {
        var promise = resource.query(
            process_student_classes,
            cannot_get_classes_error)
        return promise;
    }


    function processTeacherClasses(classes) {
        angular.forEach(classes, function (cs) {
            delete cs.teacher_class.class_id;
            angular.extend(cs, cs.teacher_class);
            delete cs.teacher_class;
            angular.forEach(cs.grade_breakdown, function (gb) {
                delete gb.assignment_category.id;
                delete gb.assignment_category_id;
                angular.extend(gb, gb.assignment_category);
                delete gb.assignment_category;
            })
        })
        console.info(classes);
    }

    function processTeacherGrades(breakdowns) {

        angular.forEach(breakdowns, function (class_breakdowns) {
            var total = 0;
            var components = {};
            var count = 0;
            angular.forEach(class_breakdowns, function (item, category_id) {
                total += item.grade;
                angular.forEach(item.breakdown, function (item, category_id) {
                    if (!components[category_id])
                        components[category_id] = 0;
                    components[category_id] += item;
                });
                count++;
            })
            var avg_grade = total/count;
            class_breakdowns.avg_grade = avg_grade;
            angular.forEach(components, function(val,key){
               components[key] = val/count;
            });
            console.log('components', components);
            console.log('total', total);
            console.log('count', count);
            console.log('avg_grade', avg_grade);
        });

    }

    function computeStudentsGrades(classes, classesGrades){
        angular.forEach(classes, function(classs){
            var componentsMax = {};
            angular.forEach(classs.grade_breakdown, function(breakdown){

                componentsMax[breakdown.id] = breakdown.value;
                componentsMax['avg'+breakdown.id]  = 0;
            });
            var count = 0;
            angular.forEach(classesGrades[classs.id], function(student_breakdown,student_id){
                var student_breakdown_grade= {};
                angular.forEach(student_breakdown.breakdown, function(value, category_id ){
                    student_breakdown_grade[category_id] = (student_breakdown.breakdown[category_id]/componentsMax[category_id]) * 100;
                    componentsMax['avg'+category_id] += student_breakdown.breakdown[category_id];
                })
                if(classesGrades && classesGrades[classs.id] && classesGrades[classs.id][student_id])
                    if(typeof classesGrades[classs.id][student_id] === 'object' )
                        classesGrades[classs.id][student_id].breakdown_score = student_breakdown_grade;
                count++;
            });
            angular.forEach(classs.grade_breakdown, function(breakdown){
                breakdown.avg = ((componentsMax['avg'+ breakdown.id]/(count-1))/breakdown.value)*100;
            });
            console.info('componentsMax ', componentsMax);
            console.info('classesInfo', classes)
        });
    }

    function cannot_get_classes_error() {
        logger.logError('Error getting classes, please try again');
    }

    return resource;
}]);

