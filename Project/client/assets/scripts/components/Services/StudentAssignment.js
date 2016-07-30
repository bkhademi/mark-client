/**
 * Created by adrian-chan on 7/29/16.
 */
ezApp.factory('StudentAssignment', ['$resource',function($resource){
    var resource = $resource(api+'/student-assignments/:id',null,{
        'update': { method:'PUT' }
    });

    resource.updateScore = function (studentAssignment) {
        debugger;
        var promise = resource.update({id:studentAssignment.id},{'score':studentAssignment.score});

        return promise;
    };

    return resource;
}]);