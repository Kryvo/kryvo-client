<template>
  <div id="subscriptions" class="view">
    <h1>{{ name }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'

const name: RouteLocationNormalizedLoaded = useRoute()
</script>
