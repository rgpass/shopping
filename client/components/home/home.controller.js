// always have this, even if it's blank
// for best practices and to remind you to add dependency names
// if you end up actually needing to inject dependencies
HomeController.$inject = [];
function HomeController() {
	const vm = this;

	// Always have this, regardless of it does anything
	// could be renamed to doSomethingOnPageLoad if you want
	activate();

	function activate() {
		// for learning purposes only
		// leave blank if it doesn't do anything
		console.log('This component and its controller & view have been loaded');
	}
}

module.exports = HomeController;
