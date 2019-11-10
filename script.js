var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 29.0603779, lng: -13.6740699},
          zoom: 10
        });
      }

       var marker = new google.maps.Marker({
    position: {Lat:29.1579997  ,Lng:-13.441186  },
    map: map,

  });
}