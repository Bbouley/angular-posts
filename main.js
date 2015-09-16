var app = angular.module('controllerApp', ['ngSanitize']);

var formControllerFunction = function($scope){
  $scope.posts = [];
  $scope.showForm = false;
  $scope.newPost = {
    postTitle : '',
    postAuthor : '',
    postDescription : '',
    postPhoto : ''
  };
  $scope.savePost = function(title, author, description, photo){
    var post = {title: title.$modelValue, author: author.$modelValue, description: description.$modelValue, photoURL: photo.$modelValue };
    $scope.posts.push(post);
    $scope.newPost = {};
    $scope.postForm.$setPristine();
    $scope.showForm = false;
    console.log($scope.posts);
  };
};

var postControllerFunction = function($scope){
  $scope.test = 'test';
};

app.controller('postController', ['$scope', postControllerFunction]);

app.controller('formController', ['$scope', formControllerFunction]);
