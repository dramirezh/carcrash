function profile(){
	 this.name="";
	 this.firstname="";
	 this.lastname="";
	 this.cellPhone="";
	 this.city="";
	 this.enterprise="";
	 this.birthDate="";
}

var updateProfile=null;
							
		var navigation=0;
		var selectedPolizaData;
		function j(){
		$("#perfilCont").hide();
		}
		
		function backPerfilCont(){			
			$("#policyCont").hide();
		$("#perfilCont").show();		
		}
		function backPerfilCountries(){
			$('div[id="backPerfilNav"]').hide();
			$("#listCountries").hide();
			$("#perfilCont").show();		
		}
		
		function backPerfilCities(){
			$("#listCities").hide();
			$("#listCountries").show();
		}
		function backPerfilCountries(){
			$("#backPerfilNav").hide();
			$("#listCountries").hide();
			$("#perfilCont").show();		
		}
		
		function initCountries(){
			$('div[id="backPerfilNav"]').show();
		$("#perfilCont").hide();
		$("#listCountries").show();
		navigation=4;
		} 
		
		function clearCountries(country){
		$("#listCities").show();
		$("#listCountries").hide();		
		navigation=5;
		}
		
		var cityData;
		function clearCities(city){
			cityData=city;	
			$("#lblCitySelected").text(""+$(cityData).text());			
		}		
				
		$(document).on('pagebeforeshow','#profile',function(e,data){						
			initializeAddress();				
		initPerfilDataInfo(); 		
		});			
		
		function savePerfil(){
			if(!checkAddress()){ 
			setDataToTransaction();	
			}else{
				alert(Messages.enter+" "+Messages.streetNumber);				
			}
		}
		function saveAnyPerfil(){						
			switch(navigation){
			case 0:						
				 savePerfil();
			break;
			case 1:						
				
				break;				
			}			
		}				
		
		function citySelected(){
			$('div[id="backPerfilNav"]').hide();
			$("#perfilCont").show();
			$("#listCities").hide();
			$("#listCountries").hide();					
			$("#searchCity").val(""+$(cityData).text());
			navigation=0;
		}							 						 	
		 
         function dataStatus(status){
        	 
        	 var ms=status.trim();
 			
 			if(ms.length>0&&ms=="saved"){
 				alert('Data saved successfully');							
 			}else if(ms.length>0&&ms!="saved"){
 				alert('Error: '+ms);									
 			}
         }
       
         
         $(document).on('pagebeforeshow','#profile',function(e,data){         	 
       	 $('input[id="flipMedical"]').prop("checked", true);
 			$( "#flipMedical" ).flipswitch( "refresh" );
 			$('input[id="flipSGMM"]').prop("checked", true);
 			$( "#flipSGMM" ).flipswitch( "refresh" );
        	 basicPersonFiltersNumber("txtCellPhone");
        	 basicPersonFiltersNumber("street_number");
        	 basicPersonNameFilters("txtFirstName");
        	 basicPersonNameFilters("locality");
        	 basicPersonNameFilters("route");
        	 basicPersonNameFilters("country");
        	 basicPersonNameFilters("administrative_area_level_1");
        	 basicPersonFiltersNumber("postal_code");
        	 validDriverLicense("txtLicenseNo");
        	 
        	
        	 $('#txtProfileName').keypress(function(key) {        		
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
         
        function basicPersonFiltersNumber(cellInput){
        	$('#'+cellInput).keypress(function(key) {        		
  		        if(key.charCode < 48 || key.charCode > 57){ 
  		        	
  		        	return false;
  		        	}else{  		        		  		        		
  		        	return true;
  		        	}
  		    });        	         
        	
        }
        function advancedNameFilters(nameInput){
            
       	 
       	 $('#'+nameInput).keypress(function(key) {        		
       		 if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 32) && (key.charCode < 48 || key.charCode > 57)
       				 && (key.charCode != 225)&& (key.charCode != 233)&& (key.charCode != 237)&& (key.charCode != 243)&& (key.charCode != 250)&& (key.charCode != 241)
       	   				&& (key.charCode != 193)&& (key.charCode != 201)&& (key.charCode != 205)&& (key.charCode != 211)&& (key.charCode != 218)&&  (key.charCode != 209)		 
       		 ){
           		 return false;
           	 }else{             		
           	        return true;
           	    }
			});
       	
       }
        
        function basicPersonNameFilters(nameInput){
       
        	 
        	 $('#'+nameInput).keypress(function(key) {        		
        		 if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 32)
        				 && (key.charCode != 225)&& (key.charCode != 233)&& (key.charCode != 237)&& (key.charCode != 243)&& (key.charCode != 250)&& (key.charCode != 241)
        	   				&& (key.charCode != 193)&& (key.charCode != 201)&& (key.charCode != 205)&& (key.charCode != 211)&& (key.charCode != 218)&&  (key.charCode != 209)		 
        		 ){
            		 return false;
            	 }else{             		
            	        return true;
            	    }
 			});
        	
        }
        
        function checkAddress(){
        	if(($('input[sel="pCity"]').val().trim().length>0||$('input[sel="pStreet"]').val().trim().length>0||$('label[id="lblZipCode"]').val().trim().length>0
        			||$('input[sel="pState"]').val().trim().length>0||$('input[sel="pCountry"]').val().trim().length>0)&& $('input[sel="pStreetNumber"]').val().trim().length<1
        			){
        		return true;
        	}else{
        		return false;
        	}        	
        }
        
        function setDataToTransaction(){				 
        		
        	
        	
			var jsonStore = new clsJsonStoreHelper();
			jsonStore.collectionName="perfil";
			jsonStore.document=
				 {firstName: $("#txtProfileName").val().trim(), lastName: $("#txtFirstName").val().trim(), secondLastName: '', cellPhone: $("#txtCellPhone").val().trim(),
		        	city: $('input[sel="pCity"]').val().trim(), birthdate: $('#txtBirthdate').val().trim(),
		        	streetNumber:$('input[sel="pStreetNumber"]').val().trim(),street:$('input[sel="pStreet"]').val().trim(),State:$('input[sel="pState"]').val().trim(),
		        	postalCode:$('input[sel="pPostalCode"]').val().trim(),Country:$('input[sel="pCountry"]').val().trim(), email:$('#txtUserEmail').val().trim(),
		        	licenseNumber:$('#txtLicenseNo').val().trim()
				 };
			
			jsonStore.id=getProfileId();
			//jsonStore.id=0;
			jsonStore.fnSuccess=function (succes) {
				
				
				//jsonStore.document["email"]=globalMail;
				//succes[0].json.email=globalMail;
				//updateAccount(jsonStore.document);
				var jsonStore = new clsJsonStoreHelper();
				jsonStore.collectionName="perfil";
				jsonStore.document=
						{
						};
				jsonStore.id=succes;
				jsonStore.fnSuccess=function (arrayResults) {
					 WL.Logger.debug(">>  data local: " + JSON.stringify(arrayResults));
					if(arrayResults.length>0){	
						
						navigator.notification.alert(
								''+Messages.msgDataSaved,
								function onSuccess() {
								}, "Info");
						updateAccount(arrayResults[0].json);
						
					}
				};
				jsonStore.fnFail=function (fail) {			
					
				};
				jsonStore.get();
				
				
				
			};
			jsonStore.fnFail=function (errorObject) {			
				alert("Error: "+errorObject.msg);
			};
			jsonStore.save(true,true);			
        		
}
        var profileId;
        function initPerfilDataInfo(){	
        	var jsonStore = new clsJsonStoreHelper();
        	jsonStore.collectionName="perfil";
        	jsonStore.document=
        			{
        			};
        	jsonStore.id=0;
        	jsonStore.fnSuccess=function (arrayResults) {			
        		if(arrayResults.length>0){
        			updateProfile=arrayResults;
        			profileId=arrayResults[0]._id;
        			  WL.Logger.debug("Retrieve success" +  JSON.stringify(arrayResults));
        			$("#txtProfileName").val(arrayResults[0].json.firstName);
        			$("#txtFirstName").val(arrayResults[0].json.lastName);	
        			
        			$("#txtCellPhone").val(arrayResults[0].json.cellPhone);	
        			$('input[sel="pCity"]').val(arrayResults[0].json.city);
        			
        			$('input[sel="pStreetNumber"]').val(arrayResults[0].json.streetNumber);
        			$('input[sel="pStreet"]').val(arrayResults[0].json.street);
        			$('input[sel="pState"]').val(arrayResults[0].json.State);
                	$('input[sel="pPostalCode"]').val(arrayResults[0].json.postalCode);
                	$('input[sel="pCountry"]').val(arrayResults[0].json.Country);
                	$('#txtLicenseNo').val(arrayResults[0].json.licenseNumber);
                	$('#txtUserEmail').val(arrayResults[0].json.email);
                	$('#txtBirthdate').val(arrayResults[0].json.birthdate); 
        		}
        	};
        	jsonStore.fnFail=function (fail) {			
        		
        	};
        	jsonStore.get();	
        	
        	}
        	
        function getProfileId(){
        	return profileId;
        }
        
        
        function updateAccount(perfil)
        {	
        	var restHelper = new clsRestHelper('account','updateAccount',perfil, updateperfilSuccess, updateperfilFailure);
        	restHelper.callRestAdapter();
        }
        function updateperfilSuccess(result){
        	var oResult = result.invocationResult;
        	if(oResult.isSuccessful)
        	{			
        		//var restHelper = new clsRestHelper('accountEmail','SPUpdateAccount',perfil, updateEmail, updateEmailFail);
            	//restHelper.callRestAdapter();
        		
        	}
        }
        function updateperfilFailure(error){
        	
        }
        
 function validateProfile(){
        	
        	var form = $("#profileForm");
    		form.validate({
    			errorElement:'div',
    			rules:{    				
    				txtProfileName:{
    					required: true,
    					minlength: 2
    				},
    				txtFirstName:{
    					required: true,
    					minlength: 2
    				},
    				txtCellPhone:{
    					required: true,
    					minlength: 10
    				},
    				street_number:{
    					required: true,
    					minlength: 1
    				},
    				route:{
    					required: true,
    					minlength: 2
    				},
    				locality:{
    					required: true,
    					minlength: 2
    				},
    				administrative_area_level_1:{
    					required: true,
    					minlength: 2
    				},
    				postal_code:{
    					required: true,
    					minlength: 2
    				},
    				country:{
    					required: true,
    					minlength: 2
    				},
    				txtUserEmail:{
    					required: true,
    					minlength: 5,
    					email:true
    				},
    			},
    			 messages: {    				 
    				 txtProfileName: { required: Messages.enter+' '+Messages.lblProfileName, minlength:Messages.minimun+' 2 '+Messages.characters},
    				 txtFirstName: { required: Messages.enter+' '+Messages.surnames,minlength:Messages.minimun+' 2 '+Messages.characters},
     				
     				txtCellPhone: { required: Messages.enter+' '+Messages.lblCellPhone,minlength:Messages.minimun+' 10 '+Messages.characters},
     				street_number: { required: Messages.enter+' '+Messages.streetNumber,minlength:Messages.minimun+' 1 '+Messages.characters},
     				route: { required: Messages.enter+' '+Messages.street,minlength:Messages.minimun+' 2 '+Messages.characters},
     				locality: { required: Messages.enter+' '+Messages.city,minlength:Messages.minimun+' 2 '+Messages.characters},
     				administrative_area_level_1: { required:  Messages.enter+' '+Messages.state,minlength:Messages.minimun+' 2 '+Messages.characters},
     				postal_code: { required: Messages.enter+' '+Messages.postalCode,minlength:Messages.minimun+' 2 '+Messages.characters},
     				country: { required:Messages.enter+' '+Messages.country,minlength:Messages.minimun+' 2 '+Messages.characters},
     				txtUserEmail: { required:Messages.enter+' email',minlength:Messages.minimun+' 5 '+Messages.characters},
     				
                 },
                 errorPlacement: function (error, element) {
                     error.insertAfter(element);
                     error.addClass('error'); 
                     error.css("color", "red");
                     error.css("text-align", "center");
                 }
    		});
    		if(form.valid())
    		{    			
    			savePerfil();
    		}
        	
        }
 
 function flipShowDiv(flip,showdiv){
var data=$('#'+flip).val();
if(data=="on"){
	$('#'+showdiv).show();	
}else{
	$('#'+showdiv).hide();	
}
 }
 
 
 function updateEmail(success){
 	
 }
 function updateEmailFail(error){
 	
 }
 
 function validEmail(inputName){
	 $('#'+inputName).keypress(function(key) {        		
		 if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 46)&& (key.charCode != 64)&& (key.charCode != 45)&& (key.charCode != 95)
				 && (key.charCode != 225)&& (key.charCode != 233)&& (key.charCode != 237)&& (key.charCode != 243)&& (key.charCode != 250)&& (key.charCode != 241)
	   				&& (key.charCode != 193)&& (key.charCode != 201)&& (key.charCode != 205)&& (key.charCode != 211)&& (key.charCode != 218)&&  (key.charCode != 209)	
	   				&& (key.charCode < 48 || key.charCode > 57)
		 ){
    		 return false;
    	 }else{             		
    	        return true;
    	    }
		});
 }
 
 function validDriverLicense(inputName){
	 $('#'+inputName).keypress(function(key) {        		
		 if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)&& (key.charCode != 95)
				 && (key.charCode != 225)&& (key.charCode != 233)&& (key.charCode != 237)&& (key.charCode != 243)&& (key.charCode != 250)&& (key.charCode != 241)
	   				&& (key.charCode != 193)&& (key.charCode != 201)&& (key.charCode != 205)&& (key.charCode != 211)&& (key.charCode != 218)&&  (key.charCode != 209)	
	   				&& (key.charCode < 48 || key.charCode > 57)
		 ){
    		 return false;
    	 }else{             		
    	        return true;
    	    }
		});
 }
 
 function flipInputShowDiv(flip,showdiv){
	 var datas=$('#'+flip);
	 if( datas.is(':checked')){
	 	$('#'+showdiv).show();	
	 }else{
	 	$('#'+showdiv).hide();	
	 }
	  }