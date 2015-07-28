function loadVehiclesList(){
	var oJStore = new clsJsonStoreHelper();
	oJStore.collectionName = "PolicyVehicle";
	oJStore.options = {};
	oJStore.document = {};
	oJStore.fnSuccess = function(result){
		$("#selectAuto option[value!=0]").remove();
		$(result).each(function(idx, item){
			$("#selectAuto").append('<option value="' + item._id + '">' + item.json.Serie  + '</option>');
		});
		$('#selectAuto').value = "0";
		$( "#selectAuto" ).selectmenu( "refresh", true );
		
		/*if(result.length > 0){
			$('#noPol').css('display','none');
			$('#sliderInit').css('display','block');
			
			var count = $("#sliderInit div div > div[a='si']").length;
			
			for(var i = 0; count > i; i++){
				$('#sliderInit').slick('slickRemove',0);
			}
			$(result).each(function(idx, item){
				$(".slider-init").slick('slickAdd','<div a="si" style="text-align:center; padding:0 1% 0 1%; max-height:33%;"><img src="' + item.json.carPicture + '" width="100%;" height="auto" /><label style="" number="' + item._id + '">' + item.json.Serie + '</label></div>');
			});
		}else{
			$('#noPol').css('display','block');
			$('#sliderInit').css('display','none');
		}*/
	};
	oJStore.fnFail = function(error){
		navigator.notification.alert(
		'Error al obtener los autos registrados.',
		function onSuccess() {
		}, "Error");
	};
	oJStore.get();
}
function reportar()
{
	if($('#fsTipoRep :radio:checked').val() == "on"){
		sPageNav = "#sinDetails";
		$('#titleReport').text('R.Sinister');
	}else{
		sPageNav = "#theftsList";
		$('#titleReport').text('R.Theft');
	}
	location.href = "#report";
	/*navigator.notification.confirm(
	// Shows a customizable confirmation dialog box.

	// Confirm dialog message (String)
	"Esta seguro que desea levantar un reporte? Esta accion enviara su ubicacion y datos a su aseguradora.",
	// Callback to invoke with index of button pressed (1, 2 or 3)
	function onConfirm(result) {
		if(result == 1){*/
			//sendIncidenteInfo();
		/*}
	},
	"Reportar?");*/
}
function sendIncidenteInfo()
{	
	if(currentLat != 0 && currentLng != 0)
	{
		if($('#selectAuto').val() != 0)
		{
			var auto = $('#selectAuto').val();
			
			oCurrentSinister.data.idPolicy = parseInt(auto);
			oCurrentSinister.data.status = 0;
			oCurrentSinister.data.location.lat = currentLat;
			oCurrentSinister.data.location.lng = currentLng;
			oCurrentSinister.data.extras.medicalAssistance = !$('#flipAmbulancia').is(':checked') ? false : true;
			oCurrentSinister.data.extras.legalAssistance =  !$('#flipLegal').is(':checked') ? false : true;
			oCurrentSinister.data.extras.craneService =  !$('#flipCrane').is(':checked') ? false : true;
			
			if(sPageNav == "#sinDetails"){
				oCurrentSinister.data.type = "sinister";
			}else{
				oCurrentSinister.data.type = "theft";
				oCurrentSinister.fnSuccess = function(numadd){
					//save local success
					var oJS = new clsJsonStoreHelper();
					oJS.collectionName = 'reports';
					oJS.fnSuccess = function(response){
						//save server success																		
						oJS.fnSuccess = function(response){
							//get server success
							loadTheftList();
						};
						oJS.fnFail = function(error){
							navigator.notification.alert(
							'Error al actualizar status de reportes.',
							function onSuccess() {
							}, "Error");
						};
						oJS.getFromServer("sinisters", "getSinisters");
						navigator.notification.alert(
						'Reportado',
						function onSuccess() {
						});
						return true;
					};
					oJS.fnFail = function(error){
						navigator.notification.alert(
						'No se pudo conectar al servidor, reintente.',
						function onSuccess() {
						}, "Error");
					};
					oJS.saveToServer("sinisters", "saveSinisters");
				};
				oCurrentSinister.fnFail = function(error){
					navigator.notification.alert(
					'Error al generar el reporte, intentelo de nuevo.',
					function onSuccess() {
					});
				};
				oCurrentSinister.save();
			}
			location.href = sPageNav;
		}
		else
		{
			navigator.notification.alert(
			Messages.selectAuto,
			function onSuccess() {
				//parent.history.back();
			});
		}
	}
	else
	{
		navigator.notification.alert(
		Messages.alertLocation,
		function onSuccess() {
			//parent.history.back();
		});
	}
}