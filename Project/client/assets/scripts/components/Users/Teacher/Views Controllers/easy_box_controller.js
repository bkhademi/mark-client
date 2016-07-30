/**
 * Created by Brandon on 6/28/2016.
 */
ezApp.controller('easyBoxController',
    ['$scope', '$modal', '$log', '$auth',
        'logger','AssignmentService','AssignmentCategoryService','$q',
    function ($scope, $modal, $log, $auth , logger, Assignment, AssignmentCategory, $q) {

        $scope.getAssignments = function(){
            $scope.documents =  Assignment.query();
        };
        $scope.getAssignments();



        $scope.fileTypes = AssignmentCategory.query();
        $scope.stamps = [{id:1, name:'Free Response'},{id:2, name:'Credit'},{id:3, name:'Multiple Choice'}]
    	$scope.docsToSend = [];
        $scope.uploadDoc = {type:''};
        $scope.dropzone = null;
        $scope.dropzoneGrade = null;
        /*****************   DropZone Add Document   *****************/
        function dzAddedFile(file) {
            var newDoc = {};
            newDoc.name = file.name;
            newDoc.points = 'Not Yet Added';
            newDoc.type = $scope.uploadDoc.type;
            newDoc.stampType = {name:'Not Yet Added'};
            $scope.docsToSend.push(newDoc);
        };

        function dzError(file, errorMessage) {
            $log.log(errorMessage);
        };

        function dzSending(file, xhr, formData){
            formData.append('docType' , angular.toJson($scope.uploadDoc.type));
        }

        // attach server id with local file in array (to PUT easily)
        function dzSuccess(file, response){
            angular.forEach($scope.docsToSend, function(doc,$index){
               if (response.assignment.file_name == doc.name)
                   doc.id = response.teacher_assignment.id;
            });
        }

        function dzQueueCompleted(){
            $modal.open({
                size:'lg',
                templateUrl:'views/teacher/modals/add_doc.html',
                controller: 'addDocController',
                resolve:{
                    docsInfo: function () {return $scope.docsToSend;},
                    stamps:function(){ return $scope.stamps;}
                }
            }).result.then(function(){
                // upload files with new information
                var promises = [];
                $log.log('docs_to_Send :', $scope.docsToSend);
                angular.forEach($scope.docsToSend, function(doc){
                    $log.info('doc ', doc);
                    var promise  = Assignment.update({id:doc.id},doc);
                    Assignment.save({file:doc.key})
                    promises.push(promise);
                })

                $q.all(promises).then(function(data){
                    logger.logSuccess('Files Uploaded Successfully');
                }, function(err){
                    $log.error(err);
                });

                $log.info('file', $scope.docsToSend);
                $scope.dropzone.removeAllFiles();
                $scope.docsToSend = [];
            })

        };


        $scope.dzEventHandlers = {
            'addedfile': dzAddedFile,
            'error': dzError,
            'sending': dzSending,
            'queuecomplete': dzQueueCompleted,
            'success': dzSuccess
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

        /*****************   DropZone Grade   *****************/
        function dzGradeCompleted(file, response){
            openReviewGradedMasterSheetModal(response.studentAssignments)
        }

        function openReviewGradedMasterSheetModal(records){

            $modal.open({
                size:'lg',
                templateUrl:'views/teacher/modals/reviewGradedMasterSheet.html',
                controller: 'ReviewMasterSheetModalCtrl',
                resolve:{
                    graded: function(){return records;}

                }
            }).result.then(


            );
        }
        function openReviewGradedFreeResponseModal(){

        }
        function openReviewGradedCreditModal(){

        }

        $scope.dzConfigGrade = {
            parallelUploads: 1,
            maxFileSize: 10,
            url: api + '/grading',
            acceptedFiles: 'image/*',
            addRemoveLinks: true,
            headers:{
                Authorization: "Bearer " + $auth.getToken()
            }
        };

        $scope.dzEventHandlersGrading = {
            'error':dzError,
            'success':dzGradeCompleted,
        }

        $scope.clearGradingDropzone = function(){
            $scope.dropzoneGrade.removeAllFiles();
        };

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


        $scope.updateAssignment=  function(data,doc){
            Assignment.update({id:doc.id},data,function(response){logger.logSuccess('updated successfully')});

        }

        $scope.openSelectDueDateModal = function(doc){
            var modalInstance = modalInstance = $modal.open({
                size: 'lg',
                templateUrl: "views/teacher/modals/select_due_date_modal.html",
                controller:['$scope', 'teacher_assignment', function($scope,teacher_assignment){
                    $scope.teacher_assignment = teacher_assignment;
                    $scope.dt = new Date();

                    $scope.showWeeks = true;
                    $scope.toggleWeeks = function() {
                        $scope.showWeeks = !$scope.showWeeks
                    };
                    $scope.clear = function() {
                        $scope.dt = null
                    };
                    $scope.disabled = function(date, mode) {
                        return ((mode == 'day') && (date.getDay()== 0||date.getDay()== 6));
                    };

                    $scope.minDate = new Date();

                    $scope.open = function($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                        $scope.opened = true
                    };
                    $scope.dateOptions = {
                        'year-format': "'yy'",
                        'starting-day': 1
                    };
                    $scope.format = 'dd-MMMM-yyyy';

                }],
                resolve:{
                    teacher_assignment:function(){ return doc; }
                }
            });
            modalInstance.result.then(function (date) {
                Assignment.update({id:doc.id},{due_dt:date})
                openStampedDocument(doc);
            });
        };

        function openStampedDocument(doc){
            var url = api+'/files/'+doc.id+'?stamped=true&';
            url += "token="+$auth.getToken();
            window.open(url);
        };

        $scope.deleteFile = function(doc){

            Assignment.delete({id:doc.id}, function(data){
                logger.logSuccess('file successfully deleted');
                var i = $scope.documents.indexOf(doc);
                $scope.documents.splice(i, 1);
            },function(err){
                logger.logError('Error deleting file, please refresh page and try again');
            });
        }
    }]);
