<template>
  <div class="home-page">
    <h1>Login</h1>
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from "../components/LoginForm.vue";
</script>

<style scoped>
.home-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
