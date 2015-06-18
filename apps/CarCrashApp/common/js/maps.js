/*
 * This file contains script to get lattitude and longitude
 * 
 */

var currentLat = 0;
var currentLng = 0;
function setMap(pLat, pLng, pDiv)
{
	var lat, lng;
	lat = Number(pLat);
	lng = Number(pLng);
	var map = new GMaps({
		div: ('#' + pDiv),
		lat: lat,
		lng: lng
	});
	var polygon = map.drawCircle({
		  lat: lat,
		  lng: lng,
		  radius:70,
		  strokeColor: '#BBD8E9',
		  strokeOpacity: 1,
		  strokeWeight: 3,
		  fillColor: '#BBD8E9',
		  fillOpacity: 0.6
		});
		map.addMarker({
		  lat: lat,
		  lng: lng,
		  draggable: true,
		  fences: [polygon],
		  outside: function(marker, fence) {
		    alert('This marker has been moved outside of its fence');
		  }
		});
}

function codeLatLng(pLat, pLng) {
	  var geocoder = new google.maps.Geocoder();
	  
	  var lat = parseFloat(pLat);
	  var lng = parseFloat(pLng);
	  var latlng = new google.maps.LatLng(lat, lng);
	  geocoder.geocode({'latLng': latlng}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      if (results[1]) {
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