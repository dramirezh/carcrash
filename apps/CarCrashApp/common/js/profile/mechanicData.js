function mechanicData(){
	this.MechanicFirstName="";
	
	
	this.MechanicCellPhone="";
	this.MechanicAddress="";	
}		

var vMechanicName;
			var vMechanicFirstName;
			var vMechanicLastName;
			var vMechanicCellPhone;		
			var vMechanicAddress;
			
		$(document).on('pagebeforeshow','#mechanic',function(e,data){   		    			
			
			initMechanicDataInfo(); 
			 basicPersonFiltersNumber("txtMechanicCellPhone");        	 
        	 
        	 
        	 $('#txtMechanicName').keypress(function(key) {        		
        		 if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 32)
        				 && (key.charCode != 225)&& (key.charCode != 233)&& (key.charCode != 237)&& (key.charCode != 243)&& (key.charCode != 250)&& (key.charCode != 241)
        	   				&& (key.charCode != 193)&& (key.charCode != 201)&& (key.charCode != 205)&& (key.charCode != 211)&& (key.charCode != 218)&&  (key.charCode != 209) 
        		 ){
            		 return false;
            	 }else{             		
            	        return true;
            	    }
 			});
		});			
		
		function saveMechanicData(){			
			setMechanicDataTransaction();						
		}
		
		function getMechanicValues(){
			 vMechanicName =	$("#txtMechanicName");
			
			 
			 vMechanicCellPhone=$("#txtMechanicCellPhone");		
			 vMechanicAddress=$("#txtMechanicAddress");			
		}
		
		function setMechanicDataTransaction(){			
			  			
				   WL.JSONStore.get("MechanicData").clear()			
			.then(function (errorObject) {	
								
				var jsonStore = new clsJsonStoreHelper();
				jsonStore.collectionName="MechanicData";
				jsonStore.document=
					 {MechanicFirstName: $("#txtMechanicName").val().trim(), MechanicLastName: '', MechanicSecondLastName: '',
						 MechanicCellPhone: $("#txtMechanicCellPhone").val().trim(),
							MechanicAddress: $("#txtMechanicAddress").val().trim()};
				jsonStore.id=0;
				jsonStore.fnSuccess=function (succes) {
					var jsonStore = new clsJsonStoreHelper();
					jsonStore.collectionName="MechanicData";
					jsonStore.document=
							{
							};
					jsonStore.id=0;
					jsonStore.fnSuccess=function (arrayResults) {			
						if(arrayResults.length>0){	
							
							saveMechanic(arrayResults[0].json);	
						}
						
					};
					jsonStore.fnFail=function (fail) {			
						
					};
					jsonStore.get();	
															
					navigator.notification.alert(
							Messages.msgDataSaved,
		        			function onSuccess() {
		        			}, "Info");
				};
				jsonStore.fnFail=function (errorObject) {								
					navigator.notification.alert(
							errorObject.msg,
		        			function onSuccess() {
		        			}, "Error");
				};
				jsonStore.save();			
			})
			.fail(function (errorObject) {		   			   					
				
			});		
		}
		
		function initMechanicDataInfo(){
			
			var jsonStore = new clsJsonStoreHelper();
			jsonStore.collectionName="MechanicData";
			jsonStore.document=
					{
					};
			jsonStore.id=0;
			jsonStore.fnSuccess=function (arrayResults) {			
				if(arrayResults.length>0){	
					$("#txtMechanicName").val(arrayResults[0].json.MechanicFirstName);
					
					$("#txtMechanicCellPhone").val(arrayResults[0].json.MechanicCellPhone);
					$("#txtMechanicAddress").val(arrayResults[0].json.MechanicAddress);
				}
			};
			jsonStore.fnFail=function (fail) {			
				
			};
			jsonStore.get();		
			}
		
		function saveMechanic(pMechanic)
		{	
			var restHelper = new clsRestHelper('mechanic','saveMechanic',pMechanic, saveMechanicSuccess, saveMechanicFailure);
			restHelper.callRestAdapter();
		}
		function saveMechanicSuccess(result){
			var oResult = result.invocationResult;
			if(oResult.isSuccessful)
			{							
				
			}
			else{
				navigator.notification.alert(
						'Ocurrio un error, por favor intente de nuevo.',
	        			function onSuccess() {
	        			}, "Error");
			}
		}
		function saveMechanicFailure(error){			
			
		}
		