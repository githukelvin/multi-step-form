import { defineProps } from 'vue';
<template>
  <div class="box">
    <div class="box__header">
      <img :src="props.imagePath" :alt="props.title" />
      <div class="box__details">
        <h3>{{ props.title }}</h3>
        <p>{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// props
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  description: String,
  imagePath: String
})
</script>
