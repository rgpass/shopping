const controller = require('./items.controller.js');
const template = require('./items.html');

const component = {
	controller: controller,
	template: template,
};

angular
	.module('shoppingApp')
	.component('items', component);
