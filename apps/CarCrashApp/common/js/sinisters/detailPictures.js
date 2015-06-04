function takePicture()
{
	navigator.camera.getPicture(
	        function(data) {
	        	var div = "<div class='imgPic'>";
	        	var img = "<img ident=\"pics\" src=\"" + data + "\" width=\"100%\" height=\"100%\" /></div>";
	            $('.photoContainer').append(div + img);
	        },
	        function(e) {
	            console.log("Error getting picture: " + e);
	        },
	        { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType : navigator.camera.PictureSourceType.CAMERA, saveToPhotoAlbum: true});
}

function enviarExtras()
{
	//var iPhotos = $('#photos > div').length - 1;
	//var ambulancia = $('#flipAmbulancia').val();
	//var legal = $('#flipLegal').val();
	//var observaciones = $('#txtObservaciones').val();
	
	//oCurrentSinister.data.extras.medicalAssistance = ambulancia == 'on' ? true : false;
	//oCurrentSinister.data.extras.legalAssistance = legal == 'on' ? true : false;
	//oCurrentSinister.data.extras.comments = observaciones;
	//oCurrentSinister.data.extras.severity = $("#sldGravedad").val();
	
	$('img[ident="pics"]').each(function(idx,item){
		var imgSrc = $(item).attr("src");
		oCurrentSinister.data.extras.pictures.push({url:imgSrc});
	});
	
	oCurrentSinister.fnSuccess = function(){
		var oJS = new clsJsonStoreHelper();
		oJS.collectionName = 'reports';
		oJS.fnSuccess = function(response){
			//save server success
			oJS.fnSuccess = function(response){
				//get server success
				loadSinisterList();
			};
			oJS.fnFail = function(error){
				navigator.notification.alert(
				'Error al actualizar status de reportes.',
				function onSuccess() {
				}, "Error");
			};
			oJS.getFromServer("sinisters", "getSinisters");
			navigator.notification.alert(
					Messages.reportedSuccesfully,
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
		
		location.href="#sinisterList";
	};
	oCurrentSinister.fnFail = function(){
		navigator.notification.alert(
		'Error al generar el reporte, intentelo de nuevo.',
		function onSuccess() {
		}, "Error");
	};
	oCurrentSinister.save();
}
function clearSinDetailsScreen(){
	$('.photoContainer').html("");
}