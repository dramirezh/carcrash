function loadSinisterData(){
	$("#imgConsAuto").attr("src",$("#hidConsImgAuto").val());
	
	$("#tdConsMarca").text($("#hidConsMarca").val());
	$("#tdConsSubMarca").text($("#hidConsSubmarca").val());
	$("#tdConsModelo").text($("#hidConsModelo").val());
	$("#tdConsPlacas").text($("#hidConsPlacas").val());
	$("#tdConsColor").text($("#hidConsColor").val());
	$("#tdConsPoliza").text($("#hidConsPoliza").val());
	$("#tdConsExp").text($("#hidConsExp").val());
	$("#tdConsAseguradora").text($("#hidConsAseguradora").val());
	
	//$("#tdConsGravedad").text($("#hidConsGravedad").val());
	$("#tdConsLegalAsis").text($("#hidConsLegalAsis").val());
	$("#tdConsMedAsis").text($("#hidConsMedAsis").val());
	$("#tdConsCraneAsis").text($("#hidConsCrane").val());
	
	setMap(Number($("#hidConsLat").val()), Number($("#hidConsLng").val()), "mapConsultSinister");	
}
function getLocation() {	
	/*var mapHeight = $(document).height() / 2;
	$('#map-canvas').css('height', mapHeight + 'px');*/
    navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo, { enableHighAccuracy: true });
}
function onSuccessGeo(position) {
	currentLat = position.coords.latitude;
	currentLng = position.coords.longitude;
    codeLatLng(currentLat, currentLng);
    //setMap(currentLat, currentLng,"map-canvas");
}
function onErrorGeo(error) {
	var msge = "";
	switch(error.code)
	{
		case 1:
			msge = 'El usuario no aceptó la petición de geolocalización.';
			break;
		
		case 2:
			msge = 'Ubicación no disponible.';
			break;
			
		case 3:
			msge = 'Timeout obteniendo la ubicación.';
			break;
	}
	navigator.notification.alert(
	msge,
	function onSuccess() {
	}, "Error");
}