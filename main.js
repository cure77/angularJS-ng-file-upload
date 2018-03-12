//inject directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$scope', 'Upload', function ($scope, Upload) {
    
    // full reference - https://github.com/danialfarid/ng-file-upload
    
    // upload later on form submit or something similar
    $scope.submit = function() {
        debugger;
      if (angular.isDefined($scope.form.file) && $scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
      if (angular.isDefined($scope.form.files) && $scope.form.files.$valid && $scope.files) {
        $scope.uploadFiles($scope.files);
      }

    };

    // upload on file select or drop
    $scope.upload = function (file) {
        Upload.upload({
            url: 'upload.cfm',
            data: {file: file, 'username': $scope.username || 'cure'}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
    // for multiple files:
    $scope.uploadFiles = function (files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
            Upload.upload({
                url: 'upload.cfm', 
                data: {file: files[i], 'username': $scope.username || 'cure'}
            }).then(function (resp) {
                    console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.data);
            }, function (resp) {
                    console.log('Error status: ' + resp.status);
            }, function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        }
      }
    };
}]);