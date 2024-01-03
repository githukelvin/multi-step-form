<template>
  <div class="main">
    <SideBarMenu />
    <div class="inputs">
      <router-view />
      <div class="btns" :class="{ width: showBtn === true }">
        <button @click="goBack" class="back" v-if="showBtn">go back</button>
        
        <button v-if="!isSummary" class="next" :class="{ leftPos: showBtn === false }">next step</button>
          <button v-else class="next" :class="{ leftPos: showBtn === false, color: isSummary }" >Confirm</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBarMenu from '@/components/SideBarMenu.vue'
import { computed } from 'vue'
import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const isRouteActive = (routeName) => {
  return computed(() => {
    return route.name === routeName // Check if the path matches the route name
  })
}
const goBack = () => {
  router.go(-1);
};
let isSummary = isRouteActive('summary').value
let pathName = route.name
let showBtn = pathName === 'info' ? false : true
console.log(showBtn)
</script>
