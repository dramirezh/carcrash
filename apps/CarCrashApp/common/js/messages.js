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
		vehicle:"Vehículo",
		policies:"Pólizas",
		insuranceAgent:"Agente de Seguro",
		//Add Vehicle translations
		brand:"Marca",
		plates:"Placa",
		series:"Serie",
		lblVehicleType:"Tipo de Vehículo",
		subbrand:"SubMarca",
		color:"Color",
		picture:"Fotografía",
		usualDriver:"Conductor habitual",
		h1ConfirmMark:"Confirmar?",
		msgDataSaved:"Datos guardados con éxito.",
		insuranceData:"Datos Aseguradora",
		// Report Sinister Translations
		h3ReportIncident:"Reportar incidente",
		aActualizeLocation:"Actualizar ubicación",
		opSelectCar:"Seleccione su auto",
		aRepSinister:"Rep. Siniestro",
		aRepTheft:"Rep. Robo",
		alertLocation:"Su ubicación no puede ser leída.",
		selectAuto:"Debe seleccionar el automóvil siniestrado.",
		reportName:"Reporte",
		//Report Sinister Det Translations		
		lblflipAmbulancia:"Requiere asistencia medica?",
		opOff:"No",
		opOn:"Si",
		lblflipLegal:"Requiere asistencia legal?",
		lblObservaciones:"Comentarios:",
		aSendInfo:"Enviar información",
		//Initial Translations
		reporting:"Reportar",
		sinister:"Siniestro",
		theft:"Robo",
		register:"Registrar",
		noPolicies:"No tienes pólizas registradas",
		reportedSuccesfully:"Reportado exitosamente.",
		//photos translations
		pictures:"Fotos",
		takePicture:"Tomar Foto",
		//Sinister List Translations		
		thefts:"Robos",
		//Thefts List Translations
		h3TheftsList:"Listado de robos",
		//Policies Alerts Translations
		h3PoliciesAlerts:"Alertas de pólizas",
		pExpiredPolicy:"Pólizas por caducar o caducadas",
		expiredPolicy:"Póliza caducada: ",
		//left panel Translations
		sinisters:"Siniestros",
		//Sign up Translations
		h2SignUp:"Registrarse",
		txtName:"Nombre",
		txtPais:"País",
		txtCiudad:"Ciudad",
		txtEmail:"E-Mail",
		txtPass:"Contraseña",
		txtPassConfirm:"Confirmar contraseña",
		txtCelular:"Celular",
		aSignIn:"Iniciar Sesión",
		aHelp:"Ayuda",
		logInHelpText:"Introduzca su E-mail y contraseña",		
		report:"Reporte de",
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
		deleteItem:"Eliminar",
		option:"Opción",
		date:"Fecha",
		chooseAction:"Seleccione una acción",
		sendReport:"Enviar reporte",
		details:"Detalles",
		recordLimit:"Limite máximo de registros",
		
		model:"Modelo",
		dateExp:"Fecha Exp",
		expirationDate:"Fecha de Expiración",
		vehicles:"Vehículos",
		category:"Categoria",
		records:"Historial",
		options:"Opciones",
		//User
		user:"Usuario",
		licenseNumber:"Número Licencia",
		medicalInfo:"Datos médicos",
		birthdate:"Fecha de Nacimiento",
		//MMI/SGMM
		MMI:"SGMM",
		certificate:"Certificado",
		institution:"Institución",
		//report
		refresh:"Actualizar",
		map:"Mapa",
		reportAddress:"Dirección",
		//options
		notifications:"Notificaciones",
		about:"Acerca de",
		userguide:"Vista guiada",
		logout:"Cerrar Sesión",
};

function setSpanish(){
	setDefaultSpanish();
	setSpanishProfile();
	setSpanishShowPolicies();
	 setSpanishMedicalData();		
	 setSpanishMechanicData();
	 setSpanishAddPolicy();
	 setSpanishSinisters();
	 setSpanishReportSinisterDet();

	 setSpanishLeftPanel();
	 setSpanishSingUp();
	 setSpanishLogIn();
	 setSpanishSinisterPopUp();
	 setSpanishContacts();
	 setSpanishOptions();
} 

