as = angular.module('app', []);

as.config(function($routeProvider, $httpProvider) {
$routeProvider
    .when('/posts', {templateUrl: 'partials/posts.html', controller: 'PostListCtrl'})
    .when('/new-post', {templateUrl: 'partials/new-post.html', controller: 'NewPostCtrl'})
    .when('/edit-post/:id', {templateUrl: 'partials/edit-post.html', controller: 'EditPostCtrl'})
    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

});