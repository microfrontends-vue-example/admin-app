<template>
  <div class="admin-panel">
    <h1>Admin Panel</h1>
    <h2>Hi {{ username }}</h2>
    <p>Welcome to the admin dashboard!</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from 'mainApp/stores'
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { username } = storeToRefs(userStore)
</script>

<style scoped>
.admin-panel {
  text-align: center;
  margin-top: 5rem;
}
</style>