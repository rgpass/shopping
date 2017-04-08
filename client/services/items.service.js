angular
	.module('shoppingApp')
	.service('ItemsService', ItemsService);

ItemsService.$inject = ['$http'];
function ItemsService($http) {
	const self = this;

	self.loadAll = loadAll;

	function loadAll() {
		return $http.get('/api/items');
	}
}
