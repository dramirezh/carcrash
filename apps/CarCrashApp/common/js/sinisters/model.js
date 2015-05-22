var sPageNav = "";
var oCurrentSinister = new clsSinister();
function clsSinister(){
	this.data = {
		idPolicy: 0,
		date: (new Date().getFullYear()) + '-' + ((new Date().getMonth()) + 1) + '-' + (new Date().getDate()),
		time: (new Date().getHours()) + ':' + (new Date().getMinutes()) + ':' + (new Date().getSeconds()),
		type: "",
		status: 0,
		location: new clsLocation(),
		extras: new clsReportExtras()
	};
	
	this.save = _saveSinister;
	//this.remove = _removeSinister;
	//this.get = _getSinister;
	
	this.fnSuccess = function(){};
	this.fnFail = function(){};
}

function _saveSinister(){
	var fnSuccess = this.fnSuccess;
	var fnFail = this.fnFail;
	var doc = this.data;

	var oJS = new clsJsonStoreHelper();
	oJS.collectionName = "reports";
	oJS.document = doc;
	oJS.id = 0;
	oJS.fnSuccess = fnSuccess;
	oJS.fnFail = fnFail;
	oJS.save();
}

function clsLocation(){
	this.lat = "";
	this.lng = "";
}

function clsReportExtras(){
		this.pictures = [];
		this.severity = 0;
		/*this.medicalAssistance = false;
		this.legalAssistance = false;
		this.comments = "";*/
}

$(document).on("pageshow", "#sinisterList", function(event){loadSinisterList();});
$(document).on("pageshow", "#theftsList", function(event){loadTheftList();});
$(document).on("pageshow", "#initial", function(event){oCurrentSinister = new clsSinister();loadVehiclesList();});
$(document).on("pageshow", "#consultSinister", function(event){loadSinisterData();});


$(document).on('pagebeforeshow','#sinisterReport',function(e,data){    
	initSinisterPopUpTranslations(); 				  
});	