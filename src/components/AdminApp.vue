<template>
  <div class="admin-panel">
    <h1>Admin Panel</h1>
    <h2>Hi {{ username }}</h2>
    <p>Welcome to the admin dashboard!</p>
    <ul v-if="products.length > 0">
      <li v-for="product in products" :key="product.id" class="cart-item">
        <div class="description">
          <img :src="product.img">
          <p>{{ product.title }}</p>
        </div>
        <button @click="changeProductShowing(product.id)">{{ product.showItem ? 'Hide' : 'Show' }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useUserStore, useProductsStore } from 'mainApp/stores'
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const productsStore = useProductsStore();

const { username } = storeToRefs(userStore)

const { changeProductShowing } = productsStore;
const { products } = storeToRefs(productsStore)
</script>

<style scoped>
.admin-panel {
  padding: 1rem 2rem;
}

.admin-panel ul {
  width: 100%;
  list-style: none;
  padding: 0;
}

.admin-panel li {
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
}

.admin-panel .description{
  display: flex;
  gap: 2rem;
}

.admin-panel li img {
  width: 70px;
}
</style>