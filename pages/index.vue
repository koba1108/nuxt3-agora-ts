<script setup>
import { useCounter } from '../composables'

const { counter } = useCounter()
</script>
<template>
  <div>
    <div>カウンターの値：{{ counter }}</div>
    <div>
      <nuxt-link to="/counter">カウンター画面へ</nuxt-link>
    </div>
  </div>
</template>
