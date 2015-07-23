function getSGMMData(oData) {
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path :'/GoShieldServices/goshield.svc/SGMM/Get?Email='+oData.email
		};
		var result = WL.Server.invokeHttp(input);	
	
	var oReturn = [];
	if(result.getSGMMResult!=undefined){
		var data = {
				identifier: result.getSGMMResult.Identifier, 
				email: result.getSGMMResult.Email, 
				Institution:result.getSGMMResult.Institution,
				Certificate:result.getSGMMResult.sgmmCertificate, 
				FullName:result.getSGMMResult.FullName
				};		
	
		oReturn.push(data);
	}
	return {data: oReturn};
}

function SGMMSaveSP(sgmmData){ 
	var cleanObjects= {
			Identifier: sgmmData.identifier, 
			Email: sgmmData.email, 
			Institution: sgmmData.Institution,
			sgmmCertificate: sgmmData.Certificate, 
			FullName:sgmmData.FullName
			};			
	
	 var data = {
			    method : 'post',
			    returnedContentType :'json',
			    path :'/GoShieldServices/goshield.svc/SGMM/Save',
			    body: { 
			    	   		contentType: 'application/json; charset=UTF-8' , 
			    	   		content: JSON.stringify(cleanObjects)
			    	   	} 
			};	
	 return WL.Server.invokeHttp(data);
}

