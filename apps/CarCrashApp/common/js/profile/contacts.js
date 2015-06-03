var contactSaved=false;
var updatedContact=false;
var contactId="0";
var contactExist=false;
var dataDetails=null;
var contactUpdate=false;
var contactsCount=0;
var dataToConDelete=null;
function contact()
{
	this.userContactName = "";
	this.userContactFirstName = "";
	this.userContactLastName = "";
	this.userContactCellPhone = "";	
}

function validNewContact(){
	cleanContactInputs();		
	var jsonStore = new clsJsonStoreHelper();
	jsonStore.collectionName="Contacts";
	jsonStore.document=
			{
			};
	jsonStore.id=parseInt(contactId);
	jsonStore.fnSuccess=function (result){
		
		if(result<5){
			location.href="#contactsContent"; 
			contactUpdate=false;
			contactSaved=false;
			contactId=0;
		}else{	
			navigator.notification.alert(
					'limite maximo de registros',
					function onSuccess() {
					}, "Info");	
		}
		
	} ;
	jsonStore.fnFail=function(result){  }; ;
	jsonStore.count() ;			

		}
function countContacts(){
	var jsonStore = new clsJsonStoreHelper();
	jsonStore.collectionName="Contacts";
	jsonStore.document=
			{
			};
	jsonStore.id=parseInt(contactId);
	jsonStore.fnSuccess=countSuccess;
	jsonStore.fnFail=countFail;
	jsonStore.count();			
}

function validUnsavedContact(){										
	
var	userContactName=$("#txtUserContactName");
	 
var	userContactCellPhone=$("#txtUserContactCellPhone");
	
		if(!contactSaved&&(userContactName.val().trim().length>0
				||userContactCellPhone.val().trim().length>0
		)){			
		
		if(userContactName.val().trim().length>0
				&&userContactCellPhone.val().trim().length>0){
		
			$('#liSUdataC').show();
			
		}else{
			$('#liSUdataC').hide();
		}
		if(userContactName.val().trim().length>0||userContactFirstName.val().trim().length>0||userContactLastName.val().trim().length>0
				||userContactCellPhone.val().trim().length>0	
		){					
					$('#liKeepEdC').show();
					
				}else{
					$('#liKeepEdC').hide();
				}
		popUpListPolicy();
		$( "#popupMenuContactCont" ).popup( "open" );
		}else{
			
			 cleanContactInputs();
			location.href="#showContacts"; 
		}																									 			 
	
}

function cleanContactInputs(){						
	
	$("#txtUserContactName").val("");	 
	$("#txtUserContactCellPhone").val("");
	$("#txtUserContactEmail").val("");
}
function saveContact(){						
			
	var jsonStore = new clsJsonStoreHelper();
	jsonStore.collectionName="Contacts";
	jsonStore.document=
			{
			};
	jsonStore.id=parseInt(contactId);
	jsonStore.fnSuccess=function(result){ 
		
		if(result<5||contactUpdate){	
	var	userContactName=$("#txtUserContactName"); 
	var	userContactCellPhone=$("#txtUserContactCellPhone");
	
	
	if(userContactName.val().trim().length>0
			&&userContactCellPhone.val().trim().length>0
	){ 	
						
		if(!contactUpdate){ 
		var jsonStore = new clsJsonStoreHelper();
		jsonStore.collectionName="Contacts";
		jsonStore.document=
				[{operator: "equal", key:'UserContactFirstName',value:userContactName.val().trim()				
				},
				{					operator: "equal", key:'UserContactLastName',value:''									
				},
				{	operator: "equal",key:'UserContactSecondLastName',value:''													
				},
				{					operator: "equal",key:'UserContactCellPhone',value:userContactCellPhone.val().trim()					
				}];
		jsonStore.id=0;
		jsonStore.fnSuccess=existSuccess;
		jsonStore.fnFail=existFail;
		jsonStore.get();
		
		}else{
			savingContact();	
		}		
		
	    } else {		    							
			navigator.notification.alert(
					Messages.requiredData+'',
					function onSuccess() {
					}, "Info");	
	    }	
	
	}else{		
		navigator.notification.alert(
				'limite maximo de registros',
				function onSuccess() {
				}, "Info");	
	}
}; ;
	jsonStore.fnFail=function(result){ };
	jsonStore.count() ;		

	}

var docs;

function savingContact(){
	var	userContactName=$("#txtUserContactName");	 
	var	userContactCellPhone=$("#txtUserContactCellPhone");
	var userContactEmail=$("#txtUserContactEmail").val();
	
	var vehicledata = getAllChkChecked('chkbVehicle');
	
	if(!contactExist||contactUpdate){
		
		 docs="";
		if(contactUpdate){
			docs={UserContactFirstName:userContactName.val().trim(),		
					UserContactLastName:'',UserContactSecondLastName:'',
					UserContactCellPhone:userContactCellPhone.val().trim(), UserContactEmail:userContactEmail, vehicle: vehicledata
					};
		}else{
			docs={UserContactFirstName:userContactName.val().trim(),		
				UserContactLastName:'',UserContactSecondLastName:'',
				UserContactCellPhone:userContactCellPhone.val().trim(), UserContactEmail:userContactEmail, vehicle: vehicledata};
		}
		
	var jsonStore = new clsJsonStoreHelper();
	jsonStore.collectionName="Contacts";
	jsonStore.document=docs;				
	jsonStore.id=parseInt(contactId);
	jsonStore.fnSuccess=success;
	jsonStore.fnFail=fail;						
	jsonStore.save();				
	
	}
	
}

