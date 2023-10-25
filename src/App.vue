<template>
  <main>
    <div class="parent">
      <SideBarMen />
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup>
import SideBarMen from '@/components/SideBarMen.vue'
</script>
<!-- <style lang="scss" scoped>

</style> -->
