const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const db = require('./queries')
const port = process.env.PORT || 3000;

const http = require('http')
const fs = require('fs')
const httpPort = 80

const history = require('connect-history-api-fallback');


app.use(bodyParser.json());
app.use(cors());
app.use(history());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
})

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get(`/get_shipments/:pickup_time/:dropoff_time`, db.getShipments);