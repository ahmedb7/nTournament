'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users/:id', {
			id: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
angular.module('users').factory('AdminUsers', ['$resource',
	function($resource) {
		return $resource('admin/users/:id', {
			id: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
