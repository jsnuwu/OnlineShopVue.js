<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app-shell">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>