function setEnglish(){		
	setDefaultEnglish();
	setEnglishProfile();
	setEnglishShowPolicies();
	 setEnglishMedicalData();
	 setEnglishMechanicData();
	 setEnglishAddPolicy();
	 setEnglishSinisters();
	 setEnglishReportSinisterDet();
	 
	 setEnglishLeftPanel();
	 setEnglishSingUp();
	 setEnglishLogIn();
	 setEnglishSinisterPopUp();
	 setEnglishContacts();	
	 setEnglishOptions();
}

//Spanish Section

function setSpanishProfile(){		
	Messages.lblProfileName = "Nombre";
	Messages.fullname = "Nombre completo";
	Messages.surnames = "Apellidos";
	Messages.lblCellPhone = "Celular";
	Messages.profile = "Perfil";	
	Messages.h1ConfirmCity = "Confirmar?";
	//
	Messages.user="Usuario";
	Messages.licenseNumber="Número Licencia";
	Messages.medicalInfo="Datos médicos";
	//MMI/SGMM
	Messages.MMI="SGMM";
	Messages.certificate="Certificado";
	Messages.institution="Institución";
	Messages.birthdate="Fecha de Nacimiento";
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
}

function setSpanishMedicalData(){
	Messages.IMSSNum = "Numero IMSS";
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
	Messages.brand = "Marca";
	Messages.plates = "Placas";
	Messages.series = "Serie";
	Messages.lblVehicleType = "Tipo de Vehículo";
	Messages.subbrand = "SubMarca";
	Messages.color = "Color";
	Messages.picture = "Fotografía";
	Messages.usualDriver = "Conductor habitual"; 
	Messages.h1ConfirmMark = "Confirmar?";	
	Messages.vehicles="Vehículos";
	Messages.category="Categoria";	
	Messages.insuranceData="Datos Aseguradora";
}

function setSpanishSinisters(){
	Messages.h3ReportIncident = "Reportar incidente";
	Messages.aActualizeLocation = "Actualizar ubicación";
	Messages.opSelectCar = "Seleccione su auto";
	Messages.aRepSinister = "Rep. Siniestro";
	Messages.aRepTheft="Rep. Robo";
	Messages.alertLocation="Su ubicación no puede ser leída.";
	Messages.selectAuto="Debe seleccionar el automóvil siniestrado.";		
	
	Messages.reportName="Reporte";
	
	Messages.thefts = "Robos";
	Messages.date = "Fecha";
	Messages.report = "Reporte de:";
	//initial 
	Messages.sinister = "Siniestro";
	Messages.reporting = "Reportar";
	Messages.theft = "Robo";
	Messages.register = "Registrar";
	Messages.noPolicies="No tienes pólizas registradas";
	Messages.reportedSuccesfully="Reportado exitosamente.";	
	//photos
	Messages.takePicture = "Tomar foto";
	Messages.pictures = "Fotos";
}

function setSpanishReportSinisterDet(){
	
	Messages.lblflipAmbulancia = "Requiere asistencia medica?";		
	Messages.lblflipLegal="Requiere asistencia legal?";		
	Messages.lblObservaciones="Comentarios:";		
	Messages.aSendInfo="Enviar información";	
	Messages.refresh="Actualizar";
	Messages.map="Mapa";
	Messages.reportAddress="Dirección";
}	

function setSpanishLeftPanel(){
	Messages.sinisters = "Siniestros";
}

function setSpanishSingUp(){
	Messages.h2SignUp = "Registrarse";
	Messages.txtName = "Nombre";
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
	Messages.placeAddress="Dirección completa";
	Messages.year="Año";
	Messages.city="Ciudad";
	Messages.enter="Ingrese";
	Messages.minimun="Mínimo";
	Messages.characters="Caracteres";
	Messages.search="Buscar";	
	Messages.deleteItem="Eliminar";
	Messages.option="Opción";
	Messages.date="Fecha";
	Messages.chooseAction="Seleccione una acción";
	Messages.details="Detalles";
	Messages.sendReport="Enviar reporte";
	Messages.model="Modelo";
	Messages.dateExp="Fecha Exp";
	Messages.expirationDate="Fecha de Expiración";
	Messages.recordLimit="Limite máximo de registros";
	Messages.records="Historial";
	Messages.options="Opciones";
}

