# leaflet-challenge


## Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Create the Earthquake Visualization

### 1. Get your Dataset:
     - Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)  page.
     - Choose a dataset ("All Earthquakes from the past 30 Days" was chosen for this analysis)
     - Obtain the JSON representation URL for the dataset
### 2. Import and Vizualize the Data:
     - Use Leaflet to create a map that plots all earthquakes based on their latitude and longitude
     - Size the data markers according to the earthquake magnitude
     - Color the data markers based on the depth of the earthquake
     - Include popups with additional information about each earthquake
 ### 3. Create a Legend
     - Build a legend to provide context for the map data
     - Legend should display depth ranges with corresponding colors

## Dependencies
     - Leaflet
     - D3.js

The project aims to provide a meaningful visualization of earthquake data.

## Results
[Link to the dashboard](https://nalchamp.github.io/leaflet-challenge/)

<img width="1710" alt="Screenshot 2024-02-25 at 8 36 42 PM" src="https://github.com/Nalchamp/leaflet-challenge/assets/145158606/ad643047-80e8-4dd5-b26f-d5e6c07b972b">


