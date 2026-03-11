<script setup lang="ts">
import { useCartStore } from '../store/cart'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function goToCart() {
  router.push('/cart')
}
</script>

<template>
  <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold cursor-pointer" @click="$router.push('/')">Mein Shop</h1>
    <button @click="goToCart" class="bg-blue-500 px-4 py-2 rounded">
      Warenkorb ({{ cart.totalItems }})
    </button>
  </nav>
</template>
