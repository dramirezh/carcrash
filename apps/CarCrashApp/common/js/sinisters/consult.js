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