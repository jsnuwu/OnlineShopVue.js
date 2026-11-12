<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Warenkorb</h1>

    <div v-if="cart.items.length === 0" class="text-center text-gray-600">
      Dein Warenkorb ist leer 
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex items-center justify-between p-4 border rounded-lg shadow hover:shadow-lg transition"
      >
        <div class="flex items-center gap-4">
          <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded" />
          <div>
            <h2 class="font-semibold">{{ item.name }}</h2>
            <p class="text-gray-600">x{{ item.quantity }}</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-blue-600 font-bold">{{ item.price * item.quantity }} €</span>
          <button
            @click="removeItem(item.id)"
            class="text-red-500 hover:text-red-700 transition"
          >
            Entfernen
          </button>
        </div>
      </div>

      <div class="mt-6 flex justify-between items-center font-bold text-xl">
        <span>Gesamt:</span>
        <span>{{ cart.totalPrice }} €</span>
      </div>

      <button
        @click="checkout"
        class="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
      >
        Zur Kasse
      </button>
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
