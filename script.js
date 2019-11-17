
//map
var map;
      function initMap(){
       var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 29.0603779, lng: -13.6740699},
          zoom: 10
        });

        //map markers
    var markers = new google.maps.Marker({
     position:{lat:29.1579997, lng:-13.441186},
     map:map
    
});

    var markers = [{
            coords: { lat: 29.1579997, lng: -13.441186 },
            content: '<h1>Jameos del Agua</h1>'
        },
        {
            coords: { lat: 28.9673284, lng: -13.8543114 },
            content: '<h1>La Geria</h1>'
        },
        {
            coords: { lat: 29.0223729, lng: -13.7951816},
            content: '<h1>National Park Timanfaya</h1>'
        },
         {
            coords: { lat: 28.976485, lng:-13.8300289 },
            content: '<h1>Charco Verde: Green Lagoon</h1>'
        },
         {
            coords: { lat: 28.9539064, lng: -13.8357407 },
            content: '<h1>Los Hervideros</h1>'
        },
        {
            coords: { lat: 28.9539064, lng: -13.8357407 },
            content: '<h1>Los Helechos Viewpoint </h1>'
        },
        {
            coords: { lat: 29.08052, lng: -13.4785472},
            content: '<h1>Jardin de Cactus</h1>'
        },
        {
            coords: { lat: 29.00546, lng: -13.7552953 },
            content: '<h1>El Diablo Restaurant</h1>'
        },
    ]

    //loop through markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i])
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: 'http://maps.google.com/mapfiles/kml/pal4/icon46.png'
        });


        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
}


 


      

