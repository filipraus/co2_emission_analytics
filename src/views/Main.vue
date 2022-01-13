<template>
  <main>
    <Datepicker 
      v-model="date"
      v-bind:range="true"
      v-bind:twoCalendars="true"
      :startDate="startDate"
      placeholder="Select pickup and dropoff time"
      @update:modelValue="getShipments"
    />
    <Shipments :shipments="shipments"/>
  </main>
</template>

<script>
import { ref } from '@vue/reactivity';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import Shipments from '@/components/Shipments.vue';

export default {
  components: {
    Datepicker,
    Shipments
  },
  data() {
    return {
      date: ref(),
      startDate: ref(new Date(2021, 4)),
      shipments: []
    }
  },
  methods: {
    formatShipments(shipments) {
      return shipments.map(shipment => {
        shipment.pickup_time = this.formatTime(shipment.pickup_time);
        shipment.dropoff_time = this.formatTime(shipment.dropoff_time);
        shipment.co2_emission = parseFloat(shipment.co2_emission).toFixed(2);
        return shipment;
      });
    },
    formatTime(time) {
      return (new Date(time)).toLocaleString('en-US', {
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false
      });
    },
    pickupTime() {
      return (new Date(this.date[0])).toISOString();
    },
    dropoffTime() {
      return (new Date(this.date[1])).toISOString();
    },
    getShipments() {
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }

      fetch(`http://localhost:3000/get_shipments/${this.pickupTime()}/${this.dropoffTime()}`, options)
        .then(res => res.json())
        .then(res => {
          this.shipments = this.formatShipments(res);
        }).catch(err => console.log(err));
    }
  }
}
</script>

<style>
main {
  max-width: 1200px;
  max-height: 800px;
  margin: 0 auto;
}
</style>