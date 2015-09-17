var app = angular.module('controllerApp', ['ngSanitize']);

var mainControllerFunction = function($scope){
  $scope.userInput = {};
  $scope.posts = [];
  $scope.showForm = false;
  $scope.newPost = {
    postTitle : '',
    postAuthor : '',
    postDescription : '',
    postPhoto : '',
  };
  $scope.savePost = function(title, author, description, photo){
    var post = {
      title: title.$modelValue,
      author: author.$modelValue,
      description: description.$modelValue,
      photoURL: photo.$modelValue,
      date: Date.now(),
      votes: 0,
      comments : [],
      showComments: false,
      showCommentForm: false
    };
    $scope.posts.push(post);
    $scope.newPost = {};
    // $scope.postForm.$setPristine();
    $scope.showForm = false;
  };
  $scope.postUp = function(){
    this.post.votes += 1;
  };
  $scope.postDown = function(){
    this.post.votes -= 1;
  };
  $scope.showCommentFormFunction = function(){
    this.post.showCommentForm = true;
  };
  $scope.newComment = function(){
    var comment = {
      title : $scope.userInput.title,
      mainText : $scope.userInput.main,
    };
    this.post.comments.push(comment);
    $scope.userInput = {};
    this.post.showCommentForm = false;
  };
  $scope.showCommentsSection = function(){
    this.post.showComments = true;
  };
  $scope.hideCommentsSection= function(){
    this.post.showComments = false;
  };
  $scope.test = 'test';
  $scope.sortOptions = ['created_at', 'author', 'title'];
  $scope.sort = 'created_at';
  $scope.sortPost = function(number){
    $scope.sort = $scope.sortOptions[number];
  };
};

var postControllerFunction = function($scope){
};

// app.controller('postController', ['$scope', postControllerFunction]);

app.controller('mainController', ['$scope', mainControllerFunction]);
