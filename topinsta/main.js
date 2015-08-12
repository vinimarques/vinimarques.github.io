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

		// ee1a49d502364c1d9b813bd4c49cc431
		// curl -F 'client_id=7b3c14d21dc04cdd971c2a262facfef3' -F 'client_secret=cd08f2258249447b8787d2ceedb0d507' -F 'grant_type=authorization_code' -F 'redirect_uri=http://v2rm.com.br/topinsta/' -F 'code=ee1a49d502364c1d9b813bd4c49cc431' https://api.instagram.com/oauth/access_token
		
		// {"access_token":"1836111965.7b3c14d.b3f331b1e30d4c9c85916fb554136bcc",
		// id":"1836111965"}}Viniciuss-MacBook-Air:~ vinicius$


		this.token = "1836111965.7b3c14d.b3f331b1e30d4c9c85916fb554136bcc";

		$.get('https://api.instagram.com/v1/users/350701577/media/liked?access_token=' + this.token , function(data) {
			console.log(data);
		});

	};	

	window.app = new Application();
}(window);