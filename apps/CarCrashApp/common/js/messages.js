Messages = {
	// Add here your messages for the default language. 
	// Generate a similar file with a language suffix containing the translated messages
	// key1 : message1,
	// key2 : message2
	
	// Uncomment if you use the Authenticator example.  
	// usernameLabel : "Username:",
	// passwordLabel : "Password:",
	// invalidUsernamePassword : 'Invalid username or password.' 
		
		//Profile Translations
		lblProfileName:"Nombre",
		fullname:"Nombre completo",
		surnames:"Apellidos",
		lblCellPhone:"Celular",
		profile:"Perfil",
		h1ConfirmCity:"Confirmar?",			
		//Show policies translations
		h1ConfirmPolicy:"Eliminar?",
		h3DeletePolicy:"Desea eliminar el registro seleccionado?",
		spnExpiration:"Expiración: ",
		h3SelectPolicyOp:"Seleccione una opción ",
		aPolicyDetails:"Detalles",
		PoliciesLimitNo:"Solo se permite guardar un máximo de 10 registros.",
			
		insurances:"Aseguradoras",
		opNoneMark:"Marca",
		//Medical data translations
		IMSSNum:"Numero IMSS",	
		bloodType:"Tipo de sangre",	
		allergies:"Alergias",	
		conditions:"Padecimientos",
		medical:"Medicos",
		opNoneBType:"Seleccione tipo de sangre",
		//Mechanic data translations
		mechanical:"Mecánico",
		//Add policy translations
		policy:"Póliza.",
		policyNum:"Numero de Póliza",
		lblPolicyExpiration:"Expiración de la Póliza",
		opNoneInsurance:"Seleccione Aseguradora",
		insurance:"Aseguradora",
		placeholderDateFormat:"dd/mm/aaaa",
		vehicle:"Vehicle",
		policies:"Pólizas",
		insuranceAgent:"Agente de Seguro",
		//Add Vehicle translations
		plates:"Placa",
		series:"Serie",
		lblVehicleType:"Tipo de Vehículo",
		subbrand:"SubMarca",
		color:"Color",
		picture:"Fotografía",
		usualDriver:"Conductor habitual",
		h1ConfirmMark:"Confirmar?",
		msgDataSaved:"Datos guardados con éxito.",
		// Report Sinister Translations
		h3ReportIncident:"Reportar incidente",
		aActualizeLocation:"Actualizar ubicación",
		opSelectCar:"Seleccione su auto",
		aRepSinister:"Rep. Siniestro",
		aRepTheft:"Rep. Robo",
		alertLocation:"Su ubicación no puede ser leída.",
		selectAuto:"Debe seleccionar el automóvil siniestrado.",
		
		//Report Sinister Det Translations
		aTakeSinisterPic:"Tomar Foto",
		lblflipAmbulancia:"Requiere asistencia medica?",
		opOff:"No",
		opOn:"Si",
		lblflipLegal:"Requiere asistencia legal?",
		lblObservaciones:"Comentarios:",
		aSendInfo:"Enviar información",
		//Sinister List Translations
		h3SinisterList:	"Listado de siniestros",
		aSinisterList:"Siniestros",
		aTheftList:"Robos",
		//Thefts List Translations
		h3TheftsList:"Listado de robos",
		//Policies Alerts Translations
		h3PoliciesAlerts:"Alertas de pólizas",
		pExpiredPolicy:"Pólizas por caducar o caducadas",
		expiredPolicy:"Póliza caducada: ",
		//left panel Translations
		h2Profile:"Perfil",
		aAccount:"Cuenta",
		aPoliza:"Vehículos/Pólizas",
		aMedicalData:"Datos Medicos",
		aMechanicContact:"Contacto Mecánico",
		aSinister:"Siniestro",
		aLiAlerts:"Alertas",
		aContacts:"Contactos",
		//Sign up Translations
		h2SignUp:"Registrarse",
		txtName:"Nombre",
		txtNacimiento:"Fecha de nacimiento",
		txtPais:"País",
		txtCiudad:"Ciudad",
		txtEmail:"E-Mail",
		txtPass:"Contraseña",
		txtPassConfirm:"Confirmar contraseña",
		txtCelular:"Celular",
		aSignIn:"Iniciar Sesión",
		aHelp:"Ayuda",
		logInHelpText:"Introduzca su E-mail y contraseña",
		date:"Fecha",
		report:"Reporte",
		//Sinister Pop Up Translations
		popHeader:"Reportar?",
		popTitle:"Esta seguro que desea levantar un reporte?",
		popContent:"Esta acción enviara su ubicación y datos a su aseguradora.",
		//general Translations
		dataUpdate:"Datos actualizados con éxito",
		pictureMsg: "Capture una foto",
		address:"Domicilio",
		streetNumber:"Numero",
		street:"Calle",
		state:"Estado",
		postalCode:"Código postal",
		country:"País",
		placeAddress:"Dirección completa",
		year:"Año",
		city:"Ciudad",
		enter:"Ingrese",
		minimun:"Mínimo",
		characters:"caracteres",
		search:"Buscar",
		//contacts
		contact:"Contacto",
		contacts:"Contactos",		
};

