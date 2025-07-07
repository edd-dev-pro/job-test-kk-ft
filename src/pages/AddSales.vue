<template>
  <div class="agregar-venta-page">
    <h1>Agregar Nueva Venta</h1>
    <SalesForm @venta-agregada="irAListado" />
    <router-link to="/sales">Volver al Listado</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import SalesForm from "../components/SalesForm.vue";

const router = useRouter();

const irAListado = () => {
  router.push("/ventas");
};
</script>

<style scoped>
.agregar-venta-page {
  max-width: 500px;
  margin: 0 auto;
}
</style>
