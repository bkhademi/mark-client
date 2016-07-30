/**
 * Created by Brandon on 7/16/2016.
 */
ezApp.controller('addDocController', ['$scope', '$modalInstance', '$log', '$auth', 'docsInfo','stamps','$http',
    function ($scope, $modalInstance, $log, $auth, docsInfo,stamps,$http) {

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
        $scope.stamps = stamps;

        //Apply to All Stamp
        $scope.applyToAllStamp = function () {
            angular.forEach($scope.docsInfo, function (doc) {
                doc.stampType = $scope.docs.stampTypeAll;

                $scope.docs.multipleChoice = doc.stampType.name === 'Multiple Choice';

                $scope.dataValid = (doc.stampType.name !== 'Not Yet Added' && doc.points !=='Not Yet Added');

            });
            $scope.docs.stampTypeAll = null;
        };
        //Apply to All Stamp

        //Apply to Selected Stamp Function
        $scope.applyToSelectedStamp = function () {
            angular.forEach($scope.docs.selectedDocsS, function (docs) {
                var i = arrayObjectIndexOf($scope.docsInfo, docs.docName, "docName");
                $scope.docsInfo[i].stampType = $scope.docs.stampTypeSelected;

                $scope.docs.multipleChoice = docs.stampType === 'Multiple Choice';

                $scope.dataValid = (docs.stampType !== 'Not Yet Added' && docs.points !=='Not Yet Added');
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
                $scope.dataValid = (doc.points !== 'Not Yet Added' && doc.stampType !=='Not Yet Added');

            });
            $scope.docs.points = null;
        };
        //Apply to All Points Ends

        //Apply to Selected Points
        $scope.applyToSelectedPoints = function () {
            angular.forEach($scope.docs.selectedDocsP, function (docs) {
                var i = arrayObjectIndexOf($scope.docsInfo, docs.docName, "docName");
                $scope.docsInfo[i].points = $scope.docs.points;
                $scope.dataValid = (docs.points !== '' && docs.stampType !== '');
            });
            $scope.docs.selectedDocsP = [];
            $scope.docs.points = null;
        };

        $scope.uploadFile = function(files, name){
            $log.info('name ',name);
            var $index =  parseInt(name.split(',')[1]);
            $log.info('index ', $index);
            var doc = $scope.docsInfo[$index];
            $log.info(doc);
            var fd = new FormData();
            //Take the first selected file
            fd.append("file", files[0]);

            $http.post(api+'/assignment-keys?id='+doc.id, fd , {
                withCredentials: true,
                headers: {'Content-Type': undefined },
                transformRequest: angular.identity
            });


        };
    }]);