function setSpanish(){
	setDefaultSpanish();
	setSpanishProfile();
	setSpanishShowPolicies();
	 setSpanishMedicalData();		
	 setSpanishMechanicData();
	 setSpanishAddPolicy();
	 setSpanishReportSinister();
	 setSpanishReportSinisterDet();
	 setSpanishSinisterList();
	 setSpanishTheftsList();
	 setSpanishPoliciesAlerts();
	 setSpanishLeftPanel();
	 setSpanishSingUp();
	 setSpanishLogIn();
	 setSpanishSinisterPopUp();
	 setSpanishContacts();
} 

function setEnglish(){		
	setDefaultEnglish();
	setEnglishProfile();
	setEnglishShowPolicies();
	 setEnglishMedicalData();
	 setEnglishMechanicData();
	 setEnglishAddPolicy();
	 setEnglishReportSinister();
	 setEnglishReportSinisterDet();
	 setEnglishSinisterList();
	 setEnglishTheftsList();
	 setEnglishPoliciesAlerts();
	 setEnglishLeftPanel();
	 setEnglishSingUp();
	 setEnglishLogIn();
	 setEnglishSinisterPopUp();
	 setEnglishContacts();		
}

//Spanish Section

function setSpanishProfile(){		
	Messages.lblProfileName = "Nombre";
	Messages.fullname = "Nombre completo";
	Messages.surnames = "Apellidos";
	Messages.lblCellPhone = "Celular";
	Messages.profile = "Perfil";	
	Messages.h1ConfirmCity = "Confirmar?";	
}
function setSpanishShowPolicies(){	
	Messages.h1ConfirmPolicy = "Eliminar?";
	Messages.h3DeletePolicy = "Desea eliminar el registro seleccionado?"; 
	Messages.spnExpiration = "Expiración: ";
	Messages.h3SelectPolicyOp = "Seleccione una opción "; 
	Messages.aPolicyDetails = "Detalles";
	Messages.PoliciesLimitNo = "Solo se permite guardar un máximo de 10 registros.";	
	Messages.insuranceAgent="Agente de Seguro";
	Messages.insurances="Aseguradoras";	
	Messages.opNoneMark="Marca"; 		
}

function setSpanishMedicalData(){
	Messages.IMSSNum = "No. IMSS";
	Messages.bloodType = "Tipo de sangre";
	Messages.allergies = "Alergias";
	Messages.conditions = "Padecimientos";
	Messages.medical="Medicos";
	Messages.opNoneBType="Seleccione tipo de sangre";
}

function setSpanishMechanicData(){
	Messages.mechanical = "Mecánico";
}

function setSpanishAddPolicy(){
	Messages.policy = "Póliza";
	Messages.policyNum = "No. Póliza";
	Messages.lblPolicyExpiration = "Expiración de la Póliza";
	Messages.opNoneInsurance = "Aseguradora";
	Messages.lblInsurance = "Aseguradora";	
	Messages.vehicle = "Vehículo";
	Messages.policies = "Pólizas";
	// Vehicle Seccion
	Messages.plates = "Placas";
	Messages.series = "Serie";
	Messages.lblVehicleType = "Tipo de Vehículo";
	Messages.subbrand = "SubMarca";
	Messages.color = "Color";
	Messages.picture = "Fotografía";
	Messages.usualDriver = "Conductor habitual"; 
	Messages.h1ConfirmMark = "Confirmar?";		
}

function setSpanishReportSinister(){
	Messages.h3ReportIncident = "Reportar incidente";
	Messages.aActualizeLocation = "Actualizar ubicación";
	Messages.opSelectCar = "Seleccione su auto";
	Messages.aRepSinister = "Rep. Siniestro";
	Messages.aRepTheft="Rep. Robo";
	Messages.alertLocation="Su ubicación no puede ser leída.";
	Messages.selectAuto="Debe seleccionar el automóvil siniestrado.";	
}

