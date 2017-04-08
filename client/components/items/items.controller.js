ItemsController.$inject = ['ItemsService'];
function ItemsController(ItemsService) {
	const vm = this;

	vm.items = [];

	// Always have this, regardless of it does anything
	// could be renamed to doSomethingOnPageLoad if you want
	activate();

	function activate() {
		// learning purposes only
		console.log('ItemsController activated...');

		loadAllTheItems();
	}

	function loadAllTheItems() {
		ItemsService
			.loadAll()
			.then(function resolve(res) {
				vm.items = res.data.items;
			});
	}
}

module.exports = ItemsController;
