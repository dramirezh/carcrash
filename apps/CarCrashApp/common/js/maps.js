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
      zoom: 16,
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

function codeLatLng(pLat, pLng, pDiv) {
	  var geocoder = new google.maps.Geocoder();
	  var myLatlng = new google.maps.LatLng(pLat, pLng);
	  var mapOptions = {
		      zoom: 16,
		      center: myLatlng,
		      mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
	  var map = new google.maps.Map(document.getElementById(pDiv), mapOptions);
	  
	  var lat = parseFloat(pLat);
	  var lng = parseFloat(pLng);
	  var latlng = new google.maps.LatLng(lat, lng);
	  geocoder.geocode({'latLng': latlng}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      if (results[1]) {
	        //map.setZoom(11);
	        marker = new google.maps.Marker({
	            position: latlng,
	            map: map
	        });
	        //infowindow.setContent(results[1].formatted_address);
	        //infowindow.open(map, marker);
	        $('#lblAddressSin').text(results[1].formatted_address);
	        $('#lblLat').text(lat);
	        $('#lblLng').text(lng);
	      } else {
	        alert('No results found');
	      }
	    } else {
	      alert('Geocoder failed due to: ' + status);
	    }
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
    codeLatLng(lat, lng, 'map-canvas');
    
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