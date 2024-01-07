<template>
  <div class="plan">
    <HeaderIntro
      title="Select your plan"
      description="You have the option of montly or yearly billing."
    />
    <div class="plan__grid">
      <BoxComp
        @click="SelectPackage"
        :data-index="divID.one"
        imagePath="./images/icon-arcade.svg"
        title="arcade"
        :extra="extra"
        :ismonth="isMonthly"
        :description="priceA"
        className=""
      />
      <BoxComp
        @click="SelectPackage"
        :data-index="divID.two"
        imagePath="./images/icon-advanced.svg"
        title="advanced"
        :extra="extra"
        :ismonth="isMonthly"
        :description="priceAd"
        className="second"
      />
      <BoxComp
        @click="SelectPackage"
        :data-index="divID.three"
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
  <div class="btns" v-show="useAuth.isThank" :class="{ width: useAuth.showBtn === true }">
      <button  class="back" v-show="useAuth.showBtn">go back</button>

      <button
        @click="useAuth.saveDetails()"
        v-if="!useAuth.isSummary"
        class="next"
        :class="{ leftPos: useAuth.showBtn === false }"
      >
        next step
      </button>
      <button v-else class="next" :class="{ leftPos: useAuth.showBtn === false, color: useAuth.isSummary }">
        Confirm
      </button>
    </div>
</template>

<script setup>
import BoxComp from '@/components/BoxComp.vue'
import HeaderIntro from '@/components/HeaderIntro.vue'
import data from '@/data.json'
import { ref, computed, watch } from 'vue'
import { useAuthStore } from '../stores/data'
const useAuth = useAuthStore()

let plans = data[1].plans
let priceA
let selected = ref([])
let priceAd
let priceP
let defaultMode = ref('monthly')
let isMonthly = ref(true)
let divID = {
  one: 'Arcade',
  two: 'advanced',
  three: 'pro'
}
const dataNew = computed(() => {
  return defaultMode.value === 'monthly' ? plans.monthly : plans.yearly
})

priceA = `$${dataNew.value.Arcade}/mo`
priceAd = `$${dataNew.value.advanced}/mo`
priceP = `$${dataNew.value.pro}/mo`

let extra

// // Watch for changes in defaultMode and update dataNew

watch(
  defaultMode,
  (newMode) => {
    // if newmode is equal to  monthyl  make ismonthly true
    if (newMode === 'monthly') {
      isMonthly.value = true
    } else {
      isMonthly.value = false
      extra = dataNew.value.extra
    }
    // No need to set isMonthly here; it's handled by the computed property
  },
  { immediate: true, flush: 'pre' }
)

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
// let  data = {
//   "isMonthly": isMonthly.value,
//   "Package":,
//   "price":

// }
let dataSaved = ref(null)
let SelectPackage = (event) => {
  let data = event.target.getAttribute('data-index')
  if (selected.value.includes(data)) {
    selected.value.splice(selected.value.indexOf(data), 1)
    event.target.classList.remove('active')
  } else {
    event.target.classList.add('active')
    selected.value.push(event.target.getAttribute('data-index'))
  }
  dataSaved.value = {
    isMonthly: isMonthly.value,
    Package: selected.value
  }

  return dataSaved
}
</script>
