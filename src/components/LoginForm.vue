<template>
  <form @submit.prevent="handleLogin">
    <input v-model="username" type="text" placeholder="Usuario" required />
    <input
      v-model="password"
      type="password"
      placeholder="Contraseña"
      required
    />
    <button type="submit">Iniciar sesión</button>
    <p v-if="message">{{ message }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import apiClient from "../api/apiService"; // Adjust the path as necessary
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const message = ref("");

const router = useRouter();

interface LoginDto {
  Username: string;
  Password: string;
}

const handleLogin = async () => {
  try {
    const payload: LoginDto = {
      Username: username.value,
      Password: password.value,
    };

    const response = await apiClient.post("/Auth/login", payload);

    localStorage.setItem("token", response.data.token);
    message.value = "Autenticado correctamente";
    router.push("/sales");
  } catch (error) {
    message.value = "Credenciales incorrectas";
    console.error(error);
  }
};
</script>
