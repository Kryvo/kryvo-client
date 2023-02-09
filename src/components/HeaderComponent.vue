<template>
  <header>
    <figure id="logo">
      <img src="../assets/logo.svg" alt="Kryvo's logo" />
      <figcaption>Kryvo</figcaption>
    </figure>
    <navigation-component />
  </header>
</template>

<script setup lang="ts">
import NavigationComponent from './NavigationComponent.vue'
</script>

<style scoped lang="scss">
@import '../style/variables';

header {
  height: 80px;
  padding: 0 4rem;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;

  background-color: $color-primary;
}

#logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 2rem;
  }

  figcaption {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
  }
}
</style>
