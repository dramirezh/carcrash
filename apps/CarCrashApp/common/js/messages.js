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
		myAccName: "Mi cuenta", 
		enterDetails:"Introduzca sus datos.",
		lblProfileName:"Nombre",
		lblFirstName:"Ap. Paterno",
		lblLastName:"Ap. Materno",
		lblCellPhone:"Celular",
		lblCityRes:"Ciudad de Residencia",
		lblCompany:"Observaciones",
		h1ConfirmCity:"Confirmar?",
		h3SelectedCity:"Ciudad seleccionada:",
		h3RecordsList:"Registros.", 
		//Show policies translations
		h1ConfirmPolicy:"Eliminar?",
		h3DeletePolicy:"Desea eliminar el registro seleccionado?",
		aAddPolicy:"Nuevo",
		aDeletePolicy:"Eliminar",
		spnExpiration:"Expiración: ",
		h3SelectPolicyOp:"Seleccione una opción ",
		aPolicyDetails:"Detalles",
		PoliciesLimitNo:"Solo se permite guardar un máximo de 10 registros.",
		h1PolicyDetail:"Registros",
		aSUdata:"Guardar/Actualizar",
		aKeepEd:"Continuar editando",
		aRPoliza:"Ir a registros",	
		aEmergencies:"Emergencias",
		aInsurances:"Aseguradoras",
		aContactsList:"Lista de contactos",
		h3AddContacts:"Contacto",
		opNoneMark:"Marca",
		//Medical data translations
		lblIMSSNum:"No. IMSS",	
		lblBloodType:"Tipo de sangre",	
		lblAllergies:"Alergias",	
		lblConditions:"Padecimientos",
		h3MedicalData:"Datos Medicos",
		opNoneBType:"Seleccione tipo de sangre",
		//Mechanic data translations
		h3MechanicDetails:"Introduzca los datos de un mecánico automotriz.",
		lblMechanicName:"Nombre",
		lblMechanicFirstName:"Ap. Paterno",
		lblMechanicLastName:"Ap. Materno",
		lblMechanicCellPhone:"Celular",
		lblMechanicAddress:"Domicilio",
		//Add policy translations
		h3AddPolicies:"Póliza.",
		lblPolicyNum:"No. Póliza",
		lblPolicyExpiration:"Expiración de la Póliza",
		opNoneInsurance:"Aseguradora",
		lblInsurance:"Aseguradora",
		placeholderDateFormat:"dd/mm/aaaa",
		txtAseg:"Siguiente",
		aRecordsList:"Listado de Registros",
		pContact3:"Agente de Seguros",
		//Add Vehicle translations
		h3Vehicle: "Vehículo",
		lblPlates:"Placa",
		lblSeries:"Serie",
		lblVehicleType:"Tipo de Vehículo",
		lblMark:"Marca",
		lblSubMark:"SubMarca",
		lblModel:"Año",
		lblColor:"Color",
		aTakeCarPict:"Tomar Foto",
		lblOwnerName:"Nombre del Titular",
		h1ConfirmMark:"Confirmar?",
		pMark:"Marca:",
		pSubMark:"SubMarca:",
		h3SelectedMark:"Detalles de selección:",
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
		streetNumber:"No. Calle",
		street:"Calle",
		state:"Estado",
		postalCode:"Código postal",
		country:"País",
		placeAddress:"Introduzca su dirección completa",
		year:"Año",
};

function setSpanish(){
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
	Messages.streetNumber="No. Calle";
	Messages.street="Calle";
	Messages.state="Estado";
	Messages.postalCode="Código postal";
	Messages.country="País";
	Messages.placeAddress="Introduzca su dirección completa";
	Messages.year="Año";
	
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
} 

function setEnglish(){	
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
	Messages.placeAddress="Enter your full address";
	Messages.year="Year";
	
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
}

//Spanish Section

function setSpanishProfile(){
	Messages.myAccName = "Mi cuenta";
	Messages.enterDetails = "Introduzca sus datos.";
	Messages.lblProfileName = "Nombre";
	Messages.lblFirstName = "Ap. Paterno";
	Messages.lblLastName = "Ap. Materno";
	Messages.lblCellPhone = "Celular";
	Messages.lblCityRes = "Ciudad de Residencia";
	Messages.lblCompany = "Observaciones";
	Messages.h1ConfirmCity = "Confirmar?";
	Messages.h3SelectedCity = "Ciudad seleccionada:";
}
function setSpanishShowPolicies(){
	Messages.h3RecordsList = "Registros.";
	Messages.h1ConfirmPolicy = "Eliminar?";
	Messages.h3DeletePolicy = "Desea eliminar el registro seleccionado?";
	Messages.aAddPolicy = "Nuevo";
	Messages.aDeletePolicy = "Eliminar"; 
	Messages.spnExpiration = "Expiración: ";
	Messages.h3SelectPolicyOp = "Seleccione una opción "; 
	Messages.aPolicyDetails = "Detalles";
	Messages.PoliciesLimitNo = "Solo se permite guardar un máximo de 10 registros.";
	Messages.h1PolicyDetail="Registros";
	Messages.aSUdata="Guardar/Actualizar";
	Messages.aKeepEd="Continuar editando";
	Messages.aRPoliza="Ir a registros";		
	Messages.pContact3="Agente de Seguros";
	Messages.aEmergencies="Emergencias";
	Messages.aInsurances="Aseguradoras";
	Messages.aContactsList="Lista de contactos";
	Messages.h3AddContacts="Contacto"; 
	Messages.opNoneMark="Marca"; 		
}

