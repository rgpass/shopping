console.log('Bundled loaded');

const angular = require('angular');
require('angular-ui-router');

// What's happening
angular
	.module('shoppingApp', ['ui.router'])
	.config(routerSetup);

console.log('sanity check')

// How it does it, only if we're curious
routerSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function routerSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		// we name our state
		.state('home', {
			// when I go to /#!/
			url: '/',
			// load up this basic html which includes our own custom component
			template: '<home></home>'
		})
		.state('items', {
			url: '/items',
			template: '<items></items>'
		});

	// catch-all backup route in case someone has a typo
	$urlRouterProvider.otherwise('/');
}
