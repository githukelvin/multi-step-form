<template>
  <div class="plan">
    <HeaderIntro
      title="Select your plan"
      description="You have the option of montly or yearly billing."
    />
    <div class="plan__grid">
      <BoxComp
        imagePath="./images/icon-arcade.svg"
        title="arcade"
        :extra="extra"
        :ismonth="isMonthly"
        :description="priceA"
        className=""
      />
      <BoxComp
        imagePath="./images/icon-advanced.svg"
        title="advanced"
        :extra="extra"
        :ismonth="isMonthly"
        :description="priceAd"

        className="second"
      />
      <BoxComp
        imagePath="./images/icon-pro.svg"
        title="pro"
        :extra="extra"
        :ismonth="isMonthly"
        :description="priceP"

        className="third"
      />
      <p>{{ price }}</p>

    </div>
    <div class="column">
      <p class="unchecked">monthly</p>
      <input @click="toggle" type="checkbox" name="" id="" />
      <p class="checked">yearly</p>
    </div>
  </div>
</template>

<script setup>
import BoxComp from '@/components/BoxComp.vue'
import HeaderIntro from '@/components/HeaderIntro.vue'
import data from '@/data.json'
import { ref,  computed,watch } from 'vue'
let plans = data[1].plans
let priceA
let priceAd
let priceP
let defaultMode = ref('monthly')
let isMonthly = ref(true)


const dataNew = computed(() => {
  return defaultMode.value === 'monthly' ? plans.monthly : plans.yearly;
});

priceA = `$${dataNew.value.Arcade}/mo`
priceAd = `$${dataNew.value.advanced}/mo`
priceP = `$${dataNew.value.pro}/mo`

let extra ;

// // Watch for changes in defaultMode and update dataNew

watch(defaultMode, (newMode) => {
  // if newmode is equal to  monthyl  make ismonthly true
  if (newMode === 'monthly') {
    isMonthly.value = true
  } else {
    isMonthly.value = false
    extra = dataNew.value.extra;
  }
  // No need to set isMonthly here; it's handled by the computed property
}, { immediate: true, flush: 'pre' });

function toggle() {
  if (isMonthly.value) {
    defaultMode.value = 'yearly'
  } else {
    defaultMode.value = 'monthly'
  }

  priceA = `$${dataNew.value.Arcade}/mo`
  priceAd = `$${dataNew.value.advanced}/mo`
  priceP = `$${dataNew.value.pro}/mo`
  
  return extra, isMonthly.value

}

</script>
