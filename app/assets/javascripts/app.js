var app = angular.module('flapperNews', ['ui.router', 'templates', 'Devise']);

	app.config([
		'$stateProvider',
		'$urlRouterProvider',

		function($stateProvider, $urlRouterProvider) {

		  $stateProvider
		    .state('home', {
				url: 'home',
				views : {
					'ui-view' : {
						templateUrl: 'home/_home.html',
					}
				},
				resolve:{
					postPromise: ['posts', function(posts){
						return posts.getAll();
					}]
				},
				controller: 'MainCtrl'
		    })
			.state('posts', {
				url: '/posts/{id}',
				templateUrl: 'posts/_posts.html',
				controller: 'PostsCtrl', 
				resolve: {
					post: ['$stateParams', 'posts', function($stateParams, posts){
						return posts.get($stateParams.id); 
					}]
				}
			});
		  $urlRouterProvider.otherwise('home');
		}
	]);
		

		

		
			


