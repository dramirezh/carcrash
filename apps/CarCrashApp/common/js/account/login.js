function account()
{
	this.firstName = "";
	this.lastName = "";
	this.secondLastName = "";
	this.birthDate = "";
	this.country = "";
	this.state = "";
	this.city = "";
	this.email = "";
	this.cellPhone = "";
	this.password = "";
	
	//functions
	this.save = saveAccount;
	this.access = accessAccount;
}

function saveAccount(pAccount)
{	
	var restHelper = new clsRestHelper('account','saveAccount',pAccount, saveAccountSuccess, saveAccountFailure);
	restHelper.callRestAdapter();
}
function saveAccountSuccess(result){
	var oResult = result.invocationResult;
	if(oResult.isSuccessful && oResult.isSuccessful)
	{
		navigator.notification.alert(
				"Registrado correctamente, ahora inicie sesion con su e-mail y password",
				function(){
			location.href = "#login";
			$("#frmSignUp")[0].reset();
		});
	}
	else{
		navigator.notification.alert(
		'Ocurrio un error al crear su cuenta, por favor intente de nuevo.',
		function() {});
	}
}
function saveAccountFailure(error){
	navigator.notification.alert(
	'Error al registrarse, asegurese de contar con conexion a internet.',
	function(){}, "Error");
}

function accessAccount(pEmail, pPassword)
{
	var restHelper = new clsRestHelper('account','accessAccount', {email:pEmail, password:pPassword}, accessSuccess, accessFailure);
	restHelper.callRestAdapter();
}

function accessSuccess(result){
	var oResult = result.invocationResult.resultSet[0];
	if(oResult){
		//Guardar datos en jsonstore
		var oJS = new clsJsonStoreHelper();
		oJS.collectionName = "perfil";
		oJS.document = oResult;
		oJS.id = 0;
		oJS.fnSuccess = function(numAdd){
			if(numAdd > 0){
				//redireccionar a perfil
				getGlobalData();
				location.href = "#initial";
			}
			else{
				navigator.notification.alert(
				'Something went wrong. Try again.',
				function onSuccess() {
				});
			}
		};
		oJS.fnFail = function(){
			navigator.notification.alert(
			'Something went wrong. Try again.',
			function onSuccess() {
			}, "Error");
		};
		oJS.save(false, false);
	}
	else{
		navigator.notification.alert(
		'E-Mail and password does not match.',
		function onSuccess() {
			$('#txtPasswordLogin').val("").focus();
		});
	}
}

function accessFailure(error){
	navigator.notification.alert(
	'Error, be sure to have internet connection.',
	function onSuccess() {
	}, "Error");
}

function SignIn()
{
	var mail = $('#txtEmailLogin').val();
	var pass = $('#txtPasswordLogin').val();
	
	var oAcc = new account();
	oAcc.email = mail;
	oAcc.password = pass;
	
	oAcc.access(mail,pass);
}

function signUp()
{
	//Check password confirmation
	//if($("#txtPass").val() === $("#txtPassConfirm").val()){
		/*var form = $("#frmSignUp");
		form.validate({
			errorElement:'div',
			rules:{
				txtName:{
					required: true,
					minlength: 2
				},
				txtPass:{
					required: true,
					minlength: 5
				},
				txtPassConfirm:{
					required: true,
					minlength: 5
				},
				txtCelular:{
					required: true,
					minlength: 10
				}
			}
		});*/
		if($("#txtNameSign").val().length > 0 &&
				$("#txtLastNameSign").val().length > 0 &&
				$("#txtEmailSign").val().length > 0 &&
				$("#txtPasswordSign").val().length > 0)
		{
			//Enviar datos a server
			var oAccount = new account();
			oAccount.firstName = $("#txtNameSign").val();
			oAccount.lastName = $("#txtLastNameSign").val();
			oAccount.email = $("#txtEmailSign").val();
			oAccount.password = $("#txtPasswordSign").val();
			
			oAccount.save(oAccount);		
		}else{
			navigator.notification.alert('All fields are required',
					function onSuccess() {
						
					});
		}
	/*}
	else{
		navigator.notification.alert('Los campos de password no coinciden.',
		function onSuccess() {
			$("#txtPass").focus();
			$("#txtPass").val("");
			$("#txtPassConfirm").val("");
		});
	}*/
}
function logOut(){
	navigator.notification.confirm(
	"Are you sure?",
	function onConfirm(result) {
		if(result == 1){
			WL.JSONStore.destroy();
			location.href = "#login";
		}
	},
	"Logout");
}

function checkUser(){
	var oJS = new clsJsonStoreHelper();
	oJS.collectionName = 'perfil';
	oJS.fnSuccess = function(numCnt){
		if(numCnt > 0){
			getGlobalData();
			location.href = "#initial";
		}
		else{
			location.href = "#login";
		}
	};
	oJS.fnFail = function(){
		navigator.notification.alert(
		'Error de base de datos interno.',
		function onSuccess() {
			location.href = "#login";
		}, "Error");
	};
	oJS.count();
}

function getGlobalData(){
	var oJS = new clsJsonStoreHelper();
	oJS.collectionName = 'perfil';
	oJS.id = 1;
	oJS.fnSuccess = function(result){
		globalMail = result[0].json.email;
		getServerData();
	};
	oJS.fnFail = function(error){
		
	};
	oJS.get();
}

function getServerData(){
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
			oJS.fnSuccess = function(){};
			oJS.fnFail = function(){};
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
	
}

function logOut(){
	WL.JSONStore.destroy();
	location.href = "#login";
}