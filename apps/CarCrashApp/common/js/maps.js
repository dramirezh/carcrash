/*
 * This file contains script to get lattitude and longitude
 * 
 */

var currentLat = 0;
var currentLng = 0;
function setMap(pLat, pLng, pDiv)
{
	var myLatlng = new google.maps.LatLng(pLat, pLng);
    var mapOptions = {
      zoom: 18,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(pDiv), mapOptions);

    var bounds = new google.maps.LatLngBounds();
    bounds.extend(myLatlng);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });
}

//A button click will call this function
function getLocation() {	
	/*var mapHeight = $(document).height() / 2;
	$('#map-canvas').css('height', mapHeight + 'px');*/
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
}

// onSuccess Geolocation
//
function onSuccess(position) {
    //Lat long will be fetched and stored in session variables
    //These variables will be used while storing data in local database
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    currentLat = lat;
    currentLng = lng;
    setMap(lat,lng,'map-canvas');
}
// onError Callback receives a PositionError object
//
function onError(error) {
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