<script setup lang="ts">
import type { Product } from '../types/product'
import { useCartStore } from '../store/cart'

const props = defineProps<{ product: Product }>()
const cart = useCartStore()

function addToCart() {
  cart.addToCart(props.product)
}
</script>

<template>
  <div class="border p-4 rounded shadow">
    <img :src="props.product.image" :alt="props.product.name" class="w-full h-48 object-cover"/>
    <h2 class="font-bold mt-2">{{ props.product.name }}</h2>
    <p class="text-gray-700">{{ props.product.price }} €</p>
    <button @click="addToCart" class="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
      In den Warenkorb
    </button>
  </div>
</template>
