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
  <article class="product-card">
    <router-link class="product-image" :to="`/product/${props.product.id}`" :aria-label="`${props.product.name} ansehen`">
      <img :src="props.product.image" :alt="props.product.name" />
    </router-link>
    <div class="product-meta">
      <div>
        <h2>{{ props.product.name }}</h2>
        <p>{{ props.product.description }}</p>
      </div>
      <strong>{{ props.product.price.toFixed(2) }} €</strong>
    </div>
    <button class="add-button" type="button" @click="addToCart">Hinzufügen</button>
  </article>
</template>
