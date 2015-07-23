
/**
 *  WL.Server.invokeHttp(parameters) accepts the following json object as an argument:
 *  
 *  {
 *  	// Mandatory 
 *  	method : 'get' , 'post', 'delete' , 'put' or 'head' 
 *  	path: value,
 *  	
 *  	// Optional 
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "plain", "xml", "html"  
 *  	returnedContentEncoding : 'encoding', 
 *  	parameters: {name1: value1, ... }, 
 *  	headers: {name1: value1, ... }, 
 *  	cookies: {name1: value1, ... }, 
 *  	body: { 
 *  		contentType: 'text/xml; charset=utf-8' or similar value, 
 *  		content: stringValue 
 *  	}, 
 *  	transformation: { 
 *  		type: 'default', or 'xslFile', 
 *  		xslFile: fileName 
 *  	} 
 *  } 
 */


function getVehiclesPolicies(oData) {	
	
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path :'/GoShieldServices/goshield.svc/Vehicles/Get?Email='+oData.email
	};
	var result = WL.Server.invokeHttp(input);
	
	var oReturn = [];
	if(result.getVehiclesResult!=undefined){ 
	for(var i = 0; i < result.getVehiclesResult.length; i++){
		var data = {
				identifier: result.getVehiclesResult[i].identifier, 
				email: result.getVehiclesResult[i].email, 
					PolicyNo: result.getVehiclesResult[i].PolicyNo, 
					PolicyDate:result.getVehiclesResult[i].PolicyDate, 
					Insurance: result.getVehiclesResult[i].Insurance,
					Plates: result.getVehiclesResult[i].Plates,
					Serie: result.getVehiclesResult[i].Serie,
					VehicleType: result.getVehiclesResult[i].VehicleType,
					Mark: result.getVehiclesResult[i].Mark,
					SubMark:result.getVehiclesResult[i].SubMark,
					Model: result.getVehiclesResult[i].Model,
					Color: result.getVehiclesResult[i].Color,
					carPicture: result.getVehiclesResult[i].carPicture,
					Holder: result.getVehiclesResult[i].Holder,
					OwnerCellPhone: result.getVehiclesResult[i].OwnerCellPhone,
					PolicyContactFirstName:result.getVehiclesResult[i].PolicyContactFirstName,
					PolicyContactLastName:result.getVehiclesResult[i].PolicyContactLastName, 
					PolicyContactSecondLastName:result.getVehiclesResult[i].PolicyContactSecondLastName,
					PolicyContactCellPhone:result.getVehiclesResult[i].PolicyContactCellPhone,
					InsuranceName:result.getVehiclesResult[i].InsuranceName,
					MarkName:result.getVehiclesResult[i].MarkName,
					defaultVehicle:result.getVehiclesResult[i].defaultVehicle,
					PolicyContactEmail:result.getVehiclesResult[i].PolicyContactEmail,
					IDVehicleType:result.getVehiclesResult[i].IDVehicleType
					
				}; 
		
		
		oReturn.push(data);
	}
	
	}
	return {data: oReturn};
}


function saveVehiclePolicies(param1) {		

	var policiesdocs = param1;
	var ret = [];
	for(var a = 0; a<policiesdocs.length; a++){
		var policies = policiesdocs[a];
		
		if(policies._operation!="remove"){								
					ret.push(save(policies.json));								
		}else{
			ret.push(remove(policies.json));
		}		
		
	}
	return {data:ret};			
}

function save(pVehiclesPolicies){
	var dataIn	= input(pVehiclesPolicies,'post','json','/GoShieldServices/goshield.svc/Vehicles/Save','application/json; charset=UTF-8',JSON.stringify(pVehiclesPolicies));				
	var saveResult= WL.Server.invokeHttp(dataIn);		
	return saveResult;
} 
function update(pVehiclesPolicies){
	
	var data	= input(pVehiclesPolicies,'post','json','/GoShieldServices/goshield.svc/Vehicles/Update','application/json; charset=UTF-8',JSON.stringify(pVehiclesPolicies));			
	var saveResult= WL.Server.invokeHttp(data);		
	return saveResult;	
} 
function remove(pVehiclesPolicies){	
	var data = input(pVehiclesPolicies,'post','json','/GoShieldServices/goshield.svc/Vehicles/Remove','application/json; charset=UTF-8',JSON.stringify(pVehiclesPolicies));		   	
		return WL.Server.invokeHttp(data);		
} 
function input(pVehiclesPolicies, pMethod, pReturnedContentType,pPath, pContentType, pContent){
	
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