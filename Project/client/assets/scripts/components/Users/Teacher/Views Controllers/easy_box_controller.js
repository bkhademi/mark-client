/**
 * Created by Brandon on 6/28/2016.
 */
ezApp.controller('easyBoxController', ['$scope', '$modal', '$log', '$location', '$filter', 'logger','AssignmentService',
    function ($scope, $modal, $log, $location, $filter, logger, assignment) {
    	
    	$scope.documents =  assignment.query();
    	$scope.api = api;
    	
        //DropZone
        $scope.dzAddedFile = function (file) {
            $log.info(file);
        };

        $scope.dzError = function (file, errorMessage) {
            $log.log(errorMessage);
        };
        $scope.removedfile = function (file) {

            var i = arrayObjectIndexOf($scope.hwDocuments, file.name, "docName");
            $scope.hwDocuments.splice(i, 1);
        };
        $scope.dropzoneConfig = {
            parallelUploads: 1,
            maxFileSize: 10,
            url: api + '/files',
            acceptedFiles: 'application/pdf',
            addRemoveLinks: true
        };
        //DropZone Functions Ends
        $scope.showAllDocs = function(){

        };

        $scope.fileTypes = ['Homework','Test','Quiz'];
    }]);
