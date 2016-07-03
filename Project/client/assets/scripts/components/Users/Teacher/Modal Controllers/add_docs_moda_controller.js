/**
 * Created by Brandon on 6/25/2016.
 */
ezApp.controller('addedDocsController', ['$scope', '$modalInstance', '$log',
    function ($scope, $modalInstance, $log) {
        $scope.hwDocuments = [];
        $scope.selectedDocs = [];

        //Apply to All function Starts
        $scope.applyToAll = function () {
            angular.forEach($scope.hwDocuments, function (docs) {
                docs.points = $scope.assignToAllPoints;
            });
            $scope.firstTime = true;
        };
        //Apply to All function Ends

        //arrayObject Index of
        function arrayObjectIndexOf(myArray, searchTerm, property) {
            for (var i = 0, len = myArray.length; i < len; i++) {
                if (myArray[i][property] === searchTerm) return i;
            }
            return -1;
        }

        //Apply to Selected Function Starts
        $scope.applyToSelected = function () {
            angular.forEach($scope.selectedDocs, function (docs) {
                $log.info($scope.selectedDocs);
                $log.info(docs);
                var i = arrayObjectIndexOf($scope.hwDocuments, docs.docName, "docName");
                $log.info(i);
                $scope.hwDocuments[i].points = $scope.assignToSelected;
                $log.info($scope.hwDocuments)
            });
            $scope.firstTime = true;
        };
        //Apply to Selected Function Ends


        //DropZone Functions Starts
        $scope.dzAddedFile = function (file) {
            $log.info(file);
            var newHWDoc = {};
            newHWDoc.docName = file.name;
            newHWDoc.points = 'Not Yet Added';
            newHWDoc.type = 'Homework';
            $scope.hwDocuments.push(newHWDoc);
            $scope.firstTime = true;
            $scope.$apply();
        };

        $scope.dzError = function (file, errorMessage) {
            $log.log(errorMessage);
        };
        $scope.removedfile = function (file) {
            // var _ref;
            var i = arrayObjectIndexOf($scope.hwDocuments, file.name, "docName");
            $scope.hwDocuments.splice(i,1);
            // return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
        };
        $scope.dropzoneConfig = {
            parallelUploads: 1,
            maxFileSize: 10,
            url: api + '/files',
            acceptedFiles: 'application/pdf',
            addRemoveLinks: true
        };
        //DropZone Functions Ends

        //Submit Form
        $scope.submitForm = function (isValid) {
            if (isValid) {
                $modalInstance.close($scope.hwDocuments);
            }
        };

    }]);