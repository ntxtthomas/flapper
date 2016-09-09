var app = angular.module('flapperNews', ['ui.router', 'templates']);

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
				}
				controller: 'MainCtrl'
				resolve:{
					postPromise: ['posts', function(posts){
						return posts.getAll();
					}]
				}
		    })
			.state('posts', {
				url: '/posts/{id}',
				templateUrl: 'posts/_posts.html',
				controller: 'PostsCtrl'
			});
		  $urlRouterProvider.otherwise('home');
		}
	]);
		

		

		
			


