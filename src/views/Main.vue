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
    <div class='select-wrapper'>
      <span>Emission type: </span>
      <select 
        class='dp-input' 
        v-model="typeOfCalculations" 
        @change="filterShipments"
      >
        <option value="any">Any</option>
        <option value="default">Default</option>
        <option value="modeled">Modeled</option>
        <option value="primary">Primary</option>
      </select>
    </div>
    <Shipments :shipments="filteredShipments"/>
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
      typeOfCalculations: 'any',
      shipments: [],
      filteredShipments: []
    }
  },
  methods: {
    formatShipments(shipments) {
      this.shipments = shipments.map(shipment => {
        shipment.pickup_time = this.formatTime(shipment.pickup_time);
        shipment.dropoff_time = this.formatTime(shipment.dropoff_time);
        shipment.co2_emission = parseFloat(shipment.co2_emission).toFixed(2);
        return shipment;
      });
      this.filterShipments();
    },
    filterShipments() {
      this.filteredShipments = this.shipments.filter(shipment => {
        if (this.typeOfCalculations == 'any') {
          return shipment;
        } else if (shipment.type_of_calculations === this.typeOfCalculations) {
          return shipment;
        }
      })
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

      fetch(`/get_shipments/${this.pickupTime()}/${this.dropoffTime()}}`, options)
        .then(res => res.json())
        .then(res => {
          this.formatShipments(res);
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

.select-wrapper {
  text-align: left;
}

select {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  height: 38px;
  line-height: 1.5rem;
  margin-top: 16px;
  padding: 6px 12px;
  outline: none;
}
</style>