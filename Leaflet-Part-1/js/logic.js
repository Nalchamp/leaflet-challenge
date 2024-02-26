//Define the url for the GeoJSON earthquake data
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

//Create the map
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Retreive and add the earthquake data to map
d3.json(url).then(function (data) {
  function mapStyle(feature) {
    return {
      opacity: 1,
      fill0pacity: 1,
      fillColor: mapColor(feature.geometry.coordinates[2]),
        color: "black",
        radius: mapRadius (feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
  }
//Establishing colors for depth
  function mapColor(depth) {
    switch (true) {
      case depth > 90:
        return "red";
      case depth > 70:
        return "orangered";
      case depth > 50:
        return "orange";
      case depth > 30:
        return "gold";
      case depth > 10:
        return "yellow";
      default:
        return "lightgreen";
    }
  }

  //Magnitude size
  function mapRadius(mag) {
    if (mag === 0) {
      return 1;
    }

    return mag * 4;
  }

  //Earthquake data to map
  L.geoJson(data, {

    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: mapStyle,

    //Pop-up data for circles 
    onEachFeature: function (feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location : "  +feature.properties.place +"<br>Depth: " + feature.geometry.coordinates[2]);

    }
  }).addTo(myMap);

  //LEgend for the colors on the map relating to depth
var legend = L.control({position: "bottomright"});
legend.onAdd=function() {
  var div = L.DomUtil.create("div", "info legend"),
  depth = [-10, 10, 30, 50, 70, 90];

  for (var i = 0; i<depth.length; i++) {
    div.innerHTML +=
    '<i style="background:' + mapColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
  }
  return div;
};
legend.addTo(myMap) 
});