require('dotenv').config()
const { Pool } = require('pg');

const connectionString = `
  postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE};
`;

const pool = new Pool({
  // user: 'co2_analyst',
  // host: 'localhost',
  // database: 'shipments',
  // password: 'co2_analyst',
  // port: 5432,
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

const getShipments = (request, response) => {
  const pickup_time = request.params.pickup_time;
  const dropoff_time = request.params.dropoff_time;

  const query = {
    text: `
      SELECT DISTINCT type_of_calculations, * FROM co2_emission_analytics.shipments
      LEFT OUTER JOIN co2_emission_analytics.shipment_co2_emissions 
        ON co2_emission_analytics.shipments.id = co2_emission_analytics.shipment_co2_emissions.shipment_id 
      WHERE pickup_time >= $1 AND pickup_time <= $2 AND 
        dropoff_time >= $1 AND dropoff_time <= $2;
    `,
    values: [pickup_time, dropoff_time]
  }

  pool.query(query, (err, res) => {
    if (err) {
      console.log(err); 
    } else {
      response.json(res.rows);
    }
  });
}

module.exports = {
  getShipments
}
