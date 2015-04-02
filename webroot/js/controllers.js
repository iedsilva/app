

app.controller('AppCtrl', function($scope, $rootScope, $http, $location) {

});

app.controller('PostListCtrl', function($scope, $rootScope, $http, $location, $timeout) {
    $scope.msg = false;
    $scope.load = function() {
        $http.get(base_url + '/posts.json')
        .success(function(data, status, headers, config) {
            $scope.posts = data.posts;
            //angular.copy($scope.posts, $scope.copy);
        });
    }

    $scope.load();

    $scope.addPost = function() {
        $location.path("/new-post");
    }

    $scope.editPost = function(index) {
        $location.path('/edit-post/' + $scope.posts[index].Post.id);
    }

    $scope.delPost = function(index) {
        var todel = $scope.posts[index];
        $http.delete(base_url + '/posts/' + todel.Post.id + '.json')
        .success(function(data, status, headers, config) {
            $scope.load();
            $scope.msg = 'Curso deletado com sucesso!';
            $timeout(function(){
                $scope.msg = null;
            }, 5000);
        });
    }

});

app.controller('NewPostCtrl', function($scope, $rootScope, $http, $location) {

    $scope.post = {};

    $scope.savePost = function() {
        var _data = {};
        _data.Post = $scope.post;
        $http
        .post(base_url + '/posts.json', _data)
        .success(function(data, status, headers, config) {
            $location.path('/posts');
        }).error(function(data, status, headers, config) {
        });
    }
});

app.controller('EditPostCtrl', function($scope, $rootScope, $http, $routeParams, $location) {

    var load = function() {
        $http.get(base_url + '/posts/' + $routeParams['id'] + '.json')
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
        .put(base_url + '/posts/' + $scope.post.id + '.json', _data)
        .success(function(data, status, headers, config) {
            $location.path('/posts');
        }).error(function(data, status, headers, config) {
        });
    }
});