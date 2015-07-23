function  getVehicleBrands() {
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path :'/GoShieldServices/goshield.svc/VehicleBrands/Get'
		};
		return WL.Server.invokeHttp(input);	
}

