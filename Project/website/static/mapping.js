let  infoWindow;
let lang,long;


function find(){
    // Try HTML5 geolocation.
    let map=new Map()
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.049999, lng: 	-114.066666 },
        zoom: 15,
      });
      infoWindow = new google.maps.InfoWindow();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const marker = new google.maps.Marker({
            position: pos,
            map,
            draggable: true,
            animation: google.maps.Animation.DROP,
          });
          console.log(long)
          console.log(lang)

          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      
      );

    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function traffic() {
    let map=new Map()
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.049999, lng: 	-114.066666 },
        zoom: 6,
      });
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              lang=position.coords.latitude;
              long=position.coords.longitude
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter());
            }
          
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
     map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: lang, lng: long },
    });
    const trafficLayer = new google.maps.TrafficLayer();
  
    trafficLayer.setMap(map);
  }

function toggle(){
    var container = L.DomUtil.get('map');
      if(container != null){
        container._leaflet_id = null;
      }
    map = L.map('map').setView([51.0447, -114.0719], 12);
      accessToken = 'pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig';
      var on=L.tileLayer('https://api.mapbox.com/styles/v1/k4ukichu/cl0bjqsi500fh15oip5nuz30n/tiles/{z}/{x}/{y}?access_token='+accessToken, {
          attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 18,
          tileSize: 512,
          zoomOffset: -1,
      });
      

var mapbox=L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);;


L.control.layers({
    "Off":mapbox,
    "On":on,
}, null, {
    collapsed: false
}).addTo(map);

  }


function directions(){


}