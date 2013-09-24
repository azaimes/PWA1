/*
	PWA1: Goal8:  Simple Library
*/

var anchorLib = function (parts) {

	return new anchorLib.prototype.init(parts);

};

anchorLib.prototype = {

	init: function (parts) {
		this.elements = parts;
	},

	elements: [],

	eachElem: function (callback) {
		for (var i = 0, max = this.elements.length; i < max; i++) {
			callback.call(this.elements[i]);
			this.elements[i].style.backgroundColor = "grey";
			console.log('in for loop: '+this.elements[i]);

			this.elements[i].onclick = function (e) {
				console.log('in for loop onclick: '+this.getAttribute('href'));

				e.preventDefault();

			};
		}
	}

}; // end prototype


anchorLib.prototype.init.prototype = anchorLib.prototype;