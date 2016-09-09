var app = angular.module('flapperNews', ['ui.router', 'templates']);

app.factory('posts',[
	$http, 
	function($http){
  var o = {
    posts: []
  };
  return o;
}])

	o.getAll = function(){
		return $http.get('/posts.json').success(function(data){
			angular.copy(data, o.posts);
		});
	};
	o.create = function(post){
		return $http.post('/posts.json', post).success(function(data){
			o.posts.push(data);
		});
	};
	$scope.addPost = function(){
		if(!$scope.title || $scope.title === ''){ return; }
		posts.create({
			title: $scope.title,
			link: $scope.link,
		});
		$scope.title = '';
		$scope.link = '';
	};
