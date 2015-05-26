function MedicalData(){
	this.IMSS="";
	this.bloodType="";
	this.alergics="";
	this.clinicalConditions="";
}		
var bt="";
$(document).on('pagebeforeshow','#medical',function(e,data){   		    		
	basicPersonFiltersNumber("txtNoIMSS");
			initMedicalDataInfo(); 	 				  
		});			
		
		function saveUserMedicalData(){	
			bt=$('#selectBloodType option:selected');
			if( bt.val().trim().length>0){
			setMedicalDataTransaction();				
			}else{
				navigator.notification.alert(
						Messages.opNoneBType,
	        			function onSuccess() {
	        			}, "Info");				
			}
		}
		
		function setMedicalDataTransaction(){						  			
			   WL.JSONStore.get("MedicalData").clear() 
			
			.then(function (errorObject) {	
								
				var jsonStore = new clsJsonStoreHelper();
				jsonStore.collectionName="MedicalData";
				jsonStore.document=
					 {IMSS: $("#txtNoIMSS").val().trim(), bloodType: bt.val().trim(), 
						 alergics: $("#txtAlergics").val().trim(), clinicalConditions: $("#txtClinicalConditions").val().trim()
			        	};
				jsonStore.id=0;
				jsonStore.fnSuccess=function (succes) {
					
					var jsonStore = new clsJsonStoreHelper();
					jsonStore.collectionName="MedicalData";
					jsonStore.document=
							{
							};
					jsonStore.id=0;
					jsonStore.fnSuccess=function (arrayResults) {
						 WL.Logger.debug(">> medical data local: " + JSON.stringify(arrayResults));
						if(arrayResults.length>0){	
							saveMedicalData(arrayResults[0].json);
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
			}).fail(function (errorObject) {		   			   			
				
				
			});	
				
		}
		
		function initMedicalDataInfo(){
			var jsonStore = new clsJsonStoreHelper();
			jsonStore.collectionName="MedicalData";
			jsonStore.document=
					{
					};
			jsonStore.id=0;
			jsonStore.fnSuccess=function (arrayResults) {			
				if(arrayResults.length>0){	
					$("#txtNoIMSS").val(arrayResults[0].json.IMSS);										
					$( "select" ).selectmenu();					 
					  $('#selectBloodType option[value='+arrayResults[0].json.bloodType+']').prop('selected',true);
					  $( "select" ).selectmenu( "refresh", true );					  
					$("#txtAlergics").val(arrayResults[0].json.alergics);
					$("#txtClinicalConditions").val(arrayResults[0].json.clinicalConditions);	
				}
			};
			jsonStore.fnFail=function (fail) {			
				
			};
			jsonStore.get();	
			}
		
		function saveMedicalData(pMedicalData)
		{	WL.Logger.debug(">> medical data send server: " + JSON.stringify(pMedicalData));
			var restHelper = new clsRestHelper('medicalData','saveProcedure',pMedicalData, saveMedicalDataSuccess, saveMedicalDataFailure);
			restHelper.callRestAdapter();
		}
		function saveMedicalDataSuccess(result){
			var oResult = result.invocationResult;
			 WL.Logger.debug(">> medical data: " + JSON.stringify(result));
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
		function saveMedicalDataFailure(error){
			 WL.Logger.debug(">> medical data fail: " + error);			
			
		}
		
		