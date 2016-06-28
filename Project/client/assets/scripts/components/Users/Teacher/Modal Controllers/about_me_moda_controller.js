/**
 * Created by Brandon on 6/25/2016.
 */
//about_me_controller Starts
ezApp.controller('aboutMeController', ['$scope', '$modalInstance', '$log',
    function ($scope, $modalInstance, $log) {
        $scope.departments = [
            {type: 'Math'},
            {type: 'English'},
            {type: 'Science'},
            {type: 'Social Science'},
            {type: 'Computer Science'},
            {type: 'Engineering'},
            {type: 'Art'}
        ];

        //Data From Form
        $scope.aboutYouInfo = {};

        //Validate on Submit
        $scope.submitForm = function (isValid) {
            if (isValid) {
                $modalInstance.close($scope.aboutYouInfo);
            }
        };
    }]);
//about_me_modal_controller Ends