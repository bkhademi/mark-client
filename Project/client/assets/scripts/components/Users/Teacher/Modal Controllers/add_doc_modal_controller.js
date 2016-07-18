/**
 * Created by Brandon on 7/16/2016.
 */
ezApp.controller('addDocController', ['$scope', '$modalInstance', '$log', '$auth', 'docsInfo',
    function ($scope, $modalInstance, $log, $auth, docsInfo) {

        function arrayObjectIndexOf(myArray, searchTerm, property) {

            for (var i = 0, len = myArray.length; i < len; i++) {
                if (myArray[i][property] === searchTerm) return i;
            }
            return -1;
        }

        $scope.docs = {
            selectedDocsS: [],
            selectedDocsP: [],
            stampTypeAll: null,
            stampTypeSelected: null,
            points: null,
            stampOption: null,
            pointsOption: null,
            multipleChoice: false
        };


        $scope.docsInfo = docsInfo;
        $log.info($scope.docsInfo);
        $scope.stamps = ['Free Response', 'Credit No Credit', 'Multiple Choice'];

        //Apply to All Stamp
        $scope.applyToAllStamp = function () {
            angular.forEach($scope.docsInfo, function (doc) {
                doc.stampType = $scope.docs.stampTypeAll;
                if(doc.stampType === 'Multiple Choice'){
                    $scope.docs.multipleChoice = true;
                }
                else if(doc.stampType !== 'Multiple Choice'){
                    $scope.docs.multipleChoice = false;
                }
                if(doc.stampType !== 'Not Yet Added' && doc.points !=='Not Yet Added'){
                    $scope.dataValid = true;
                }
                else{
                    $scope.dataValid = false;
                }
            });
            $scope.docs.stampTypeAll = null;
        };
        //Apply to All Stamp

        //Apply to Selected Stamp Function
        $scope.applyToSelectedStamp = function () {
            angular.forEach($scope.docs.selectedDocsS, function (docs) {
                var i = arrayObjectIndexOf($scope.docsInfo, docs.docName, "docName");
                $scope.docsInfo[i].stampType = $scope.docs.stampTypeSelected;
                if(docs.stampType === 'Multiple Choice'){
                    $scope.docs.multipleChoice = true;
                }
                else if(docs.stampType !== 'Multiple Choice'){
                    $scope.docs.multipleChoice = false;
                }
                if(docs.stampType !== 'Not Yet Added' && docs.points !=='Not Yet Added'){
                    $scope.dataValid = true;
                }
                else{
                    $scope.dataValid = false;
                }
            });
            $scope.docs.selectedDocsS = [];
            $scope.docs.stampTypeSelected = null;
        };
        //Apply to Selected Stamp Function Ends

        $scope.dataValid = false;
        //Apply to All Points
        $scope.applyToAllPoints = function () {
            angular.forEach($scope.docsInfo, function (doc) {
                doc.points = $scope.docs.points;
                if(doc.points !== 'Not Yet Added' && doc.stampType !=='Not Yet Added'){
                    $scope.dataValid = true;
                }
                else{
                    $scope.dataValid = false;
                }
            });
            $scope.docs.points = null;
        };
        //Apply to All Points Ends

        //Apply to Selected Points
        $scope.applyToSelectedPoints = function () {
            angular.forEach($scope.docs.selectedDocsP, function (docs) {
                var i = arrayObjectIndexOf($scope.docsInfo, docs.docName, "docName");
                $scope.docsInfo[i].points = $scope.docs.points;
                if(docs.points !== '' && docs.stampType !== ''){
                    $scope.dataValid = true;
                }
                else{
                    $scope.dataValid = false;
                }
            });
            $scope.docs.selectedDocsP = [];
            $scope.docs.points = null;
        };
        $scope.closeModal = function () {
            $modalInstance.close();
        }
    }]);