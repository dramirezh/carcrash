		
$(document).on('pagebeforeshow','#profile',function(e,data){   		    			
			initSGMMDataInfo(); 
		});			

var Sgmm= new SGMM();
		
		function setSGMMDataTransaction(){	
			Sgmm.instituion=$("#txtInstitution").val().trim();																				  
			Sgmm.certificate=$("#txtCertificate").val().trim();
			Sgmm.fullname=$("#txtSGMMName").val().trim();						
				
			   WL.JSONStore.get("SGMM").clear() 
			
			.then(function (errorObject) {	
								
				var jsonStore = new clsJsonStoreHelper();
				jsonStore.collectionName="SGMM";
				jsonStore.document=
					 {Institution: Sgmm.instituion, Certificate: Sgmm.certificate, 
						 FullName: Sgmm.fullname
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
					$("#txtSGMMName").val(arrayResults[0].json.FullName);					
				}
			};
			jsonStore.fnFail=function (fail) {			
				
			};
			jsonStore.get();	
			}
		
		function saveSGMMData(SGMMData)
		{	
			var restHelper = new clsRestHelper('medicalData','saveProcedure',SGMMData, saveSGMMDataSuccess, saveSGMMDataFailure);
			restHelper.callRestAdapter();
		}
		function saveSGMMDataSuccess(result){
			var oResult = result.invocationResult;
			
			if(!oResult.isSuccessful){ 		
				navigator.notification.alert(
						'Ocurrio un error, por favor intente de nuevo.',
	        			function onSuccess() {
	        			}, "Error");
			}
		}
		function saveSGMMDataFailure(error){
			 			
			
		}
		
		