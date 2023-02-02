<template>
  <NavigationComponent />

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import NavigationComponent from './components/NavigationComponent.vue'
</script>
