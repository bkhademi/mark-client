/**
 * Created by Brandon on 6/28/2016.
 */
ezApp.controller('easyBoxController', ['$scope', '$modal', '$log', '$location', '$auth', '$filter', 'logger','AssignmentService',
    function ($scope, $modal, $log, $location, $auth , $filter, logger, assignment) {
    	
    	$scope.documents =  assignment.query();
    	$scope.api = api;
    	$scope.docsToSend = [];
        //DropZone
        $scope.dzAddedFile = function (file) {
            var newDoc = {};
            newDoc.docName = file.name;
            newDoc.points = 'Not Yet Added';
            newDoc.type = $scope.dropZone.docType;
            newDoc.stampType = 'Not Yet Added';
            $scope.docsToSend.push(newDoc);
        };

        $scope.dzCompleted = function(){
            var modalInstance;
            modalInstance = $modal.open({
                size:'lg',
                templateUrl:'views/teacher/modals/add_doc.html',
                controller: 'addDocController',
                resolve:{
                    docsInfo: function () {
                        return $scope.docsToSend
                    }
                }
            })
        };

        //classInfo from DB
       $scope.components = ['Test', 'Exam', 'Final', 'Essay', 'Homework'];
        $scope.dropZone = {
            docType : []
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
            addRemoveLinks: true,
            headers:{
                Authorization: "Bearer " + $auth.getToken()
            }
        };
        $scope.dropzoneConfigGrade = {
            parallelUploads: 1,
            maxFileSize: 10,
            url: api + '/grading',
            acceptedFiles: 'image/*',
            addRemoveLinks: true,
            headers:{
                Authorization: "Bearer " + $auth.getToken()
            }
        };
        //DropZone Functions Ends

        //showAll Docs
        $scope.buttonName = 'Show All';
        $scope.isCollapsed = false;
        $scope.viewLimit = 3;
        
        $scope.showAllDocs = function(){
            if(!$scope.isCollapsed){
                $scope.buttonName = 'Hide';
                $scope.isCollapsed = true;
                $scope.viewLimit = '';
            }
            else{
                $scope.buttonName = 'Show All';
                $scope.isCollapsed = false;
                $scope.viewLimit = 3;
            }
        };

        $scope.fileTypes = ['Homework','Test','Quiz'];

        $scope.openStampedDocument = function(doc){
            var url = api+'/files/'+doc.teacher_assignments.id+'?stamped=true&';
            url += "token="+$auth.getToken();

            window.open(url);

        };

        $scope.deleteFile = function(doc){
            assignment.delete({id:doc.teacher_assignments.id}, function(data){
                logger.logSuccess('file successfully deleted');
                var i = $scope.documents.indexOf(doc);
                $scope.documents.splice(i, 1);
            },function(err){
                logger.logError('Error deleting file, please refresh page and try again');
            });
        }
    }]);
