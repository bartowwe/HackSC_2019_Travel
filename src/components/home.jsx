import React from 'react';
import axios from 'axios';
import { places, GeoCoder, Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import {
  Redirect,
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';



const google = window.google;
const $ = window.$;
let geocoder = new google.maps.Geocoder();

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
    this.checkPrice = this.checkPrice.bind(this);
  }

  componentDidMount() {
    this.initializeMap();
  }

  initializeMap() {
    function autocompleteStartLocation() {
      var dest = document.getElementById('destField');
      var autocomplete = new google.maps.places.Autocomplete(dest);
    }

    function autocompleteDestination() {
      var initial = document.getElementById('initField');
      var autocomplete = new google.maps.places.Autocomplete(initial);
    }

    google.maps.event.addDomListener(window, 'load', autocompleteStartLocation);
    google.maps.event.addDomListener(window, 'load', autocompleteDestination);
  }

  checkPrice() {
    $('.spinner').css('display', 'inline-block');

    var dest = document.getElementById('destField');
    var initial = document.getElementById('initField');

    //HERE WE CAN PLUG IN THE THE LOC FOR DIRECTIONS

    // Get geocoder instance


    /*
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

                //here is where we could use the lat/long to get a route


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
    */

  }

  render() {
    return (
      <div>
        <div className="searchpage">
          <label htmlFor="initField">Initial Location</label>
          <input className="searchBar" id="initField" type="text" />
          <label htmlFor="destField">Destination</label>
          <input className="searchBar" id="destField" type="text" />
          <button className="btn btn-default" id="search" onClick={this.checkPrice}>Check Route!</button>
          <span className="spinner">
            <span className="double-bounce1"></span>
            <span className="double-bounce2"></span>
          </span>
        </div>
        
        <Map
          centerAroundCurrentLocation
          className="map"
          google={google}
          style={{ height: '100%', position: 'relative', width: '100%' }}
          zoom={14}
        />
      </div>

    )
  }
}

export default App;