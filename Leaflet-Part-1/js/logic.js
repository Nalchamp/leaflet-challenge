//Define the url for the GeoJSON earthquake data
var url https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson

//Create the map
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Retreive and add the earthquake data to map