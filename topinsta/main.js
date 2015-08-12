/* 
	Application Class
	@Author: Vinicius Marques
*/
!function(window) {
	'use strict';
	
	var Application = function() {
		// code: 02068e57845f43deb0553e0d90a6b9bc
		// access_token: 350701577.d672437.65a407b060bd449daf8a37ca900636e6
		// id: 350701577
		this.token = "350701577.d672437.65a407b060bd449daf8a37ca900636e6";

		$.get('https://api.instagram.com/v1/users/self/media/liked?access_token=' + this.token , function(data) {
			console.log(data);
		});

	};	

	window.app = new Application();
}(window);