function setSpanishContacts(){
	Messages.contact = "Contacto";
	Messages.contacts = "Contactos";
}

function setSpanishOptions(){
	Messages.notifications="Notificaciones";
	Messages.about="Acerca de";
	Messages.userguide="Vista guiada";
	Messages.logout="Cerrar Sesión";
}

//English Section

function setEnglishProfile(){		
	Messages.lblProfileName = "First Name";
	Messages.fullname = "Full Name";
	Messages.surnames = "Last Name";
	Messages.lblCellPhone = "Cell Phone";
	Messages.profile = "Profile";	
	Messages.h1ConfirmCity = "Confirm?";	
	Messages.user="User";
	Messages.licenseNumber="License Number";
	Messages.medicalInfo="Medical Info";
	Messages.birthdate="Birthdate";
	//MMI/SGMM
	Messages.MMI="Major Medical Insurance";
	Messages.certificate="Certificate";
	Messages.institution="Institution";
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
	Messages.brand = "Brand";
	Messages.plates = "Plates";
	Messages.series = "Series";
	Messages.lblVehicleType = "Vehicle Type";
	Messages.subbrand = "SubBrand";
	Messages.color = "Color";
	Messages.picture = "Picture";
	Messages.usualDriver = "Usual driver";
	Messages.h1ConfirmMark = "Confirm?";
	Messages.vehicles = "Vehicles"; 
	Messages.category="Category";
	Messages.insuranceData="Insurance data";
	
}	

function setEnglishSinisters(){
	Messages.h3ReportIncident = "Report incident";
	Messages.aActualizeLocation = "Actualize location";
	Messages.opSelectCar = "Select your car";
	Messages.aRepSinister = "Rep. Sinister";
	Messages.aRepTheft="Rep. Theft";
	Messages.alertLocation="Your location can not be readed.";
	Messages.selectAuto="You must select the wrecked car.";	
	
	Messages.reportName="Report";
		
	Messages.thefts = "Thefts";
	Messages.date = "Date";
	Messages.report = "Report: ";
	//initial
	Messages.sinister = "Sinister";
	Messages.reporting = "Report";
	Messages.theft = "Theft";
	Messages.register = "Register";
	Messages.noPolicies = "You don't have registered policies";
	Messages.reportedSuccesfully="Successfully reported";	
	//photos
	Messages.takePicture = "Take picture";
	Messages.pictures = "Pictures";
}

function setEnglishReportSinisterDet(){
	
	Messages.lblflipAmbulancia = "Medical assistance is required?";		
	Messages.lblflipLegal="Legal assistance is required?";		
	Messages.lblObservaciones="Comments:";		
	Messages.aSendInfo="Send Info";
	Messages.refresh="Refresh";
	Messages.map="Map";
	Messages.reportAddress="Address";
}

function setEnglishLeftPanel(){
	Messages.sinisters = "Sinisters";
}

function setEnglishSingUp(){
	Messages.h2SignUp = "Sign Up";
	Messages.txtName = "Name";
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
	Messages.deleteItem="Delete";
	Messages.option="Option";
	Messages.date="Date";
	Messages.chooseAction="Select an action";
	Messages.details="Details";
	Messages.sendReport="Send report";
	Messages.model="Model";
	Messages.dateExp="Expiration";
	Messages.expirationDate="Expiration date";
	Messages.recordLimit="Can not register more than 5 records";
	Messages.records="Records";
	Messages.options="Options";
}

function setEnglishContacts(){
	Messages.contact = "Contact";
	Messages.contacts = "Contacts";
}
function setEnglishOptions(){
	Messages.notifications="Notifications";
	Messages.about="About";
	Messages.userguide="User Guide";
	Messages.logout="Log out";
}