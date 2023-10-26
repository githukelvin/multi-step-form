<template>
  <div class="main">
    <SideBarMenu />
    <div class="inputs">
         <router-view />
        <div class="btns">
          <button class="back" v-if="showBtn">go back</button>
          <button class="next">next step</button>
        </div>
    </div>
  </div>
</template>

<script setup>

import SideBarMenu from '@/components/SideBarMenu.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
let pathName = route.name;
let showBtn = pathName === 'info' ? false : true;
</script>