function success(result){		
	if(contactUpdate){						
		 saveAllContacts();		
		navigator.notification.alert(
				Messages.dataUpdate+'',
				function onSuccess() {
				}, "Info");	
		contactSaved=false;
	}else{
		saveAllContacts();
	navigator.notification.alert(
			Messages.msgDataSaved+'',
			function onSuccess() {
			}, "Info");	
	contactSaved=true;
	}
	location.href="#showContacts";	
}

function fail(errorObject){
	
}

function initContacts(){
	var jsonStore = new clsJsonStoreHelper();
	jsonStore.collectionName="Contacts";
	jsonStore.document=
			{
			};
	jsonStore.id=0;
	jsonStore.fnSuccess=initSuccess;
	jsonStore.fnFail=initFail;
	jsonStore.get();
	
}

function initSuccess(result){
	
	if(result.length>0){
		var index;
		$('#listContact').empty();
		for (index = 0; index < result.length; ++index) {				   
			
			initContactToList(result[index].json.UserContactFirstName,result[index].json.UserContactCellPhone
					, result[index]._id);
		}
		$('a[id="acontactsList"]').on("taphold",function(){				
			initSelectedContact(this);	 popUpListPolicy(); 
			$( "#popupMenuContact" ).popup( "open" );
			
			});
} 
}

function initFail(result){
	
}

function existSuccess(result){
	
	if(result.length>0){			
		navigator.notification.alert(
				Messages.dataExist+'',
				function onSuccess() {
				}, "Info");
	}else{
		 savingContact();		
	} 
}

function existFail(result){
	
}

