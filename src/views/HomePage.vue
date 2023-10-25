<template>
  <div class="main">
    <SideBarMenu />
    <div class="inputs">
         <router-view />
        <div class="btns">
          <button class="back">go back</button>
          <button class="next">next step</button>
        </div>
    </div>
  </div>
</template>

<script setup>
import SideBarMenu from '@/components/SideBarMenu.vue'
</script>
