/**
 * Created by adrian-chan on 8/3/16.
 */
ezApp.factory('StudentClass', ['$resource',function($resource){
    var resource = $resource(api+'/student-classes/:id',null,{
        'update': { method:'PUT' }
    });

    return resource;
}]);