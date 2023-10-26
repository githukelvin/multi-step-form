<template>
 <div class="form__details">
          <h1>{{props.title }}</h1>
          <p>{{ props.description }}</p>
        </div>
</template>

<script setup>
// props
import { defineProps } from 'vue';
const props = defineProps({
  title: String,
  description: String,
});


</script>

