<script setup>
import { useCounter } from '../composables'

const { counter, increment, decrement } = useCounter()
</script>
<template>
  <div>
    <input type="number" :value="counter">
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <nuxt-link to="/">TOPへ</nuxt-link>
  </div>
</template>
