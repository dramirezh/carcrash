function clsAccount(pEmail, pPass){
	this.email = pEmail;
	this.password = pPass;
	
	this.enter = function(){
		//verificar mail existente
		var obj = new clsRestHelper("account", "accessAccount", 
				{"email":this.email, "password":this.password}, 
				this.accessSuccess, 
				this.accessFailure);
		obj.callRestAdapter();
	};
	
	this.accessSuccess = function(result){
		var oResult = result.invocationResult.resultSet[0];
		if(oResult){
			//borrar registros existentes y cargar los del servidor
			globalMail = oResult.email;
			deleteAndDownload(oResult.email);
			//redireccionar a initial
			location.href="#initial";
		}
		else{
			navigator.notification.alert(
			"The email and password you entered do not match",
			function onSuccess() {
				$('#pwdPassSign').val("");
				$('#txtEmailSign').val("").focus();
			},
			"Error",
			"Try again");
		}
	};
	
	this.accessFailure = function(result){
		navigator.notification.alert(
				"Bad connection",
				function onSuccess() {
					
				},
				"Error");
	};
	
	this.suscribe = function(){
		//verificar mail existente
		var obj = new clsRestHelper("account", "suscribeAccount", 
				{"email":this.email, "password":this.password},
				this.suscribeSuccess,
				this.suscribeFailure);
		obj.callRestAdapter();
	};
	
	this.suscribeSuccess = function(result){
		//si no existe
		if(result.invocationResult.result == 0){
			//Guardar email en todos los registros guardados y subirlo
			globalMail = result.invocationResult.email;
			saveEmailRecords(result.invocationResult.email);
			//redireccionar a initial
		}else{//si existe
			//indicar que ya esta en uso
			navigator.notification.alert(
			"Email is already in use",
			function onSuccess() {
				$('#pwdPassSign').val("");
				$('#txtEmailSign').val("").focus();
			},
			"Try Again");
		}
	};
	
	this.suscribeFailure = function(result){
		
	};
}

function saveEmailRecords(pEmail){
	var collections = ["PolicyVehicle","reports","Contacts","perfil","MedicalData","MechanicData"];
	var errors = [];
	$(collections).each(function(num,col){
		var data = new clsJsonStoreHelper();
		data.collectionName = col;
		data.email = pEmail;
		data.fnSuccess = function(result){
			$(result).each(function(idx,obj){
				//var update = new clsJsonStoreHelper();
				//data.collectionName = this.collectionName;
				obj.json.email = data.email;
				data.document = obj.json;
				data.id = obj._id;
				data.fnSuccess = function(){
					uploadData(data);
				};
				data.fnFail = function(){
					
				};
				data.save();
			});
		};
		data.fnFail = function(result){
			errors.push(result);
		};
		data.get(false,false);
	});
}

function uploadData(data){
	var relations = [{collection:'PolicyVehicle', adapter:'vehiclesPolicies', procedure:'saveVehiclePolicies'},
	                 {collection:'reports', adapter:'sinisters', procedure:'saveSinisters'},
                     {collection:'Contacts', adapter:'EmergencyContacts', procedure:'saveEmergencyContacts'},
                     {collection:'perfil', adapter:'account', procedure:'saveAccount'},
                     {collection:'MedicalData', adapter:'medicalData', procedure:'saveProcedure'}, 
                     {collection:'MechanicData', adapter:'mechanic', procedure:'saveMechanic'}];
	$(relations).each(function(idx, obj){
		if(data.collectionName == obj.collection){
			data.saveToServer(obj.adapter, obj.procedure);
		}
	});
}

function deleteAndDownload(pEmail){
	WL.JSONStore.destroy();
	globalMail = pEmail;
	var oJS = new clsJsonStoreHelper();
	oJS.fnSuccess = function(ret){
		var collectionsToGet = [
		                        {collection:'reports', adapter:'sinisters', procedure:'getSinisters'},
		                        {collection:'Contacts', adapter:'EmergencyContacts', procedure:'getEmergencyContacts'},
		                        {collection:'MedicalData', adapter:'medicalData', procedure:'getMedicalData'}, 
		                        {collection:'MechanicData', adapter:'mechanic', procedure:'getMechanic'}
		                        ];
		$(collectionsToGet).each(function(idx,col){
			oJS.collectionName = col.collection;
			oJS.fnSuccess = function(ret){
				
			};
			oJS.fnFail = function(ret){
				
			};
			oJS.getFromServer(col.adapter, col.procedure);
		});
	};
	oJS.fnFail = function(error){
		navigator.notification.alert(
		'Error al obtener los datos de la cuenta.',
		function onSuccess() {
		}, "Error");
	};
	oJS.collectionName = "PolicyVehicle";
	oJS.getFromServer("vehiclesPolicies", "getVehiclesPolicies");
};

function btnClickEnter(){
	if($('#txtEmailSign').val().trim() != "" && $('#pwdPassSign').val().trim() != ""){
		new clsAccount($('#txtEmailSign').val(),$('#pwdPassSign').val()).enter();
	}else{
		$('#pwdPassSign').val("");
		$('#txtEmailSign').val("");
	}
}

function btnClickSuscribe(){
	if($('#txtEmailSign').val().trim() != "" && $('#pwdPassSign').val().trim() != ""){
		new clsAccount($('#txtEmailSign').val(),$('#pwdPassSign').val()).suscribe();
	}else{
		$('#pwdPassSign').val("");
	}
}