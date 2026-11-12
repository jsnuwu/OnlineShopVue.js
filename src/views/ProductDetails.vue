<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCartStore } from '../store/cart'
import { products } from '../data/products'

const route = useRoute()
const cart = useCartStore()

const product = products.find(p => p.id === Number(route.params.id))

function addToCart() {
  if (product) cart.addToCart(product)
}
</script>

<template>
  <div v-if="product" class="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
<img
  :src="product.image"
  :alt="product.name"
  class="w-full h-64 md:h-80 object-contain p-2 rounded-lg shadow bg-gray-50"
/>
    <div>
      <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
      <p class="text-gray-600 mb-4">{{ product.description }}</p>
      <p class="text-2xl font-bold text-blue-600 mb-6">{{ product.price }} €</p>
      <button @click="addToCart" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow transition">
        In den Warenkorb
      </button>
    </div>
  </div>
  <div v-else class="p-4">Produkt nicht gefunden</div>
</template>
