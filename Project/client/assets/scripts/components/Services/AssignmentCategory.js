ezApp.factory('AssignmentCategoryService', ['$resource',function($resource){
    var resource = $resource(api+'/assignment-categories/:id',null,{
        'update': { method:'PUT' }
    });


    return resource;
}]);