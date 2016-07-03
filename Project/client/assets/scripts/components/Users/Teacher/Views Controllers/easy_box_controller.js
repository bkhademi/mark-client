/**
 * Created by Brandon on 6/28/2016.
 */
ezApp.controller('easyBoxController', ['$scope', '$modal', '$log', '$location', '$http', '$filter', 'logger',
    function ($scope, $modal, $log, $location, $http, $filter, logger) {
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
        $scope.documents = [
            {
                name: 'Nijiya Market',
                type: 'Test',
                points: 292
            }, {
                name: 'Eat On Monday Truck',
                type: 'Homework',
                points: 119
            }, {
                name: 'Tea Era',
                type: 'Quiz',
                points: 874
            }, {
                name: 'Rogers Deli',
                type: 'Quiz',
                points: 347
            }, {
                name: 'MoBowl',
                type: 'Homework',
                points: 24
            }
        ];
    }]);