$(document).on('pagebeforeshow','#showContacts',function(e,data){   
	
	initContacts();
	basicPersonFiltersNumber("txtUserContactCellPhone");       	 
	 $('#txtUserContactName').keypress(function(key) {        		
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

function initContactToList(name,cellphone, id){
	
	$('#listContact').append('<li style="margin-bottom:2px;" ><a id="acontactsList"  href="tel:'+cellphone+'" onclick="initSelectedContact(this); initContactDetails();" class="ui-btn ui-btn-icon-right ui-icon-phone" > ' +	        
		    '<h2>'+name.trim()+'</h2>'+		    
		    ' <input type="hidden" value="'+id+'" />'+
		   ' </a>'+
		   ' </li>');	
	
}
var listitem;
function initSelectedContact(v){
	  listitem = $(v).parent( "li" );		 
	  contactId=jQuery(v).children("input:hidden").val();							
	popUpListPolicy();			
}

function initContactDetails(){
	//cleanPolicyInputs();
	dataDetails=null;
	var jsonStore = new clsJsonStoreHelper();
	jsonStore.collectionName="Contacts";
	jsonStore.document=
			{
			};
	jsonStore.id=parseInt(contactId);
	jsonStore.fnSuccess=detailsSuccess;
	jsonStore.fnFail=detailsFail;							
	jsonStore.get();							
}

function detailsSuccess(result){
	dataDetails=result;
	location.href="#contactsContent";	
	  $(document).on('pagebeforeshow','#contactsContent',function(e,data1){ 		 
		  
		  if(dataDetails!=null&&dataDetails.length>0&&contactUpdate){ 
			
			$("#txtUserContactName").val(dataDetails[0].json.UserContactFirstName);		
		    $("#txtUserContactCellPhone").val(dataDetails[0].json.UserContactCellPhone);	
		    $("#txtUserContactEmail").val(dataDetails[0].json.UserContactEmail);	
		    
				
			
		  }
	  });
	
	contactUpdate=true;
}

function detailsFail(errorObject){	
	navigator.notification.alert(
			"Error: "+errorObject.msg,
			function onSuccess() {
			}, "Error");
}

function initDelete(){
	$( "#popupMenuContact" ).popup( "close" );
	var jsonStore = new clsJsonStoreHelper();
	jsonStore.collectionName="Contacts";
	jsonStore.document=
			{
			};
	jsonStore.id=parseInt(contactId);
	jsonStore.fnSuccess=function(succes){ dataToConDelete=succes;		
	contactDeleted();
	
	};
	jsonStore.fnFail=function(){ 	
		navigator.notification.alert(
				"No se ha podido eliminar",
				function onSuccess() {
				}, "Error");

	};							
	jsonStore.get();
	
}

function contactDeleted(){
	
	var jsonStore = new clsJsonStoreHelper();
	
	jsonStore.collectionName="Contacts";
	jsonStore.document=
			{
			};
	jsonStore.id=parseInt(contactId);
	jsonStore.fnSuccess=deleteSuccess;
	jsonStore.fnFail=deleteFail;			
	jsonStore.remove();		
}

function deleteSuccess(result){
	var item2 = $("#listContact").find(listitem);
    item2.remove();			    	
    ondeletedUpdateList('listContact');   
    saveAllContacts();
}

function deleteFail(errorObject){	
	navigator.notification.alert(
			"Error: "+errorObject.msg,
			function onSuccess() {
			}, "Error");
}

function ondeletedUpdateList(list){
	try{
		$('#'+list).listview('refresh');	        			
	}catch(err){
		
	}
}

function countSuccess(result){
	contactsCount=result;
	
}

function countFail(result){

}

function saveEmergencyContacts(pContact)
{	
	var restHelper = new clsRestHelper('EmergencyContacts','saveEmergencyContacts',pContact, saveEmergencyContactsSuccess, saveEmergencyContactsFailure);
	restHelper.callRestAdapter();
}
function saveEmergencyContactsSuccess(result){
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
function saveEmergencyContactsFailure(error){
	
}

function deleteEmergencyContacts(pContact)
{	
	var restHelper = new clsRestHelper('EmergencyContacts','saveEmergencyContacts',pContact, deleteEmergencyContactsSuccess, deleteEmergencyContactsFailure);
	restHelper.callRestAdapter();
}
function deleteEmergencyContactsSuccess(result){
	var oResult = result.invocationResult;
	if(oResult.isSuccessful)
	{			
		 dataToConDelete=null;		
		navigator.notification.alert(
				'Registro eliminado con exito.',
				function onSuccess() {
				}, "Info");
	}
	else{	
		navigator.notification.alert(
				'Ocurrio un error, por favor intente de nuevo.',
				function onSuccess() {
				}, "Error");
	}
}
function deleteEmergencyContactsFailure(error){	
	
}

function updateEmergencyContacts(pContact)
{	
	var restHelper = new clsRestHelper('EmergencyContacts','saveEmergencyContacts',pContact, updateEmergencyContactsSuccess, updateEmergencyContactsFailure);
	restHelper.callRestAdapter();
}
function updateEmergencyContactsSuccess(result){
	var oResult = result.invocationResult;
	if(oResult.isSuccessful)
	{			
		dataDetails=null;
		
	}
	else{		
		navigator.notification.alert(
				'Ocurrio un error, por favor intente de nuevo.',
				function onSuccess() {
				}, "Error");
	}
}
function updateEmergencyContactsFailure(error){
	
}


function saveAllContacts()
{	
	var jsonStore = new clsJsonStoreHelper();
	jsonStore.collectionName="Contacts";
	jsonStore.document=
			{
			};
	jsonStore.id=0;
	jsonStore.fnSuccess=function initSuccess(arrayResults){	
		if(arrayResults.invocationResult.isSuccessful&&arrayResults.invocationResult.data.length>0){
			//alert("enviado al servidor");
		}else{		
			navigator.notification.alert(
					'No se ha podido enviar datos al servidor, intente mas tarde',
					function onSuccess() {
					}, "Error");
		}
		return true;
	};
	jsonStore.fnFail=function initFail(result){
		
		
	};
	jsonStore.saveToServer("EmergencyContacts", "saveEmergencyContacts");
}
	
function initPolicyVehicleChk(){  
	var jsonStore = new clsJsonStoreHelper();
	jsonStore.collectionName="PolicyVehicle";
	jsonStore.document=
			{
			};
	jsonStore.id=0;
	jsonStore.fnSuccess=function initSuccess(arrayResults){
		
		if(arrayResults.length>0){
			var index;
			$('#chkbVehicle').empty();
			for (index = 0; index < arrayResults.length; ++index) {				   								
				$('#chkbVehicle').append('<div class="ui-checkbox"> <input style="width:25px !important; height:24px !important;"  type="checkbox" name="ichk'+arrayResults[index].json.identifier+'" id="'+arrayResults[index].json.identifier+'-chk" >'+
        '<label class=" ui-btn-icon-left" style="display:initial;" for="chk-'+arrayResults[index].json.identifier+'">'+arrayResults[index].json.Serie+'</label> </div>');
			}
			if(dataDetails!=null&&dataDetails.length>0&&contactUpdate){ 								
			    var cont;
			   
			    for(cont=0;cont<dataDetails[0].json.vehicle.length;cont++){
			    	$('input[id="'+dataDetails[0].json.vehicle[cont].IDVehicleType+'"]').prop("checked", true);//.checkboxradio('refresh');		    	
			    }											
			  }
			 	
		} 
	};
	jsonStore.fnFail=function initFail(result){
		
	};
	jsonStore.get();
	}

$(document).on('pagebeforeshow','#contactsContent',function(e,data1){ 
	initPolicyVehicleChk();
	 
});

function getAllChkChecked(FormName){
	var data = [];
    $.each($("#"+FormName+" input[type=checkbox]"), function(){
       if( $(this).is(':checked')){       
       var title = $(this).attr("id");  
      var data2= {IDVehicleType: title};
      data.push(data2);
       }
       
    });
    return  data;
}