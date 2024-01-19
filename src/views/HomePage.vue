<template>
  <div class="main">
    <SideBarMenu />
    <div class="inputs">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideBarMenu from '@/components/SideBarMenu.vue'
</script>
