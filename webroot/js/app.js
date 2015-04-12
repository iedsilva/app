app = angular.module('app', []);

//get url
pathArray = window.location.href.split('/');
protocol = pathArray[0];
path = pathArray[2];
host = pathArray[3];
var base_url = protocol + '//' + path + '/' + host;

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
	.when('/posts', {templateUrl: 'partials/posts.html', controller: 'PostListCtrl'})
	.when('/new-post', {templateUrl: 'partials/new-post.html', controller: 'NewPostCtrl'})
	.when('/edit-post/:id', {templateUrl: 'partials/edit-post.html', controller: 'EditPostCtrl'})
	.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'})
	.when('/register', {templateUrl: 'partials/register.html', controller: 'RegisterCtrl'})
	.otherwise({redirectTo: '/', templateUrl: 'partials/florzinha.html',controller: 'FlorCtrl'});
});

app.run(function($rootScope) {
	$rootScope.base_url = base_url;

	$rootScope.$on('event:loginRequest', function(event, username, password) {

	    httpHeaders.common['Authorization'] = 'Basic ' + base64.encode(username + ':' + password);
	    $http.get($rootScope.appUrl + '/users/login.json')
	    .success(function(data) {
	        console.log('login data @' + data);
	        $rootScope.user = data.user;
	        $rootScope.$broadcast('event:loginConfirmed');
	    });

	});

});