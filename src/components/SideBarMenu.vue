<template>
  <div class="sidebar">
    <ul>
      <li>
        <div class="list first">
          <div class="number" :class="{ active: isRouteActive('info').value }">1</div>
          <div class="listInfo">
            <p>step 1</p>
            <h1>your info</h1>
          </div>
        </div>
      </li>
      <li>
        <div class="list mod">
          <div class="number" :class="{ active: isRouteActive('plan').value }">2</div>
          <div class="listInfo">
            <p>step 2</p>
            <h1>select plan</h1>
          </div>
        </div>
      </li>
      <li>
        <div class="list mod">
          <div class="number" :class="{ active: isRouteActive('add-ons').value }">3</div>
          <div class="listInfo">
            <p>step 3</p>
            <h1>add-ons</h1>
          </div>
        </div>
      </li>
      <li>
        <div class="list mod">
          <div class="number" :class="{ active: isRouteActive('summary').value }">4</div>
          <div class="listInfo">
            <p>step 4</p>
            <h1>summary</h1>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute() // Get the current route

const isRouteActive = (routeName) => {
  return computed(() => {
    return route.name === routeName // Check if the path matches the route name
  })
}
console.log(isRouteActive('info').value)
</script>

<!-- <style lang="scss" scoped></style> -->
