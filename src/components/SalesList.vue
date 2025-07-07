<template>
  <div>
    <ul>
      <li v-for="venta in ventas" :key="venta.id">
        {{ venta.concepto }} - ${{ venta.monto }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import apiClient from "../api/apiService";

interface Venta {
  id: number;
  concepto: string;
  monto: number;
}

const ventas = ref<Venta[]>([]);

const fetchVentas = async () => {
  try {
    const response = await apiClient.get("/ventas");
    ventas.value = response.data;
  } catch (error) {
    console.error("Error al obtener ventas:", error);
  }
};

onMounted(() => {
  fetchVentas();
});

defineExpose({
  fetchVentas,
});
</script>
