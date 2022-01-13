<template>
  <div class='table-wrapper'>
    <table>
      <tr>
        <th>Shipment ID</th>
        <th>Weight (kg)</th>
        <th>Distance (km)</th>
        <th>Pickup Time</th>
        <th>Dropoff Time</th>
        <th>CO2 Emission</th>
      </tr>
      <tr v-for='shipment in shipments'>
        <td>{{ shipment.shipment_id }}</td>
        <td>{{ shipment.weight_kg }}</td>
        <td>{{ shipment.distance_km }}</td>
        <td>{{ shipment.pickup_time }}</td>
        <td>{{ shipment.dropoff_time }}</td>
        <td>{{ shipment.co2_emission }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['shipments']
}
</script>

<style>
.table-wrapper {
  border: 1px solid #ddd;
  border-radius: 4px;
  max-height: calc(100vh - 153px);
  margin: 1rem 0; 
  overflow: hidden;
  overflow-y: scroll;
}

table {
  width: 100%;
}

table th {
  padding: 8px 0;
}

th, td {
  border: 1px solid #ddd;
  border-radius: 4px;
  border-collapse: collapse;
}
</style>