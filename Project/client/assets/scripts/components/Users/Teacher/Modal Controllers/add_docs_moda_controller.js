/**
 * Created by Brandon on 6/25/2016.
 */
ezApp.controller('addedDocsController', ['$scope', '$modalInstance', '$log',
    function ($scope, $modalInstance, $log) {

        //scope Arrays, Objects and Variables Starts
        $scope.stampOptions = ['A to D', 'Credit, No Credit', 'Numerical'];
        $scope.hwDocuments = [];
        $scope.ponts = {
            selectedDocs: []
        };
        $scope.stamp = {
            selectedDocs: []
        };

        $scope.aToBStamp = {
            name: 'A to D',
            pdfLink: 'http://ezgrade-api.ddns.net/images/stamp_abc.png',
            description: 'The A-D enables to quickly select the level of credit you want to give for a any document. ' +
            'Giving an A means you give 100% percent of the credit, giving a B means 85% and so on and so forth. ' +
            'EasyGrade will then determine its actual value, and give that score to the student.'
        };
        $scope.creditNoStamp = {
            name: 'Credit No Credit',
            pdfLink: 'http://ezgrade-api.ddns.net/images/stamp_credit.png',
            description: 'The Credit No Credit stamp serves its name purpose, do you want to give full credit o no credit ' +
            'at all. Giving credit means you give 100% of the points that assignment is worth, and giving no credit,' +
            ' we think you know. EasyGrade determines the value, and give that score to the student'
        };

        $scope.numericalStamp = {
            name: 'Numerical',
            pdfLink: 'http://ezgrade-api.ddns.net/images/stamp_numerical.png',
            description: 'Very straight forward! You give determine your own numerical value you want to assign. ' +
            'EasyGrade will assign such value to the student!'
        };

        //arrayObject Index of
        function arrayObjectIndexOf(myArray, searchTerm, property) {
            for (var i = 0, len = myArray.length; i < len; i++) {
                if (myArray[i][property] === searchTerm) return i;
            }
            return -1;
        }

        //Apply to All  Stamp function Ends
        $scope.applyToAllStamp = function () {
            angular.forEach($scope.hwDocuments, function (docs) {
                docs.stampType = $scope.stampForAll
            });
            $scope.stampAdded = true;
        };
        //Apply to All Stamps Function


        //Apply to Selected Stamp Function
        $scope.applyToSelectedStamp = function () {
            angular.forEach($scope.stamp.selectedDocs, function (docs) {
                var i = arrayObjectIndexOf($scope.hwDocuments, docs.docName, "docName");
                $scope.hwDocuments[i].stampType = $scope.stampForSelected;
            });
            $scope.stampAdded = true;
        };
        //Apply to Selected Function Ends


        //Apply to All Points function Starts
        $scope.applyToAll = function () {
            angular.forEach($scope.hwDocuments, function (docs) {
                docs.points = $scope.assignToAllPoints;
            });
            $scope.firstTime = true;
        };

        //Apply to Selected Points Function Starts
        $scope.applyToSelected = function () {
            angular.forEach($scope.stamp.selectedDocs, function (docs) {
                var i = arrayObjectIndexOf($scope.hwDocuments, docs.docName, "docName");
                $scope.hwDocuments[i].points = $scope.assignToSelected;
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
            newHWDoc.stampType = 'Not Yet Added';
            $scope.hwDocuments.push(newHWDoc);
            $scope.docsAdded = true;
            $scope.$apply();
        };

        $scope.dzError = function (file, errorMessage) {
            $log.log(errorMessage);
        };
        $scope.removedFile = function (file) {
            // var _ref;
            var i = arrayObjectIndexOf($scope.hwDocuments, file.name, "docName");
            $scope.hwDocuments.splice(i, 1);
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
                $log.info($scope.hwDocuments);
                $modalInstance.close($scope.hwDocuments);
            }
        };

    }]);