function getMedicalData(oData) {
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path :'/GoShieldServices/goshield.svc/Medical/Get?Email='+oData.email
		};
		var result = WL.Server.invokeHttp(input);	
	
	var oReturn = [];
	if(result.getMedicalResult!=undefined){
		var data = {
				identifier: result.getMedicalResult.Identifier, 
				email: result.getMedicalResult.Email, 
				IMSS:result.getMedicalResult.InsuranceNumber,
				bloodType:result.getMedicalResult.TypeBlood, 
				alergics:result.getMedicalResult.Alergies,
				clinicalConditions:result.getMedicalResult.Ailment
				};		
	
		oReturn.push(data);
	}
	return {data: oReturn};
}

function saveProcedure(pMedicalData){ 	
	
	var cleanObjects={
			Identifier:pMedicalData.identifier, 
			Email:pMedicalData.email, 
			InsuranceNumber:pMedicalData.IMSS,
			TypeBlood:pMedicalData.bloodType, 
			Alergies:pMedicalData.alergics,
			Ailment:pMedicalData.clinicalConditions	
	};
	 var data = {
			    method : 'post',
			    returnedContentType :'json',
			    path :'/GoShieldServices/goshield.svc/Medical/Save', 
			    body: { 
			    	   		contentType: 'application/json; charset=UTF-8' , 
			    	   		content: JSON.stringify(cleanObjects)
			    	   	} 
			};	
	 return WL.Server.invokeHttp(data);
}

