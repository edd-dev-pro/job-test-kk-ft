<template>
  <form @submit.prevent="submitVenta">
    <input v-model="concepto" type="text" placeholder="Concepto" required />
    <input v-model.number="monto" type="number" placeholder="Monto" required />
    <button type="submit">Agregar Venta</button>
    <p v-if="message">{{ message }}</p>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import apiClient from "../api/apiService";

const concepto = ref("");
const monto = ref<number | null>(null);
const message = ref("");
const router = useRouter();

const emit = defineEmits<{
  (e: "venta-agregada"): void;
}>();

interface LoginDto {
  Concepto: string;
  Monto: number | null;
}

const submitVenta = async () => {
  try {
    const payload: LoginDto = {
      Concepto: concepto.value,
      Monto: monto.value,
    };

    await apiClient.post("/Ventas", payload);
    message.value = "Venta agregada exitosamente";
    emit("venta-agregada");
    concepto.value = "";
    monto.value = null;
    router.push("/sales");
  } catch (error) {
    message.value = "Error al agregar venta";
    console.error(error);
  }
};
</script>
