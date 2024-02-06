<template>
  <div class="summary top">
    <HeaderIntro
      title="Finishing up"
      description="Double-check everything looks OK before confirming"
    />
    <div class="mainc">
      <div class="package">
        <div class="packageDetails">
          <h1>{{ planPackage }}({{ typePackage }})</h1>
          <router-link to="/plan">Change</router-link>
        </div>
        <p>${{ planPrice }}/yr</p>
      </div>
      <div class="info">
        <div class="text" v-for="det in addonsPrice" :key="det.index">
          <p>{{ det.text }}</p>
          <h2>+${{ det.price }}/yr</h2>
        </div>
      </div>
    </div>
    <div class="total">
      <p class="totaldetails">Total(per year)</p>
      <h2>${{ total }}/yr</h2>
    </div>
  </div>
  <div class="btns" v-show="useAuth.isThank" :class="{ width: useAuth.showBtn === true }">
    <!-- <button class="back" v-show="useAuth.showBtn">go back</button> -->
    <button @click="useAuth.goBack" class="back" :class="{ actives: useAuth.showBtn === true }">go back</button>
    <button v-if="!useAuth.isSummary" class="next" :class="{ leftPos: useAuth.showBtn === false }">
      next step
    </button>
    <button
      v-else
      class="next"
      @click="ConfirmSales"
      :class="{ leftPos: useAuth.showBtn === false, color: useAuth.isSummary }"
    >
      Confirm
    </button>
  </div>
</template>

<script setup lang="ts">
import HeaderIntro from "../components/HeaderIntro.vue"
import { useAuthStore } from "../stores/auth"
import Swal from "sweetalert2/dist/sweetalert2"
import { useRouter } from "vue-router"
const useAuth = useAuthStore()
// get  data from localstorage
const planData = JSON.parse(localStorage.getItem("plan"))
const addOnData = JSON.parse(localStorage.getItem("addons"))
const router = useRouter()

let planPackage = planData.Package[0]
let planPrice = planData.priceM
let addonsPrice = addOnData.prices
const typePackage = planData.isMonthly ? "Monthly" : "Yearly"

const total = planPrice + addonsPrice.reduce((acc, cur) => acc + cur.price, 0)

async function ConfirmSales() {
  Swal.fire({
    text: "Hurray You Have Confirmed everything",
    icon: "success",
    buttonsStyling: false,
    confirmButtonText: "Ok, got it!",
    heightAuto: false,
    customClass: {
      confirmButton: "alert  btn-light-primary"
    }
  }).then(() => {
    router.push("thankyou")
  })
}
</script>
