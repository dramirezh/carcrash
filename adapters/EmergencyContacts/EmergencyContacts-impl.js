function getEmergencyContacts(oData) {	
	
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path :'/GoShieldServices/goshield.svc/Contacts/Get?Email='+oData.email
		};
		var result = WL.Server.invokeHttp(input);
	
		var resultVehicle;
	
	var oReturn = [];
	var data; 
	if(result.getContactsResult!=undefined){
	for(var i = 0; i < result.getContactsResult.length; i++){
				
		var vehicles = []; 		
		
		var inputVehicle = {
			    method : 'get',
			    returnedContentType : 'json',
			    path :'/GoShieldServices/goshield.svc/ContactVehicles/Get?Email='+oData.email+'&identifier='+result.getContactsResult[i].Identifier+''
			};
			 resultVehicle = WL.Server.invokeHttp(inputVehicle);
			
		
		if(resultVehicle.getContactVehiclesResult!=undefined){   
		for(var i2= 0; i2 < resultVehicle.getContactVehiclesResult.length; i2++){	       
	      var data2= {IDVehicleType: resultVehicle.getContactVehiclesResult[i2].VehicleIdentifier};
	      vehicles.push(data2); 
	       }
		}	
		
		 data = {
				identifier: result.getContactsResult[i].Identifier, 
				email: result.getContactsResult[i].Email, 
				UserContactFirstName:result.getContactsResult[i].FirstName,
				UserContactLastName:result.getContactsResult[i].LastName, 
				UserContactSecondLastName:result.getContactsResult[i].SecondLastName,
				UserContactCellPhone:result.getContactsResult[i].CellPhone,				
				UserContactEmail:result.getContactsResult[i].ContactEmail,
				vehicle:vehicles
				};
		
	
		oReturn.push(data);
	}
	}
	return resultVehicle;//{data: oReturn};
}

function saveEmergencyContacts(param1) {
	
	var	result;
	var contactsdocs = param1;
	var ret = [];
	for(var a = 0; a<contactsdocs.length; a++){
		var contact = contactsdocs[a];
		
		if(contact._operation!="remove"){
			
		var	inputData={
				Identifier: contact.json.identifier, 
				Email: contact.json.email, 
				FirstName:contact.json.UserContactFirstName,
				LastName:contact.json.UserContactLastName, 
				SecondLastName:contact.json.UserContactSecondLastName,
				CellPhone:contact.json.UserContactCellPhone,				
				ContactEmail:contact.json.UserContactEmail,
				vehicle: contact.json.vehicle
		};
		
			 var inputContact = {
					    method : 'get',
					    returnedContentType : 'json',
					    path :'/GoShieldServices/goshield.svc/Contacts/exists?Email='+contact.json.email+'&identifier='+contact.json.identifier+''
					};
				 result = WL.Server.invokeHttp(inputContact);			 			 
					 
				if(result.existsContactResult!=undefined){
				if(result.existsContactResult.details.trim().length>0){					
					ret.push(update(inputData));
				}else{
					ret.push(save(inputData));
				}
				}
		}else{
			ret.push(remove(contact.json));
		}		
		
	}
	return {data:ret};	
}

function save(pEmergencyContacts){		
	var data	= input('post','json','/GoShieldServices/goshield.svc/Contacts/Save','application/json; charset=UTF-8',JSON.stringify(pEmergencyContacts));		
	var saveResult= WL.Server.invokeHttp(data);		
var vehicleResult=	addVehiclesFun(saveResult,pEmergencyContacts); 	 
	 return vehicleResult;
} 
function update(pEmergencyContacts){	
	var res ; var result ; var saveVehicleResult;
	var updateContact = input('post','json','/GoShieldServices/goshield.svc/Contacts/Update','application/json; charset=UTF-8',JSON.stringify(pEmergencyContacts));		
	var updateContactResult=WL.Server.invokeHttp(updateContact);	
	if(updateContactResult!=undefined){
		if(updateContactResult.isSuccessful){
			var f="IDVehicleType";
			for ( f in pEmergencyContacts.vehicle) {
			res=pEmergencyContacts.vehicle[f];
				
			var inputData={Email:pEmergencyContacts.Email,ContactIdentifier:pEmergencyContacts.Identifier, VehicleIdentifier:res.IDVehicleType };	
			var saveVehicle = input('post','json','/GoShieldServices/goshield.svc/ContactVehicles/Save','application/json; charset=UTF-8',JSON.stringify(inputData));		
			 saveVehicleResult=WL.Server.invokeHttp(saveVehicle);
			}
					
			
		}	
				
	}
	
	return  saveVehicleResult;
}
function remove(pEmergencyContacts){	
   
	var inputData={email:pEmergencyContacts.email,identifier:pEmergencyContacts.identifier};			
	var deleteVehicle = input('post','json','/GoShieldServices/goshield.svc/ContactVehicles/Remove','application/json; charset=UTF-8',JSON.stringify(inputData));		
	var deleteVehicleResult=WL.Server.invokeHttp(deleteVehicle);
	var deleteResult;
	if(deleteVehicleResult!=undefined){
		if(deleteVehicleResult.isSuccessful){						
		var	deleteContact = input('post','json','/GoShieldServices/goshield.svc/Contacts/Remove','application/json; charset=UTF-8',JSON.stringify(pEmergencyContacts));		
	 deleteResult=	WL.Server.invokeHttp(deleteContact);  
			
		}
		}	
	 return deleteVehicle;
}

function addVehiclesFun(contact,pEmergencyContacts){
	var idobj; var res ; var saveVehicleResult;
	if(contact!=undefined){
		if(contact.isSuccessful){
			
			 res = JSON.stringify(pEmergencyContacts.vehicle).split(",");
				for(var c=0;c<res.length;c++){
					var result = res[c].split(":");
					 idobj=result[1].replace("}","").replace("]","").replace("\"","").replace("\"","").replace("'","");					
					
					var inputData={Email:pEmergencyContacts.Email,ContactIdentifier:pEmergencyContacts.Identifier, VehicleIdentifier:parseInt(idobj) };	
					var saveVehicle = input('post','json','/GoShieldServices/goshield.svc/ContactVehicles/Save','application/json; charset=UTF-8',JSON.stringify(inputData));		
					 saveVehicleResult=WL.Server.invokeHttp(saveVehicle);
				}				
	
		}		
	}
	return  saveVehicleResult;
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