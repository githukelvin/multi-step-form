<template>
  <div class="rect" :data-index="addOns.dataIndex">
    <div class="left">
      <input type="checkbox" class="check" :v-model="addOns.isChecked" name="addOn" id="" />
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
let addOns = defineProps({
  title: {
    type: String,
    required: true
  },
  dataIndex: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isChecked: {
    type: Boolean,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
