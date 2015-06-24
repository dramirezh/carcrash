function MedicalData(){
	this.IMSS="";
	this.bloodType="";
	this.alergics="";
	this.clinicalConditions="";
}		
var bt="";
$(document).on('pagebeforeshow','#profile',function(e,data){   		    		
	basicPersonFiltersNumber("txtNoIMSS");
			initMedicalDataInfo(); 	 				  
		});			
		
		function saveUserMedicalData(){
			var data=$('#flipMedical').val();
			bt=$('#selectBloodType option:selected');
			//if(data=="on")		
			setMedicalDataTransaction();							
			
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
					/*					
					navigator.notification.alert(
							Messages.msgDataSaved,
		        			function onSuccess() {
		        			}, "Info");*/
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
					$("#txtAlergics").val(arrayResults[0].json.alergics);
					$("#txtClinicalConditions").val(arrayResults[0].json.clinicalConditions);
					$( "select" ).selectmenu();			
					if(arrayResults[0].json.bloodType.trim().length>0){ 
					  $('#selectBloodType option[value='+arrayResults[0].json.bloodType+']').prop('selected',true);
					}else{
						$('#selectBloodType').prop('selectedIndex', 0);
					}
					  $( "select" ).selectmenu( "refresh", true );
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
		
		