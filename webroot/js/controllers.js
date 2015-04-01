as.controller('AppCtrl', function($scope, $rootScope, $http, $location) {

});

as.controller('PostListCtrl', function($scope, $rootScope, $http, $location) {
    $scope.msg = false;
    var load = function() {
        $http.get('http://localhost/ng/posts.json')
        .success(function(data, status, headers, config) {
            $scope.posts = data.posts;
            angular.copy($scope.posts, $scope.copy);
        });
    }

    load();

    $scope.addPost = function() {
        
        $location.path("/new-post");
    }

    $scope.editPost = function(index) {
        $location.path('/edit-post/' + $scope.posts[index].Post.id);
    }

    $scope.delPost = function(index) {
        
        var todel = $scope.posts[index];
        $http
        .delete('http://localhost/ng/posts/' + todel.Post.id + '.json')
        .success(function(data, status, headers, config) {
            load();
            $scope.msg = 'Post deletado com sucesso!';
        }).error(function(data, status, headers, config) {
        });
    }

});

as.controller('NewPostCtrl', function($scope, $rootScope, $http, $location) {

    $scope.post = {};

    $scope.savePost = function() {
        console.log('call savePost');
        var _data = {};
        _data.Post = $scope.post;
        $http
        .post('http://localhost/ng/posts.json', _data)
        .success(function(data, status, headers, config) {
            $location.path('/posts');
        }).error(function(data, status, headers, config) {
        });
    }
});

as.controller('EditPostCtrl', function($scope, $rootScope, $http, $routeParams, $location) {

    var load = function() {
        console.log('call load()...');
        $http.get('http://localhost/ng/posts/' + $routeParams['id'] + '.json')
        .success(function(data, status, headers, config) {
            $scope.post = data.post.Post;
            angular.copy($scope.post, $scope.copy);
        });
    }

    load();

    $scope.post = {};

    $scope.updatePost = function() {
        var _data = {};
        _data.Post = $scope.post;
        $http
        .put('http://localhost/ng/posts/' + $scope.post.id + '.json', _data)
        .success(function(data, status, headers, config) {
            $location.path('/posts');
        }).error(function(data, status, headers, config) {
        });
    }
});