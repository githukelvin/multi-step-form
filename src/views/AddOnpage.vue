<template>
  <div class="addOn top">
    <HeaderIntro title="Pick add-ons" description="Add-ons help enhance your gamin experience" />

    <div class="addons">
      <Add0nComponent
        dataIndex="online"
        title="Online service"
        details="Access to multiplayer games"
        :price="dataAddons.online"
        :isChecked="isChecked"
        @click="SelectPackage"
      />
      <Add0nComponent
        dataIndex="storage"
        title="larger storage"
        details="Extra 1TB of cloud save"
        :price="dataAddons.storage"
        :isChecked="isChecked"
        @click="SelectPackage"
      />
      <Add0nComponent
        dataIndex="profile"
        title="Customizable"
        details="Custom theme on you profile"
        :isChecked="isChecked"
        :price="dataAddons.profile"
        @click="SelectPackage"
      />
    </div>
  </div>
  <div class="btns" v-show="useAuth.isThank" :class="{ width: useAuth.showBtn === true }">
    <button class="back" v-show="useAuth.showBtn">go back</button>

    <button
      @click="useAuth.saveDetails()"
      v-if="!useAuth.isSummary"
      class="next"
      :class="{ leftPos: useAuth.showBtn === false }"
    >
      next step
    </button>
    <button
      v-else
      class="next"
      :class="{ leftPos: useAuth.showBtn === false, color: useAuth.isSummary }"
    >
      Confirm
    </button>
  </div>
</template>

<script setup>
import HeaderIntro from '@/components/HeaderIntro.vue'
import Add0nComponent from '@/components/Add0nComponent.vue'
import data from '@/data.json'
import { ref } from 'vue'
import { useAuthStore } from '../stores/data'
const useAuth = useAuthStore()

let selected = ref([])
let prices = ref([])
let dataSaved = ref(null)
let isMonthly = true
let addOns = data[0].addons
let dataAddons
let isChecked = false
if (isMonthly) {
  dataAddons = addOns.monthly
} else {
  dataAddons = addOns.yearly
}
// console.log(dataAddons)

let SelectPackage = (event) => {
  let data = event.target.getAttribute('data-index')
  if (selected.value.includes(data)) {
    event.target.querySelector('.check').classList.remove('checks')
    selected.value.splice(selected.value.indexOf(data), 1)
    event.target.classList.remove('active')
    isChecked = true
  } else {
    event.target.classList.add('active')
    selected.value.push(event.target.getAttribute('data-index'))
    isChecked = true
    event.target.querySelector('.check').classList.add('checks')
  }
  dataSaved.value = {
    isMonthly: isMonthly,
    Package: selected.value,
    prices: prices.value
  }
  for (let i = 0; i < selected.value.length; i++) {
    if (selected.value[i] === 'online') {
      prices.value.push(dataAddons.online)
    } else if (selected.value[i] === 'storage') {
      prices.value.push = dataAddons.storage
    } else if (selected.value[i] === 'profile') {
      prices.value.push(dataAddons.profile)
    }
  }
  console.log(dataSaved.value)
  return dataSaved
}
</script>
