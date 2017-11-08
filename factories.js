angular.module('learn.factories', [])

    .factory('Post', ['$resource', function ($resource) {
        return $resource('/api/posts/:id', { id: '@id' }, {
            update: {
                method: 'PUT'  //only 'Post' factory supports updating
            }
        });
    }])

    .factory('User', ['$resource', function ($resource) {
        return $resource('/api/users/id');
    }])

    .factory('Category', ['$resource', function($resource){
        return $resource('/api/categrory/:id');
    }]);    

