import { defineProps } from 'vue';
<template>
  <div :data-index="props.data" :removed="removed" class="box" :class="props.className">
    <div class="box__header">
      <img :src="props.imagePath" :alt="props.title" />
      <div class="box__details">
        <h3>{{ props.title }}</h3>
        <p>{{ props.description }}</p>
        <small v-show="!props.ismonth">{{ props.extra }}</small>
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
  imagePath: String,
  className: String,
  removed: String,
  ismonth: Boolean,
  extra: String,
  data: String
})
</script>
