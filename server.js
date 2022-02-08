const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const history = require('connect-history-api-fallback');
const app = express();
const db = require('./queries')
const port = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(history());

app.use(bodyParser.json());
app.use(cors());
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

app.get(`https://co2emissionanalytics.herokuapp.com/get_shipments/:pickup_time/:dropoff_time`, db.getShipments);