function setSpanishReportSinisterDet(){
	Messages.aTakeSinisterPic = "Tomar foto";
	Messages.lblflipAmbulancia = "Requiere asistencia medica?";		
	Messages.lblflipLegal="Requiere asistencia legal?";		
	Messages.lblObservaciones="Comentarios:";		
	Messages.aSendInfo="Enviar información";		
}

function setSpanishSinisterList(){
	Messages.h3SinisterList = "Listado de siniestros";
	Messages.aSinisterList = "Siniestros";
	Messages.aTheftList = "Robos";
	Messages.date = "Fecha: ";
	Messages.report = "Reporte: ";
}	


function setSpanishTheftsList(){
	Messages.h3TheftsList = "Listado de robos";
}

function setSpanishPoliciesAlerts(){
	Messages.h3PoliciesAlerts = "Alertas de pólizas";
	Messages.pExpiredPolicy = "Pólizas por caducar o caducadas";
	Messages.expiredPolicy = "Póliza caducada: ";
}


function setSpanishLeftPanel(){
	Messages.h2Profile = "Perfil";
	Messages.aAccount = "Cuenta";
	Messages.aMedicalData = "Datos Medicos"; 
	Messages.aPoliza = "Vehículos/Pólizas";
	Messages.aMechanicContact = "Contacto Mecánico";
	Messages.aSinister = "Siniestro";
	Messages.aLiAlerts = "Alertas";
	Messages.aContacts = "Contactos";
}

function setSpanishSingUp(){
	Messages.h2SignUp = "Registrarse";
	Messages.txtName = "Nombre";
	Messages.txtNacimiento = "Fecha de nacimiento"; 
	Messages.txtPais = "País";
	Messages.txtCiudad = "Ciudad";
	Messages.txtEmail = "E-Mail";
	Messages.txtPass = "Contraseña";
	Messages.txtPassConfirm = "Confirmar contraseña";
	Messages.txtCelular = "Celular";
	Messages.aSignIn = "Iniciar Sesión";
}

function setSpanishLogIn(){
	Messages.logInHelpText = "Introduzca su E-mail y contraseña";
}

function setSpanishSinisterPopUp(){
	Messages.popHeader = "Reportar?";
	Messages.popTitle = "Esta seguro que desea levantar un reporte?";
	Messages.popContent = "Esta acción enviara su ubicación y datos a su aseguradora.";
}

function setDefaultSpanish(){
	Messages.placeholderDateFormat = "dd/mm/aaaa";
	Messages.msgDataSaved = "Datos guardados con éxito";
	Messages.opOff = "No";
	Messages.opOn = "Si";
	Messages.aHelp = "Ayuda";
	Messages.dataExist = "El registro ya existe";
	Messages.requiredData = "Ingrese los datos solicitados";	
	Messages.dataUpdate = "Datos actualizados con éxito";
	Messages.pictureMsg= "Capture una foto";
	Messages.address="Domicilio";
	Messages.streetNumber="Numero";
	Messages.street="Calle";
	Messages.state="Estado";
	Messages.postalCode="Código postal";
	Messages.country="País";
	Messages.placeAddress="Introduzca su dirección completa";
	Messages.year="Año";
	Messages.city="Ciudad";
	Messages.enter="Ingrese";
	Messages.minimun="Mínimo";
	Messages.characters="Caracteres";
	Messages.search="Buscar";	
}

function setSpanishContacts(){
	Messages.contact = "Contact";
	Messages.contacts = "Contacts";
}

//English Section

function setEnglishProfile(){		
	Messages.lblProfileName = "First Name";
	Messages.fullname = "Full Name";
	Messages.surnames = "Surnames";
	Messages.lblCellPhone = "Cell Phone";
	Messages.profile = "Profile";	
	Messages.h1ConfirmCity = "Confirm?";	
}

function setEnglishShowPolicies(){	
	Messages.h1ConfirmPolicy = "Delete?";
	Messages.h3DeletePolicy = "Delete selected record?";
	Messages.spnExpiration = "Expiration: ";
	Messages.h3SelectPolicyOp = "Select an option: "; 
	Messages.aPolicyDetails = "Details";
	Messages.PoliciesLimitNo = "You only can save up to 10 records";	
	Messages.insuranceAgent="Insurance agent";
	Messages.insurances="Insurances";
	Messages.opNoneMark="Brand";
}

function setEnglishMedicalData(){
	Messages.IMSSNum = "IMSS Number";
	Messages.bloodType = "Blood type";
	Messages.allergies = "Allergies";
	Messages.conditions = "Medical conditions";
	Messages.medical="Medical";
	Messages.opNoneBType="Select blood type";
}

