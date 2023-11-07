<template>
  <div class="addOn top">
    <HeaderIntro title="Pick add-ons" description="Add-ons help enhance your gamin experience" />

    <div class="addons">
      <Add0nComponent title="Online service" details="Access to multiplayer" price="1" />
      <Add0nComponent title="larger storage" details="Extra 1TB of cloud save" price="2" />
      <Add0nComponent title="Customizable" details="Custom theme on you profile" price="3" />
    </div>
  </div>
</template>

<script setup>
import HeaderIntro from '@/components/HeaderIntro.vue'
import Add0nComponent from '@/components/Add0nComponent.vue'
</script>
