ezApp.factory('GradeScale',['$resource',function($resource){
    var resource = $resource(api+'/grade_scales/:id',null,{
        'update': { method:'PUT' }
    });

    resource.remove = function(scale){
        return resource.delete({id:scale.id});
    };

    resource.edited = function(scale){
        return resource.update({id:scale.id},{grade_scale:scale});
    }

    resource.created = function(scale, classs){
        return resource.store({});
    }

    return resource;
}]);