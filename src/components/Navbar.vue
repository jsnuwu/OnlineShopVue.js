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
  <header class="site-header">
    <nav class="nav-wrap" aria-label="Hauptnavigation">
      <button class="wordmark" type="button" @click="$router.push('/')">STUDIO STANDARD</button>
      <p class="nav-note">Essentials für jeden Tag</p>
      <button class="cart-button" type="button" @click="goToCart">
        Warenkorb <span>{{ cart.totalItems }}</span>
      </button>
    </nav>
  </header>
</template>
