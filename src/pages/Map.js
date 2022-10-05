import React from 'react';
import { useEffect } from 'react';

function Map (){
    
const mapStyle = [{
    'featureType': 'administrative',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'on',
    },
    {
      'lightness': 33,
    },
    ],
  },
  {
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [{
      'color': '#f2e5d4',
    }],
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#c5dac6',
    }],
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels',
    'stylers': [{
      'visibility': 'on',
    },
    {
      'lightness': 20,
    },
    ],
  },
  {
    'featureType': 'road',
    'elementType': 'all',
    'stylers': [{
      'lightness': 20,
    }],
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#c5c6c6',
    }],
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#e4d7c6',
    }],
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#fbfaf7',
    }],
  },
  {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'on',
    },
    {
      'color': '#acbcc9',
    },
    ],
  },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    if (script.id==='maps')
     return ;
  
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBZtCP_51_dck5S6qcSI3-YaF6h5XHImkY&callback=initMap&v=weekly";
    script.async = true;
    script.id='maps'

    document.body.appendChild(script);

    window.initMap= () => {
        const google = window.google
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 48.2089715, lng: 11.6707872},
          styles: mapStyle,
        });
        new google.maps.Marker({
            position: {lat: 48.2089715, lng: 11.6707872},
            map,
            label: 'Lidl',
          });
      };
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

    return (
    <>
    <h1> </h1>
    <div id="map"></div>
    </>
    )
  }

export default Map;

