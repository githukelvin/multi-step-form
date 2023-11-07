<template>
  <div class="rect">
    <div class="left">
      <input type="checkbox" name="addOn" id="" />
      <div class="info">
        <h1>{{ addOns.title }}</h1>
        <p>{{ addOns.details }}</p>
      </div>
    </div>
    <div class="right">
      <p>+${{ addOns.price }}/mo</p>
    </div>
  </div>
</template>

<script setup>
// props
import { defineProps } from 'vue'
import { string } from 'yup'
let addOns = defineProps({
  title: {
    type: string,
    required: true
  },
  details: {
    type: string,
    required: true
  },
  price: {
    type: string,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
