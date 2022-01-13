const { Pool } = require('pg');

const pool = new Pool({
  user: 'test',
  host: 'localhost',
  database: 'homeworks',
  password: 'TestUser',
  port: 5432,
});

const getShipments = (request, response) => {
  const pickup_time = request.params.pickup_time;
  const dropoff_time = request.params.dropoff_time;

  const query = {
    text: `
      SELECT * FROM co2_emission_analytics.shipments 
      LEFT OUTER JOIN co2_emission_analytics.shipment_co2_emissions 
        ON co2_emission_analytics.shipments.id = co2_emission_analytics.shipment_co2_emissions.shipment_id 
      WHERE pickup_time >= $1 AND pickup_time <= $2 AND 
        dropoff_time >= $1 AND dropoff_time <= $2
      ORDER BY co2_emission_analytics.shipments.dropoff_time ASC;
    `,
    values: [pickup_time, dropoff_time]
  }

  pool.query(query, (err, res) => {
    if (err) {
      console.log(err); 
    } else {
      console.log(res.rows);
      response.json(res.rows);
    }
  });
}

module.exports = {
  getShipments
}