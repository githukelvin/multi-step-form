<template>
  <div class="addOn top">
    <HeaderIntro title="Pick add-ons" description="Add-ons help enhance your gamin experience" />

    <div class="addons">
      <Add0nComponent
        dataIndex="online"
        :title="dataAddons.online.text"
        details="Access to multiplayer games"
        :price="dataAddons.online.price"
        :isChecked="isChecked"
        @click="SelectPackage"
      />
      <Add0nComponent
        dataIndex="storage"
        :title="dataAddons.storage.text"
        details="Extra 1TB of cloud save"
        :price="dataAddons.storage.price"
        :isChecked="isChecked"
        @click="SelectPackage"
      />
      <Add0nComponent
        dataIndex="profile"
        :title="dataAddons.profile.text"
        details="Custom theme on you profile"
        :isChecked="isChecked"
        :price="dataAddons.profile.price"
        @click="SelectPackage"
      />
    </div>
  </div>
  <div class="btns" v-show="useAuth.isThank" :class="{ width: useAuth.showBtn === true }">
    <button class="back" :class="{ actives: useAuth.showBtn === true }">go back</button>
    <!-- <button class="back" v-show="useAuth.showBtn">go back</button> -->

    <button
      @click="createAddons"
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
import HeaderIntro from "@/components/HeaderIntro.vue"
import Add0nComponent from "@/components/Add0nComponent.vue"
import data from "@/data.json"
import { ref } from "vue"
import { useAuthStore } from "../stores/auth"
import Swal from "sweetalert2/dist/sweetalert2.js"
const useAuth = useAuthStore()

let selected = ref([])
let prices = ref([])
let dataSaved = ref(null)
let isMonthly = useAuth.isMonthly
let addOns = data[0].addons
let dataAddons
let isChecked = false
if (isMonthly) {
  dataAddons = addOns.monthly
} else {
  dataAddons = addOns.yearly
}

let SelectPackage = (event) => {
  let data = event.target.getAttribute("data-index")
  if (selected.value.includes(data)) {
    event.target.querySelector(".check").classList.remove("checks")
    selected.value.splice(selected.value.indexOf(data), 1)
    event.target.classList.remove("active")
    isChecked = true
  } else {
    event.target.classList.add("active")
    selected.value.push(event.target.getAttribute("data-index"))
    isChecked = true
    event.target.querySelector(".check").classList.add("checks")
  }
  dataSaved.value = {
    isMonthly: isMonthly,
    Package: selected.value,
    prices: prices.value
  }

  return dataSaved
}
async function createAddons() {
  const addonPrices = {
    online: dataAddons.online,
    storage: dataAddons.storage,
    profile: dataAddons.profile
  }

  for (let i = 0; i < selected.value.length; i++) {
    const addon = selected.value[i]
    if (Object.prototype.hasOwnProperty.call(addonPrices, addon)) {
      prices.value.push(addonPrices[addon])
    }
  }
  const addons = await dataSaved.value
  useAuth.isSummary = true
  if (addons == null) {
    Swal.fire({
      text: "Pick an Add-On to continue!",
      icon: "error",
      buttonsStyling: false,
      confirmButtonText: "Try again!",
      heightAuto: false,
      customClass: {
        confirmButton: "alert  btn-light-danger"
      }
    })
  } else {
    useAuth.saveDetails(JSON.stringify(addons), "addons", "summary")
    Swal.fire({
      text: "You have successfully Entered  in details!",
      icon: "success",
      buttonsStyling: false,
      confirmButtonText: "Ok, got it!",
      heightAuto: false,
      customClass: {
        confirmButton: "alert  btn-light-primary"
      }
    })
  }
}
</script>