function setEnglishMechanicData(){
	Messages.mechanical = "Mechanical";
}

function setEnglishAddPolicy(){
	Messages.policy = "Policy";
	Messages.policyNum = "Policy Number";
	Messages.lblPolicyExpiration = "Policy Expiration";
	Messages.opNoneInsurance = "Select Insurance";
	Messages.insurance = "Insurance";	
	Messages.vehicle = "Vehicle"; 
	Messages.policies = "Policies";
	// Vehicle Seccion
	Messages.plates = "Plates";
	Messages.series = "Series";
	Messages.lblVehicleType = "Vehicle Type";
	Messages.subbrand = "Sub Brand";
	Messages.color = "Color";
	Messages.picture = "Picture";
	Messages.usualDriver = "Usual driver";
	Messages.h1ConfirmMark = "Confirm?";
}	

function setEnglishReportSinister(){
	Messages.h3ReportIncident = "Report incident";
	Messages.aActualizeLocation = "Actualize location";
	Messages.opSelectCar = "Select your car";
	Messages.aRepSinister = "Rep. Sinister";
	Messages.aRepTheft="Rep. Theft";
	Messages.alertLocation="Your location can not be readed.";
	Messages.selectAuto="You must select the wrecked car.";				
}

function setEnglishReportSinisterDet(){

	Messages.aTakeSinisterPic = "Take picture";
	Messages.lblflipAmbulancia = "Medical assistance is required?";		
	Messages.lblflipLegal="Legal assistance is required?";		
	Messages.lblObservaciones="Comments:";		
	Messages.aSendInfo="Send Info";		
}

function setEnglishSinisterList(){
	Messages.h3SinisterList = "Sinisters List";
	Messages.aSinisterList = "Sinisters List";
	Messages.aTheftList = "Thefts List";
	Messages.date = "Date: ";
	Messages.report = "Report: ";
}

function setEnglishTheftsList(){
	Messages.h3TheftsList = "Thefts List";
}

function setEnglishPoliciesAlerts(){
	Messages.h3PoliciesAlerts = "Policies alerts";
	Messages.pExpiredPolicy = "Policies for outdated or expired";
	Messages.expiredPolicy = "Expired policy: ";
}

function setEnglishLeftPanel(){
	Messages.h2Profile = "Profile";
	Messages.aAccount = "Account";
	Messages.aMedicalData = "Medical Data"; 
	Messages.aPoliza = "Vehicles/Policies";
	Messages.aMechanicContact = "Mechanic Contact";
	Messages.aSinister = "Sinister";
	Messages.aLiAlerts = "Alerts";
	Messages.aContacts = "Contacts";
}

function setEnglishSingUp(){
	Messages.h2SignUp = "Sign Up";
	Messages.txtName = "Name";
	Messages.txtNacimiento = "Birth date"; 
	Messages.txtPais = "Country";
	Messages.txtCiudad = "City";
	Messages.txtEmail = "E-Mail";
	Messages.txtPass = "Password";
	Messages.txtPassConfirm = "Confirm password";
	Messages.txtCelular = "Phone number";
	Messages.aSignIn = "Sign In";
}

function setEnglishLogIn(){
	Messages.logInHelpText = "Please insert your e-mail and password credentials.";
}

function setEnglishSinisterPopUp(){
	Messages.popHeader = "Report?";
	Messages.popTitle = "Are you sure you want to make a report?";
	Messages.popContent = "This action will send your location and data to your insurance.";
}
function setDefaultEnglish(){
	Messages.placeholderDateFormat = "dd/mm/yyyy";
	Messages.msgDataSaved = "Data saved successfully";
	Messages.opOff = "No";
	Messages.opOn = "Yes";
	Messages.aHelp = "Help";
	Messages.dataExist = "Data already exist";
	Messages.requiredData = "Enter all required data";
	Messages.dataUpdate = "Data updated successfully";
	Messages.pictureMsg= "Take a picture";
	Messages.address="Address";
	Messages.streetNumber="Street number";
	Messages.street="Street name";
	Messages.state="State";
	Messages.postalCode="Zip code";
	Messages.country="Country";
	Messages.placeAddress="Full address";
	Messages.year="Year";
	Messages.city="City";
	Messages.enter="Enter";
	Messages.minimun="Minimun";
	Messages.characters="characters";
	Messages.search="Search";	
}

function setEnglishContacts(){
	Messages.contact = "Contact";
	Messages.contacts = "Contacts";
}