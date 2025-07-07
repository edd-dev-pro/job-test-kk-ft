<template>
  <div class="ventas-page">
    <h1>Listado de Ventas</h1>
    <SalesList />
    <router-link to="/add-sales">Agregar Venta</router-link>
  </div>
</template>

<script setup lang="ts">
import SalesList from "../components/SalesList.vue";
</script>

<style scoped>
.ventas-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
