<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'
</script>

<template>
  <div class="collection-page">
    <section class="collection-intro">
      <p class="eyebrow">Kollektion 01 — Essentials</p>
      <h1>Gute Basics,<br />klar gemacht.</h1>
      <p class="intro-copy">Eine kleine Auswahl unkomplizierter Pieces — reduziert im Design, angenehm im Alltag.</p>
    </section>
    <div class="collection-bar">
      <span>{{ products.length }} Artikel</span>
      <span>Versandkostenfrei ab 75 €</span>
    </div>
    <section class="product-grid" aria-label="Produkte">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </section>
  </div>
</template>
