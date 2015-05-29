function loadSinisterList(){
	var oJStore = new clsJsonStoreHelper();
	oJStore.collectionName = "reports";
	oJStore.fnSuccess = function(){
		showLocalReports();
	};
	oJStore.fnFail = function(){
		showLocalReports();
	};
	oJStore.getFromServer("sinisters", "getSinisters");
}

function showLocalReports(){
	var oJStore = new clsJsonStoreHelper();
	oJStore.collectionName = "reports";
	oJStore.options = {};
	oJStore.document = {key:"type", operator:"equal", value:"sinister"};
	oJStore.fnSuccess = function(result){
		$("#ulSinisters").html('');
		$(result).each(function(idx, item){
			var oJSAuto = new clsJsonStoreHelper();
			oJSAuto.collectionName = "PolicyVehicle";
			oJSAuto.options = {};
			oJSAuto.document = {};
			oJSAuto.id = item.json.idPolicy;
			oJSAuto.fnSuccess = function(resultAuto){
				$("#ulSinisters").append(	"<li item='" + (item.json.status == 0 ? item._id : "0") + "'>" +
												"<a href=\"#\" onclick=\"showDetails('sinister', " + item._id + ", " + resultAuto[0]._id + ");\">" +
													"<img src=\"" + resultAuto[0].json.carPicture + "\" height=\"100%\" width=\"100%\">" +
													"<h2><span><img style=\"width:10px;height:10px;\" src=\"images/general/" + (item.json.status == 0 ? "red" : item.json.status == 1 ? "yellow" : item.json.status == 2 ? "green" : "gray") + "_dot.png\"/></span>  " + resultAuto[0].json.Serie + "</h2>" +
													"<p><span dat=\"listDate\">Date: </span> " + item.json.date + " |<span rep=\"sinister\"> Report: </span> " + item._id + "</p>" +
												"</a>" + 
											"</li>");
				$('#ulSinisters').listview('refresh').trigger('create');
			};
			oJSAuto.fnFail = function(errorAuto){
				
			};
			oJSAuto.get();
		});
	};
	oJStore.fnFail = function(error){
		navigator.notification.alert(
		'Error al cargar listado de siniestros.',
		function onSuccess() {
		}, "Error");
	};
	oJStore.get();
}

function loadTheftList(){
	var oJStore = new clsJsonStoreHelper();
	oJStore.collectionName = "reports";
	oJStore.options = {};
	oJStore.document = {key:"type", operator:"equal", value:"theft"};
	oJStore.fnSuccess = function(result){
		$("#ulThefts").html('');
		$(result).each(function(idx, item){
			var oJSAuto = new clsJsonStoreHelper();
			oJSAuto.collectionName = "PolicyVehicle";
			oJSAuto.options = {};
			oJSAuto.document = {};
			oJSAuto.id = item.json.idPolicy;
			oJSAuto.fnSuccess = function (resultAuto){
				$("#ulThefts").append(	"<li auto='" + resultAuto[0]._id + "' item='" + (item.json.status == 0 ? item._id : "0") + "'>" +
											"<a href=\"#\" onclick=\"showDetails('theft', " + item._id + ", " + resultAuto[0]._id + ");\">" +
												"<img src=\"" + resultAuto[0].json.carPicture + "\" height=\"100%\" width=\"100%\">" +
												"<h2><span><img style=\"width:10px;height:10px;\" src=\"images/general/" + (item.json.status == 0 ? "red" : item.json.status == 1 ? "yellow" : item.json.status == 2 ? "green" : "gray") + "_dot.png\"/></span>  " + resultAuto[0].json.Serie + "</h2>" +
												"<p><span dat=\"listDate\">Date: </span> " + item.json.date + " |<span rep=\"sinister\"> Report: </span> " + item._id + "</p>" +
											"</a>" + 
										"</li>");
				$('#ulThefts').listview('refresh').trigger('create');
			};
			oJSAuto.fnFail = function (errorAuto){
				navigator.notification.alert(
				'Error al obtener datos del vehiculo.',
				function onSuccess() {
				}, "Error");
			};
			oJSAuto.get();
		});
	};
	oJStore.fnFail = function(error){
		navigator.notification.alert(
		'Error al cargar listado de siniestros.',
		function onSuccess() {
		}, "Error");
	};
	oJStore.get();
}
function reSendReport(idReport){
	var oJS = new clsJsonStoreHelper();
	oJS.collectionName = "reports";
	oJS.fnSuccess = function(){
		navigator.notification.alert(
				"Reportado con exito",
				function onSuccess() {
					oJS.fnSuccess = function(){
						loadTheftList();
						loadSinisterList();
					};
					oJS.fnFail = function(){
						
					};
					oJS.getFromServer("sinisters", "getSinisters");
					parent.history.back();
				}
			);
		return true;
	};
	oJS.fnFail = function(){
		navigator.notification.alert(
		"Error al reportar, intentelo de nuevo.",
		function onSuccess() {
			parent.history.back();
		},
		"Error");
	};
	oJS.saveToServer("sinisters", "saveSinisters", idReport);
}
function showDetails(pType, pReportId, pAutoId){
	var oJS = new clsJsonStoreHelper();
	oJS.collectionName = "reports";
	oJS.id = pReportId;
	oJS.fnSuccess = function(report){
		$("#hidConsLat").val(report[0].json.location.lat);
		$("#hidConsLng").val(report[0].json.location.lng);
		switch(pType){
		case "sinister":
			$("#divConsExtras").show();
			//$("#hidConsLegalAsis").val(report[0].json.extras.legalAssistance ? "Si" : "No");
			//$("#hidConsMedAsis").val(report[0].json.extras.medicalAssistance ? "Si" : "No");
			//$("#hidConsComentarios").val(report[0].json.extras.comments);
			$("#hidConsGravedad").val(report[0].json.extras.severity);
			break;
		case "theft":
			$("#divConsExtras").hide();
			break;
		}
		location.href = "#consultSinister";
	};
	oJS.fnFail = function(error){
		navigator.notification.alert(
		'Error al obtener los datos del siniestro.',
		function onSuccess() {
			parent.history.back();
		}, "Error");
	};
	oJS.get();
	
	oJS.collectionName = "PolicyVehicle";
	oJS.id = pAutoId;
	oJS.fnSuccess = function(vehicle){
		$("#hidConsImgAuto").val(vehicle[0].json.carPicture);
		$("#hidConsMarca").val(vehicle[0].json.MarkName);
		$("#hidConsSubmarca").val(vehicle[0].json.SubMark);
		$("#hidConsModelo").val(vehicle[0].json.Model);
		$("#hidConsPlacas").val(vehicle[0].json.Plates);
		$("#hidConsColor").val(vehicle[0].json.Color);
		$("#hidConsPoliza").val(vehicle[0].json.PolicyNo);
		$("#hidConsExp").val(vehicle[0].json.PolicyDate);
		$("#hidConsAseguradora").val(vehicle[0].json.InsuranceName);
		location.href = "#consultSinister";
	};
	oJS.fnFail = function(error){
		navigator.notification.alert(
		'Error al obtener los datos del vehiculo.',
		function onSuccess() {
			parent.history.back();
		}, "Error");
	};
	oJS.get();
}

