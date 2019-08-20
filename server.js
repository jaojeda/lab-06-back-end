require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Application Setup
// - make an express app!
const app = express();
// - get the port on which to run the server
const PORT = process.env.PORT;

const geoData = require('./data/geo.json');
// - enable CORS
app.use(cors());

function getLatLng() {
    // ignore location for now, return hard-coded file
    // api call will go here

    return toLocation(geoData);
}

function toLocation() {
    const firstResult = geoData.results[0];
    const geometry = firstResult.geometry;
    
    return {
        search_query: 'Alchemy',
        formatted_query: firstResult.formatted_address,
        latitude: geometry.location.lat,
        longitude: geometry.location.lng
    };
}

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});