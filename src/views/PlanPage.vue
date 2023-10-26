<template>
  <div class="plan top">
    <HeaderIntro
      title="Select your plan"
      description="You have the option of montly or yearly billing."
    />
    <div class="plan__grid">
      <BoxComp imagePath="./images/icon-arcade.svg" title="arcade" description="$9/mo" />
      <BoxComp imagePath="./images/icon-advanced.svg" title="advanced" description="$12/mo" />
      <BoxComp imagePath="./images/icon-pro.svg" title="pro" description="$15/mo" />
    </div>
    <div class="column">
        <p>monthly</p>
        <input type="checkbox" name="" id="">
        <p>yearly</p>
    </div>
  </div>
</template>

<script setup>
import HeaderIntro from '@/components/HeaderIntro.vue'
import BoxComp from '@/components/BoxComp.vue'
</script>
