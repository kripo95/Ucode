mapboxgl.accessToken = 'pk.eyJ1Ijoia3JpcG9rOTUiLCJhIjoiY2tpMGtjbmUzMGg4dzJ5bXNqajdoY3l1MyJ9.bMTatW7MOc0Gtd60OslTYw';
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [165.973, -50.604167],
    zoom: 13
});

var marker = new mapboxgl.Marker({
    draggable: true
}).setLngLat([0, 0])
    .addTo(map);



function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('dragend', onDragEnd);




//Search
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: {
        color: 'orange'
    },
    mapboxgl: mapboxgl
});
map.addControl(geocoder);


//UserLocal
var userLocal = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,

})
map.addControl(userLocal);





//MAP CONTROL
map.addControl(new mapboxgl.NavigationControl());