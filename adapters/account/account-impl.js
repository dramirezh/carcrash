/************************************************************************
 * Implementation code for procedure - 'accessAccount'
 *
 * @param - email and password to validate
 * @return - invocationResult
 */
function accessAccount(pData) {
	var data	= input('post','json','/GoShieldServices/goshield.svc/Account/Access','application/json; charset=UTF-8',JSON.stringify(pData));		
	return WL.Server.invokeHttp(data);	
}

/************************************************************************
 * Implementation code for procedure - 'saveAccount'
 *
 * @param - account object from js/account.js
 * @return - invocationResult
 */
function saveAccount(account) {		
	var data	= input('post','json','/GoShieldServices/goshield.svc/Account/Save','application/json; charset=UTF-8',JSON.stringify(account)); 	
	return WL.Server.invokeHttp(data);	
}


function updateAccount(perfil){					
	var data	= input('post','plain','/GoShieldServices/goshield.svc/Account/Update','application/json;',perfil);	
	return WL.Server.invokeHttp(data);			 	 
} 

function suscribeAccount(account){	
	var inputExists = {
		    method : 'get',
		    returnedContentType : 'json',
		    path :'/GoShieldServices/goshield.svc/Account/Exists?Email='+account.email
		};
		var exists = WL.Server.invokeHttp(inputExists);	
	
	//return exists;
	if(exists.existsAccountResult.details.length > 0){
		return {"result":"1"};
	}
	else{				
		var suscribedata	= input('post','json','/GoShieldServices/goshield.svc/Account/Suscribe','application/json; charset=UTF-8',JSON.stringify(account));		
		var ret= WL.Server.invokeHttp(suscribedata);
		
		if(ret.successful){
			return {"result":"0","email":account.email};
		}else{
			return {"result":"2","return":ret};
		}
	}
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