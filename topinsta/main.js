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

		// 67e618d677294efa80dd6060f5b3ed05
		// curl -F 'client_id=d672437dbc0b414d9ea00f62662f4838' -F 'client_secret=d8418f9baec149d8b3c0be1a9943ef01' -F 'grant_type=authorization_code' -F 'redirect_uri=http://v2rm.com.br/topinsta/' -F 'code=67e618d677294efa80dd6060f5b3ed05' https://api.instagram.com/oauth/access_token
		// access_token: "350701577.d672437.65a407b060bd449daf8a37ca900636e6",

		this.token = "350701577.d672437.65a407b060bd449daf8a37ca900636e6";

		$.get('https://api.instagram.com/v1/users/350701577/media/liked?access_token=' + this.token , function(data) {
			console.log(data);
		});

	};	

	window.app = new Application();
}(window);