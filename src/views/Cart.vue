<template>
  <div class="cart-page">
    <div class="cart-heading"><p class="eyebrow">Deine Auswahl</p><h1>Warenkorb</h1></div>

    <div v-if="cart.items.length === 0" class="cart-empty">
      <p>Dein Warenkorb ist noch leer.</p>
      <router-link to="/">Kollektion ansehen</router-link>
    </div>

    <div v-else class="cart-layout">
      <section class="cart-items">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="cart-item"
      >
        <div class="cart-product">
          <img :src="item.image" :alt="item.name" />
          <div>
            <h2>{{ item.name }}</h2>
            <p>Menge {{ item.quantity }}</p>
          </div>
        </div>
        <div class="cart-price">
          <span>{{ (item.price * item.quantity).toFixed(2) }} €</span>
          <button
            @click="removeItem(item.id)"
            type="button"
            class="remove-button"
          >
            Entfernen
          </button>
        </div>
      </div>
      </section>

      <aside class="order-summary">
        <div><span>Zwischensumme</span><strong>{{ cart.totalPrice.toFixed(2) }} €</strong></div>
        <p>Versand und Steuern werden an der Kasse berechnet.</p>
        <button @click="checkout" class="primary-button" type="button">Zur Kasse</button>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'

const cart = useCartStore()

function removeItem(id: number) {
  cart.removeFromCart(id)
}

function checkout() {
  alert('Checkout nicht implementiert')
}
</script>
