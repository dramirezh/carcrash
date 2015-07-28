function getSinisters(oData) {
	
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path :'/GoShieldServices/goshield.svc/Sinisters/Get?Email='+oData.email
		};
		var result = WL.Server.invokeHttp(input);	
		
	var oReturn = [];
	for(var i = 0; i < result.getSinisterResult.length; i++){
		var data = {	
				identifier: result.getSinisterResult[i].identifier,
				email : result.getSinisterResult[i].email,
					idPolicy: result.getSinisterResult[i].data.idPolicy,
					date: result.getSinisterResult[i].data.date,
					time: result.getSinisterResult[i].data.time,
					type: result.getSinisterResult[i].data.type,
					status: result.getSinisterResult[i].data.status,
					location: 
						 result.getSinisterResult[i].data.location
					,
					extras: 
						result.getSinisterResult[i].data.extras
					
				};
		
		oReturn.push(data);
	}
	return {data: oReturn};
}

function saveSinisters(param1) {
	var sinistersArray = param1;
	var ret = [];
	for(var a = 0; a<sinistersArray.length; a++){
		var sinister = sinistersArray[a];
		switch(sinister._operation){
		case "add":
			ret.push(save(sinister.json));
			break;
		case "replace":
			ret.push(update(sinister.json));
			break;
		case "remove":
			ret.push(remove(sinister.json));
			break;
		}
	}
	return {data:ret};
}

function save(sinister){
	
		var data = {
					
					idPolicy: sinister.idPolicy,
					date: sinister.date,
					time: sinister.time,
					type: sinister.type,
					status: sinister.status,
					location: sinister.location,
					extras: sinister.extras
				};				
		
	var inputData= {data: data,
			identifier: sinister.identifier,
			email : sinister.email,			
	};
	
	var inputResult=input('post','json','/GoShieldServices/goshield.svc/Sinisters/Save','application/json; charset=UTF-8',JSON.stringify(inputData));
	var oData=WL.Server.invokeHttp(inputResult);
	oData.identifier=sinister.identifier;
	oData.email = sinister.email;
	oData.pictures = sinister.extras.pictures;
return oData;		
}

function update(sinister){
	var inputData={
			identifier:sinister.identifier,
			email:sinister.email,
			status:sinister.status			
	};
	var data=input('post','json','/GoShieldServices/goshield.svc/Sinisters/Update','application/json; charset=UTF-8',JSON.stringify(inputData));		
	return WL.Server.invokeHttp(data);
}

function remove(sinister){
	var inputData={
			identifier:sinister.identifier,
			email:sinister.email		
	};
	var data=input('post','json','/GoShieldServices/goshield.svc/Sinisters/Remove','application/json; charset=UTF-8',JSON.stringify(inputData));		
	return WL.Server.invokeHttp(data);				 
}

function saveImages(base64, email, identifier){			
	
var inputData= {data: base64,
		identifier: identifier,
		email : email,			
};

var data=input('post','json','/GoShieldServices/goshield.svc/Sinisters/SaveImage','application/json; charset=UTF-8',JSON.stringify(inputData));		
 return WL.Server.invokeHttp(data);
}

function input( pMethod, pReturnedContentType,pPath, pContentType, pContent){
	
	return data = {
		    method : pMethod,
		    returnedContentType :pReturnedContentType,
		    path :pPath,
		    body: { 
		    	   		contentType: pContentType , 
		    	   		content: pContent
		    	   	} 
		};
}