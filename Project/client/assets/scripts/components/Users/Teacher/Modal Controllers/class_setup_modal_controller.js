/**
 * Created by Brandon on 7/7/2016.
 */
ezApp.controller('classSetUpModalController',
    ['$scope','$log','$modalInstance','classInfo','Component', 'GradeScale','logger',
    function ($scope,$log,$modalInstance, classInfo,Component, GradeScale, logger) {
        $scope.classInfo = classInfo;
        //SaveChanges

        $scope.updateGradeBreakdown  = function(data, component){
            $log.log('$data', data);
            $log.log('scale', component);
            Component.update({id:component.id},{grade_breakdown:data},
                function(response){
                    logger.logSuccess('Updated Grade Breakdown Component');
                },
                function(error){
                    logger.logError('Error Updating Grade Breakdown, Please Refresh Page and Try Again')
                }
            );
        };

        $scope.updateGradeScale = function(data, scale){
            $log.log('$data', data);
            $log.log('scale', scale);
            GradeScale.update({id:scale.id},{grade_scale:data},
                function(response){
                    logger.logSuccess('Updated Grade Grade Scale Component')
                },
                function(error){
                    logger.logError('Error Updating Grade Scale, Please Refresh Page and Try Again')
                }
            );
        };

}]);