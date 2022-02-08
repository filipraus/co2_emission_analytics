const { Pool } = require('pg');

const pool = new Pool({
  user: 'co2_analyst',
  host: 'localhost',
  database: 'shipments',
  password: 'co2_analyst',
  port: 5432,
  connectionString: 'postgres://atrnguffvnrdht:1e9c4240ab65fea32cbdcebb006063be337664b6345721991301d2ad34b845a6@ec2-34-205-46-149.compute-1.amazonaws.com:5432/d7u1gmb1cpqsht',
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
