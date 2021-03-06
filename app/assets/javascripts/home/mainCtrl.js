var app = angular.module('flapperNews', ['ui.router', 'templates']);

app.controller('MainCtrl', [
		'$scope', 
		'posts',
		function($scope, posts){
			$scope.posts = posts.posts;
			
			$scope.addPost = function(){
				if(!$scope.title || $scope.title === '') { return; }
				$scope.posts.push({
					title: $scope.title, 
					link: $scope.link,
					upvotes: 0,
					comments: [
						{author: 'Joe', body: 'cool post!', upvotes: 0},
						{author: 'Bob', body: 'great idea but everything is wrong', upvotes: 0}
					]
				});
				$scope.title = '';
				$scope.link = '';
			};

			$scope.incrementUpvotes = function(post){
				// post.upvotes += 1;
				// And then in our controller, we simply replace incrementUpvotes() with this:
				posts.upvote(post);
				// OK?? Seems weird and unlcear
			};
		}]);