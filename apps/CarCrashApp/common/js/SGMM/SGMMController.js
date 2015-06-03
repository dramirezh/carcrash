		
$(document).on('pagebeforeshow','#profile',function(e,data){   		    		
	
			initSGMMDataInfo(); 	 				  
		});			
		
		function saveSGMMData(){					
			setSGMMDataTransaction();										
		}
		
		function setSGMMDataTransaction(){						  			
			   WL.JSONStore.get("SGMM").clear() 
			
			.then(function (errorObject) {	
								
				var jsonStore = new clsJsonStoreHelper();
				jsonStore.collectionName="SGMM";
				jsonStore.document=
					 {IMSS: $("#txtNoIMSS").val().trim(), bloodType: bt.val().trim(), 
						 alergics: $("#txtAlergics").val().trim(), clinicalConditions: $("#txtClinicalConditions").val().trim()
			        	};
				jsonStore.id=0;
				jsonStore.fnSuccess=function (succes) {
					
					var jsonStore = new clsJsonStoreHelper();
					jsonStore.collectionName="SGMM";
					jsonStore.document=
							{
							};
					jsonStore.id=0;
					jsonStore.fnSuccess=function (arrayResults) {
						 WL.Logger.debug(">> medical data local: " + JSON.stringify(arrayResults));
						if(arrayResults.length>0){	
							saveSGMMData(arrayResults[0].json);
						}
					};
					jsonStore.fnFail=function (fail) {			
						
					};
					jsonStore.get();
					
				};
				jsonStore.fnFail=function (errorObject) {								
					navigator.notification.alert(
							errorObject.msg,
		        			function onSuccess() {
		        			}, "Error");
				};
				jsonStore.save();			
			}).fail(function (errorObject) {		   			   			
				
				
			});	
				
		}
		
		function initSGMMDataInfo(){
			var jsonStore = new clsJsonStoreHelper();
			jsonStore.collectionName="SGMM";
			jsonStore.document=
					{
					};
			jsonStore.id=0;
			jsonStore.fnSuccess=function (arrayResults) {			
				if(arrayResults.length>0){	
					$("#txtInstitution").val(arrayResults[0].json.Institution);																				  
					$("#txtCertificate").val(arrayResults[0].json.Certificate);
					$("#txtClinicalConditions").val(arrayResults[0].json.FullName);					
				}
			};
			jsonStore.fnFail=function (fail) {			
				
			};
			jsonStore.get();	
			}
		
		function saveSGMMData(SGMMData)
		{	WL.Logger.debug(">>  data send server: " + JSON.stringify(SGMMData));
			var restHelper = new clsRestHelper('medicalData','saveProcedure',SGMMData, saveSGMMDataSuccess, saveSGMMDataFailure);
			restHelper.callRestAdapter();
		}
		function saveSGMMDataSuccess(result){
			var oResult = result.invocationResult;
			 WL.Logger.debug(">>  data: " + JSON.stringify(result));
			if(!oResult.isSuccessful){ 		
				navigator.notification.alert(
						'Ocurrio un error, por favor intente de nuevo.',
	        			function onSuccess() {
	        			}, "Error");
			}
		}
		function saveSGMMDataFailure(error){
			 WL.Logger.debug(">>  data fail: " + error);			
			
		}
		
		