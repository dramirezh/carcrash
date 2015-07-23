
function  getInsurances() {
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path :'/GoShieldServices/goshield.svc/Insurances/Get'
		};
		return WL.Server.invokeHttp(input);	
}