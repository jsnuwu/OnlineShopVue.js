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
  <div v-if="product" class="detail-page">
    <router-link class="back-link" to="/">← Zur Kollektion</router-link>
    <section class="product-detail">
      <div class="detail-image"><img :src="product.image" :alt="product.name" /></div>
      <div class="detail-content">
        <p class="eyebrow">Studio Standard</p>
        <div class="detail-heading"><h1>{{ product.name }}</h1><strong>{{ product.price.toFixed(2) }} €</strong></div>
        <p class="detail-description">{{ product.description }}</p>
        <dl class="product-facts">
          <div><dt>Passform</dt><dd>Regular Fit</dd></div>
          <div><dt>Versand</dt><dd>2–4 Werktage</dd></div>
        </dl>
        <button class="primary-button" type="button" @click="addToCart">In den Warenkorb</button>
      </div>
    </section>
  </div>
  <div v-else class="empty-page">Produkt nicht gefunden.</div>
</template>
