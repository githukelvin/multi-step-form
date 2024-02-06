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
    <!-- <button class="back" v-show="useAuth.showBtn">go back</button> -->
    <button class="back" :class="{ actives: useAuth.showBtn === true }">go back</button>
    <button
      @click="createPackage"
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

<script setup lang="ts">
import BoxComp from "../components/BoxComp.vue"
import HeaderIntro from "../components/HeaderIntro.vue"
import data from "../data.json"
import { ref, computed, watch } from "vue"
import { useAuthStore } from "../stores/auth"
import Swal from "sweetalert2/dist/sweetalert2.js"

const useAuth = useAuthStore()
let plans = data[1].plans
let priceA
let selected = ref([])
let ActiveDivs = ref([])
let priceAd
let priceP
let defaultMode = ref("monthly")
let isMonthly = ref(true)
let divID = {
  one: "Arcade",
  two: "advanced",
  three: "pro"
}
const dataNew = computed(() => {
  return defaultMode.value === "monthly" ? plans.monthly : plans.yearly
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
    if (newMode === "monthly") {
      isMonthly.value = true
    } else {
      isMonthly.value = false
      extra = dataNew.value.extra
    }
    // No need to set isMonthly here; it's handled by the computed property
  },
  { immediate: true, flush: "pre" }
)

function toggle() {
  defaultMode.value = isMonthly.value ? "yearly" : "monthly"
  ActiveDivs.value[0].classList.remove("active")
  ActiveDivs.value.length = 0
  selected.value.length = 0

  // Assuming dataNew is defined and initialized correctly
  priceA = `$${dataNew.value.Arcade}/mo`
  priceAd = `$${dataNew.value.advanced}/mo`
  priceP = `$${dataNew.value.pro}/mo`
  return extra
}

let dataSaved = ref(null)
let SelectPackage = (event) => {
  let data = event.target.getAttribute("data-index")

  if (selected.value.includes(data)) {
    selected.value.splice(selected.value.indexOf(data), 1)
    event.target.classList.remove("active")
  } else if (selected.value.length >= 1) {
    selected.value.shift()
    selected.value.push(event.target.getAttribute("data-index"))
    ActiveDivs.value.push(event.target)
    event.target.classList.add("active")
    ActiveDivs.value[0].classList.remove("active")
    ActiveDivs.value.shift()
  } else {
    selected.value.push(event.target.getAttribute("data-index"))
    event.target.classList.add("active")
    ActiveDivs.value.push(event.target)
    //  ActiveDivs.value[0].classList.remove('active')
    // ActiveDivs.value.splice(0, 1)
  }
  dataSaved.value = {
    isMonthly: isMonthly.value,
    Package: selected.value
  }
  return dataSaved
}

async function createPackage() {
  const dataS = await dataSaved.value
  useAuth.isMonthly = isMonthly
  if (dataS == null) {
    Swal.fire({
      text: "Select a package to continue!",
      icon: "error",
      buttonsStyling: false,
      confirmButtonText: "Try again!",
      heightAuto: false,
      customClass: {
        confirmButton: "alert  btn-light-danger"
      }
    })
  } else {
    const priceM = data[1].plans[dataS.isMonthly ? "monthly" : "yearly"][dataS.Package]
    const AllPlans = { ...dataS, priceM }
    useAuth.saveDetails(JSON.stringify(AllPlans), "plan", "add-ons")
    Swal.fire({
      text: `You Have Selected Plan ${dataS.Package}`,
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
