angular.module('learn.controllers', [])

    .controller('PostListController', ['$scope', 'Post', function ($scope, Post) {
        $scope.posts = Post.query();
    }])

// 'Post' on line 3 refers to the 'Post' factory

/* We have controller called 'PostListController' that gets all posts and stores it in 
an array called $scope.posts. In order to show them */    

    .controller('SinglePostController', ['$scope', '$routeParams', '$location', 'Post', function ($scope, $routeParams, $location, Post) {
        $scope.post = Post.get({ id: $routeParams.id });
    
        $scope.edit = function(){
            $location.path('/' + $routeParams.id + '/update');
        }
    
        $scope.delete = function(){
            if (confirm('Are you sure you want to delete?')){
                $scope.post.$delete(function(){
                $location.replace().path('/');   
                })
            }
        }
    
    }])

// view single.html to see where/how edit and delete buttons are placed
    
    .controller('ComposePostController', ['$scope', 'Post', 'Category', 'User', '$location', function ($scope, Post, Category, User, $location) {
        $scope.users = User.query();
        $scope.categories = Category.query();

        $scope.save = function () {
            var p = new Post($scope.post);
            p.$save(function () {
                $location.path('/');
            }, function (err) {
                console.log(err);
            });
        }
    }])

    .controller('UpdatePostController', ['$scope', 'Post', 'Category', '$location', '$routeParams', function($scope, Post, Category, $location, $routeParams){
        $scope.categories = Category.query();
        $scope.post = Post.get({ id: $routeParams.id }, function(){
            $scope.post.categoryid = String($scope.post.categoryid);
        });

        $scope.save = function(){
            $scope.post.$update(function(){
                $location.replace().path('/' + $routeParams.id);
            });
        }
    }]);















