var App = function() {
	this.result = [];
	this.container = document.getElementById('answers');
	this.search = document.getElementById('search');

	this.bindEvents();
};

App.prototype.bindEvents = function() {
	var _this = this;
	var time = null;

	this.search.addEventListener('keyup' , function() {
		var val = this.value;

		clearTimeout(time);
		time = setTimeout(function() {
			_this.filter(val);
		},200);
	});
};

App.prototype.filter = function( text ) {
	var result = [];
	
	for (var i = 0; i < ANSWSERS.length; i++) {
		var answer = ANSWSERS[i];

		if (answer.key && text === answer.key) {
			result.push(answer.response);
		}
	}
	this.result = result;
	this.renderResult();
};

App.prototype.renderResult = function() {
	if (this.result.length > 0) {
		var html = [];
		for (var i = 0; i < this.result.length; i++) {
			html.push('<li>' + this.result[i] + '</li>');
		}

		this.container.innerHTML = html.join('');
	}
	else {
		this.container.innerHTML = '';	
	}
};

// init
new App();