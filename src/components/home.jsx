import React from 'react';
import axios from 'axios';
import { places, GeoCoder, Map, InfoWindow, Marker, GoogleApiWrapper, MapDirections } from 'google-maps-react';

const google = window.google;
const $ = window.$;
let geocoder = new google.maps.Geocoder();
<<<<<<< HEAD
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;

var dest;
var initial;
=======
const GOOGLE_MAPS_APIKEY = 'AIzaSyBU0az33dTdv2Z655ieXC4NVk7Bm_N9d2g';
>>>>>>> af43414a4240c971fe1bff83583c87502028ca07

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      startLat: "",
      startLong: "",
      destLat: "",
      destLong: "",
    };
    this.initializeMap = this.initializeMap.bind(this);
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
  }

  componentDidMount() {
    this.initializeMap();
  }

  initializeMap() {
    function autocompleteStartLocation() {
       dest = document.getElementById('destField');
      var autocomplete = new google.maps.places.Autocomplete(dest);
    }

    function autocompleteDestination() {
       initial = document.getElementById('initField');
      var autocomplete = new google.maps.places.Autocomplete(initial);
    }

    google.maps.event.addDomListener(window, 'load', autocompleteStartLocation);
    google.maps.event.addDomListener(window, 'load', autocompleteDestination);

    // var chicago = new google.maps.LatLng(41.850033, -87.6500523);
    // //for directions
    // var mapOptions = {
    //   zoom:7,
    //   center: chicago
    // }
    // var map = new google.maps.Map(document.getElementsByClassName('map'), mapOptions);
    directionsDisplay.setMap(document.getElementsByClassName('map'));
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    //geocode
        // Geocode the address
        geocoder.geocode({
          'address': dest.value
        }, function (results, status) {
          if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
            //define results
            let destLat = results[0].geometry.location.lat();
            let destLong = results[0].geometry.location.lng();
            //recurse with init
            geocoder.geocode({
              'address': initial.value
            }, function (results, status) {
              if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
                //define results
                let startLat = results[0].geometry.location.lat();
                let startLong = results[0].geometry.location.lng();

                console.log(startLat, startLong, destLat, destLong);

                //here is where we could use the lat/long to get a route
                directionsService.route({
                  origin: {lat: startLat, lng: startLong},
                  destination: {lat: destLat, lng: destLong},
                  travelMode: 'DRIVING'
                }, function(response, status) {
                  if (status === 'OK') {
                    console.log('directions okay', response);
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setMap(document.getElementById('map'));

                  } else {
                    window.alert('Directions request failed due to ' + status);
                  }
                });


                // show an error if it's not
              } else {
                alert("Error with destination field! Please try again and make sure the address is valid!");
                console.log(status);
                console.log(results);
              }
            });
            // show an error if it's not
          } else {
            alert("Error with destination field! Please try again and make sure the address is valid!");
            console.log(status);
            console.log(results);
          }
        });
    //end geocode
  }

  render() {
    return (
      <div>
        <div className="searchpage">
          <label htmlFor="initField">Initial Location</label>
          <input className="searchBar" id="initField" type="text" />
          <label htmlFor="destField">Destination</label>
          <input className="searchBar" id="destField" type="text" />
          <button className="btn btn-default" id="search" onClick={() => {this.calculateAndDisplayRoute(directionsService,directionsDisplay)}}>Check Route!</button>
          <span className="spinner">
            <span className="double-bounce1"></span>
            <span className="double-bounce2"></span>
          </span>
        </div>
        
        <Map
          centerAroundCurrentLocation
          className="map"
          id="map"
          google={google}
          style={{ height: '100%', position: 'relative', width: '100%' }}
<<<<<<< HEAD
          zoom={14}
        />

=======
          zoom={14}>
                    {/*<MapDirections strokeWidth={3} strokeColor="hotpink" apikey={GOOGLE_MAPS_APIKEY}/>*/}
        </Map> 
>>>>>>> af43414a4240c971fe1bff83583c87502028ca07
      </div>

    )
  }
}

export default App;