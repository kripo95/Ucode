mapboxgl.accessToken = 'pk.eyJ1Ijoia3JpcG9rOTUiLCJhIjoiY2tpMGtjbmUzMGg4dzJ5bXNqajdoY3l1MyJ9.bMTatW7MOc0Gtd60OslTYw';
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [165.973, -50.604167],
    zoom: 13
});

var marker = new mapboxgl.Marker({
    color: 'blue',
    draggable: true,
}).setLngLat(map.getCenter()).addTo(map);


function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('touchmove', onDragEnd);




//Search
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: {
        color: 'blue',
        draggable: true,
    },
    mapboxgl: mapboxgl
});
map.addControl(geocoder);
map.on('movestart', function (){
    marker.remove();
})


//UserLocal
var userLocal = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,

})
map.addControl(userLocal);

userLocal.on('trackuserlocationend', function() {
   marker = new mapboxgl.Marker({
        draggable: true,
       color: 'blue',
    }).setLngLat(map.getCenter()).addTo(map);
    marker.on('dragend', onDragEnd);
});
// userLocal.on('trackuserlocationstart', function() {
//     marker.remove();
// });



//MAP CONTROL
map.addControl(new mapboxgl.NavigationControl());