function setSpanishMedicalData(){
	Messages.lblIMSSNum = "No. IMSS";
	Messages.lblBloodType = "Tipo de sangre";
	Messages.lblAllergies = "Alergias";
	Messages.lblConditions = "Padecimientos";
	Messages.h3MedicalData="Datos Medicos";
	Messages.opNoneBType="Seleccione tipo de sangre";
}

function setSpanishMechanicData(){
	Messages.h3MechanicDetails = "Introduzca los datos de un mecánico automotriz.";
	Messages.lblMechanicName = "Nombre";
	Messages.lblMechanicFirstName = "Ap. Paterno";
	Messages.lblMechanicLastName = "Ap. Materno";
	Messages.lblMechanicCellPhone="Celular";
	Messages.lblMechanicAddress="Domicilio";
}

function setSpanishAddPolicy(){
	Messages.h3AddPolicies = "Póliza";
	Messages.lblPolicyNum = "No. Póliza";
	Messages.lblPolicyExpiration = "Expiración de la Póliza";
	Messages.opNoneInsurance = "Aseguradora";
	Messages.lblInsurance = "Aseguradora";	
	Messages.txtAseg = "Siguiente";
	Messages.aRecordsList = "Listado de registros";
	// Vehicle Seccion
	Messages.h3Vehicle = "Vehículo";
	Messages.lblPlates = "Placas";
	Messages.lblSeries = "Serie";
	Messages.lblVehicleType = "Tipo de Vehículo";
	Messages.lblMark = "Marca";
	Messages.lblSubMark = "SubMarca";
	Messages.lblModel = "Año";
	Messages.lblColor = "Color";
	Messages.aTakeCarPict = "Tomar Foto";
	Messages.lblOwnerName = "Nombre del Titular"; 
	Messages.h1ConfirmMark = "Confirmar?";
	Messages.pMark = "Marca:";
	Messages.pSubMark = "SubMarca:";
	Messages.h3SelectedMark = "Detalles de selección:";		
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

//English Section

function setEnglishProfile(){
	Messages.myAccName = "My Account";
	Messages.enterDetails = "Enter your details.";
	Messages.lblProfileName = "First Name";
	Messages.lblFirstName = "Last Name";
	Messages.lblLastName = "Second Last Name";
	Messages.lblCellPhone = "Cell Phone";
	Messages.lblCityRes = "City of residence";
	Messages.lblCompany = "Observations";
	Messages.h1ConfirmCity = "Confirm?";
	Messages.h3SelectedCity = "Selected city:";
}

function setEnglishShowPolicies(){
	Messages.h3RecordsList = "List of records.";
	Messages.h1ConfirmPolicy = "Delete?";
	Messages.h3DeletePolicy = "Delete selected record?";
	Messages.aAddPolicy = "New";
	Messages.aDeletePolicy = "Delete";
	Messages.spnExpiration = "Expiration: ";
	Messages.h3SelectPolicyOp = "Select an option: "; 
	Messages.aPolicyDetails = "Details";
	Messages.PoliciesLimitNo = "You only can save up to 10 records";
	Messages.h1PolicyDetail="Records";
	Messages.aSUdata="Save/Update";
	Messages.aKeepEd="Continue editing";
	Messages.aRPoliza="Go to records";	
	Messages.pContact3="Insurance agent";
	Messages.aEmergencies="Emergencies";
	Messages.aInsurances="Insurances";
	Messages.aContactsList="Contact list";
	Messages.h3AddContacts="Contact"; 
	Messages.opNoneMark="Brand";
}

function setEnglishMedicalData(){
	Messages.lblIMSSNum = "IMSS Number";
	Messages.lblBloodType = "Blood type";
	Messages.lblAllergies = "Allergies";
	Messages.lblConditions = "Conditions";
	Messages.h3MedicalData="Medical Data";
	Messages.opNoneBType="Select blood type";
}

function setEnglishMechanicData(){
	Messages.h3MechanicDetails = "Enter the details of an auto mechanic.";
	Messages.lblMechanicName = "Name";
	Messages.lblMechanicFirstName = "First Name";
	Messages.lblMechanicLastName = "Last Name";
	Messages.lblMechanicCellPhone="Cell Phone";
	Messages.lblMechanicAddress="Address";
}

function setEnglishAddPolicy(){
	Messages.h3AddPolicies = "Policy";
	Messages.lblPolicyNum = "Policy Number";
	Messages.lblPolicyExpiration = "Policy Expiration";
	Messages.opNoneInsurance = "Insurance";
	Messages.lblInsurance = "Insurance";	
	Messages.txtAseg = "Next"; 
	Messages.aRecordsList = "List of records";
	// Vehicle Seccion
	Messages.h3Vehicle = "Vehicle";
	Messages.lblPlates = "Plates";
	Messages.lblSeries = "Series";
	Messages.lblVehicleType = "Vehicle Type";
	Messages.lblMark = "Mark";
	Messages.lblSubMark = "SubMark";
	Messages.lblModel = "Year";
	Messages.lblColor = "Color";
	Messages.aTakeCarPict = "Take picture";
	Messages.lblOwnerName = "Owner Name";
	Messages.h1ConfirmMark = "Confirma?";
	Messages.pMark = "Mark:";
	Messages.pSubMark = "SubMark:";
	Messages.h3SelectedMark = "Selection Details:";
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
