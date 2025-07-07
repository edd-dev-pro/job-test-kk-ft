<template>
  <div class="ventas-page">
    <h1>Listado de Ventas</h1>
    <SalesList ref="salesListRef" />
    <router-link to="/add-sales">Agregar Venta</router-link>
    <button @click="limpiarVentas" style="margin-left: 1rem">
      Limpiar Ventas
    </button>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import apiClient from "../api/apiService";
import SalesList from "../components/SalesList.vue";

const message = ref("");

const salesListRef = ref<InstanceType<typeof SalesList> | null>(null);

const limpiarVentas = async () => {
  try {
    await apiClient.delete("/Ventas/all");
    message.value = "Limpieza de ventas exitosa";

    salesListRef.value?.fetchVentas();
  } catch (error) {
    message.value = "Error al limpiar ventas";
    console.error(error);
  }
};
</script>

<style scoped>
.ventas-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
