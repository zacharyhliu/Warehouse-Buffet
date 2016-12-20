function initMap() {
	var uluru = {lat: 37.5438515, lng: -122.2716836};
	// construct a map oject in the div element
	var map = new google.maps.Map(document.getElementById('google-map'), {
		zoom: 4,
		center: uluru
	});
	// This code is to put a marker on the map
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}