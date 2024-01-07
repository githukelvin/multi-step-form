<template>
  <div class="summary top">
    <HeaderIntro
      title="Finishing up"
      description="Double-check everything looks OK before confirming"
    />
    <div class="mainc">
      <div class="package">
        <div class="packageDetails">
          <h1>Arcade(Yearly)</h1>
          <router-link to="/plan">Change</router-link>
        </div>
        <p>$90/yr</p>
      </div>
      <div class="info">
        <div class="text">
          <p>Online Service</p>
          <h2>+$10yr</h2>
        </div>
        <div class="text">
          <p>Larger Storage</p>
          <h2>+$20yr</h2>
        </div>
      </div>
    </div>
    <div class="total">
      <p class="totaldetails">Total(per year)</p>
      <h2>$120/yr</h2>
    </div>
  </div>
  <div class="btns" v-show="useAuth.isThank" :class="{ width: useAuth.showBtn === true }">
    <!-- <button class="back" v-show="useAuth.showBtn">go back</button> -->
  <button class="back"   :class="{ actives: useAuth.showBtn === true }" >go back</button>
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
import { useAuthStore } from '../stores/data'
const useAuth = useAuthStore()
</script>
