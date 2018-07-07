const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive')
const cors = require('cors');
require('dotenv').config();

const app = express()
massive( process.env.CONNECTION_STRING ).then( dbInstance => { app.set('db', dbInstance) })

app.use( bodyParser.json());
app.use( cors() );

app.get('/api/houses', controller.getHouses)

app.post('/api/house', controller.createHouse)

app.delete('/api/house', controller.deleteHouse)

const port = 4000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );
